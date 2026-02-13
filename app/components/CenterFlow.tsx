"use client";

import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  useMemo,
  ReactNode,
} from "react";

export interface NodeItem {
  /** Content to render inside this node (JSX, icons, images, etc.) */
  content?: ReactNode;
}

export interface CenterFlowProps {
  /** Array of node items defining what content goes into each node */
  nodeItems?: NodeItem[];
  /** Content to render inside the center node */
  centerContent?: ReactNode;
  /** Center square size in pixels */
  centerSize?: number;
  /** Outer node size in pixels (min width/height when variableNodeWidth is true) */
  nodeSize?: number;
  /** If true, outer nodes grow horizontally to fit content */
  variableNodeWidth?: boolean;
  /** Pulse travel duration in seconds */
  pulseDuration?: number;
  /** Average delay between pulses spawning */
  pulseInterval?: number;
  /** Pulse line length as percentage of path (0-1) */
  pulseLength?: number;
  /** Line stroke width */
  lineWidth?: number;
  /** Pulse line stroke width */
  pulseWidth?: number;
  /** Pulse blur/softness (0-10) */
  pulseSoftness?: number;
  /** Line color (dark mode) */
  lineColor?: string;
  /** Line color (light mode) */
  lineColorLight?: string;
  /** Pulse color (dark mode) */
  pulseColor?: string;
  /** Pulse color (light mode) */
  pulseColorLight?: string;
  /** Center glow color (dark mode) */
  glowColor?: string;
  /** Center glow color (light mode) */
  glowColorLight?: string;
  /** Maximum glow intensity */
  maxGlowIntensity?: number;
  /** Glow decay speed (higher = faster decay) */
  glowDecay?: number;
  /** Border radius for center square */
  borderRadius?: number;
  /** Distance of nodes from center as percentage (0-1) */
  nodeDistance?: number;
  /** Disable glow intensification when pulses arrive */
  disableBlinking?: boolean;
  className?: string;
}

interface PulseState {
  id: string;
  pathIndex: number;
  startTime: number;
}

interface PulseSegment {
  id: string;
  d: string;
  opacity: number;
  startPoint: { x: number; y: number };
  endPoint: { x: number; y: number };
}

const BASE_GLOW = 40;
const FADE_THRESHOLD = 0.15;

const DEFAULT_NODE_ITEMS: NodeItem[] = Array(8).fill({});

function useIsDark() {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const check = () =>
      setIsDark(
        typeof document !== "undefined" &&
          document.documentElement.classList.contains("dark"),
      );
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);
  return isDark;
}

const generateNodePositions = (count: number, distance: number) => {
  const clampedCount = Math.max(2, Math.min(20, count));
  const nodes: { x: number; y: number }[] = new Array(clampedCount);
  const angleStep = (Math.PI * 2) / clampedCount;
  const radius = distance * 45;

  for (let i = 0; i < clampedCount; i++) {
    const angle = i * angleStep - Math.PI / 2;
    nodes[i] = {
      x: 50 + Math.cos(angle) * radius,
      y: 50 + Math.sin(angle) * radius,
    };
  }
  return nodes;
};

const generatePathD = (
  from: { x: number; y: number },
  to: { x: number; y: number },
) => {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  return `M ${from.x} ${from.y} C ${from.x + dx * 0.4} ${from.y + dy * 0.1}, ${from.x + dx * 0.6} ${to.y - dy * 0.1}, ${to.x} ${to.y}`;
};

const CenterFlow: React.FC<CenterFlowProps> = ({
  nodeItems = DEFAULT_NODE_ITEMS,
  centerContent,
  centerSize = 120,
  nodeSize = 60,
  variableNodeWidth = false,
  pulseDuration = 5,
  pulseInterval = 10,
  pulseLength = 0.4,
  lineWidth = 2,
  pulseWidth = 1,
  pulseSoftness = 10,
  lineColor = "#1c1c1c",
  lineColorLight = "#64748b",
  pulseColor = "#e724eb",
  pulseColorLight = "#7c3aed",
  glowColor = "#e724eb",
  glowColorLight = "#7c3aed",
  maxGlowIntensity = 25,
  glowDecay = 0.95,
  borderRadius = 35,
  nodeDistance = 0.7,
  disableBlinking = false,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const glowIntensityRef = useRef(0);
  const pathCacheRef = useRef<Map<number, SVGPathElement>>(new Map());

  const isDark = useIsDark();
  const isLight = !isDark;

  const nodeCount = Math.max(2, Math.min(20, nodeItems.length));

  const activeLineColor = isLight ? lineColorLight : lineColor;
  const activePulseColor = isLight ? pulseColorLight : pulseColor;
  const activeGlowColor = isLight ? glowColorLight : glowColor;

  const nodeBgColor = isLight
    ? "rgba(255, 255, 255, 0.9)"
    : "rgba(10, 10, 10, 0.9)";
  const centerBgColor = isLight
    ? "rgba(255, 255, 255, 0.95)"
    : "rgba(10, 10, 10, 0.95)";

  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const [pulses, setPulses] = useState<PulseState[]>([]);
  const [pulseSegments, setPulseSegments] = useState<PulseSegment[]>([]);

  const nodes = useMemo(
    () => generateNodePositions(nodeCount, nodeDistance),
    [nodeCount, nodeDistance],
  );

  const center = useMemo(
    () => ({
      x: dimensions.width / 2,
      y: dimensions.height / 2,
    }),
    [dimensions],
  );

  const nodePositions = useMemo(
    () =>
      nodes.map((node) => ({
        x: (node.x / 100) * dimensions.width,
        y: (node.y / 100) * dimensions.height,
      })),
    [nodes, dimensions],
  );

  const softness = pulseSoftness / 10;
  const tailStop = softness * 30;
  const headStop = 100 - softness * 20;

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        if (width > 0 && height > 0) {
          setDimensions({ width, height });
        }
      }
    };
    updateDimensions();
    const rafId = requestAnimationFrame(() => updateDimensions());
    window.addEventListener("resize", updateDimensions);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  const onPulseArrive = useCallback(() => {
    if (disableBlinking) return;
    glowIntensityRef.current = Math.min(
      glowIntensityRef.current + maxGlowIntensity * 0.6,
      maxGlowIntensity,
    );
  }, [maxGlowIntensity, disableBlinking]);

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];

    const spawnPulseForPath = (pathIndex: number) => {
      setPulses((prev) => [
        ...prev,
        {
          id: `${pathIndex}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          pathIndex,
          startTime: Date.now(),
        },
      ]);
      const timeout = setTimeout(
        () => spawnPulseForPath(pathIndex),
        pulseInterval * 1000 * (0.7 + Math.random() * 0.6),
      );
      timeouts.push(timeout);
    };

    nodePositions.forEach((_, pathIndex) => {
      const timeout = setTimeout(
        () => spawnPulseForPath(pathIndex),
        Math.random() * pulseInterval * 1000,
      );
      timeouts.push(timeout);
    });

    return () => timeouts.forEach(clearTimeout);
  }, [nodePositions, pulseInterval]);

  useEffect(() => {
    let frameId: number;
    const duration = pulseDuration * 1000;

    const animate = () => {
      const now = Date.now();
      setPulses((prev) =>
        prev.filter((pulse) => {
          if ((now - pulse.startTime) / duration >= 1) {
            onPulseArrive();
            return false;
          }
          return true;
        }),
      );
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [pulseDuration, onPulseArrive]);

  useEffect(() => {
    pathCacheRef.current.clear();
  }, [nodePositions, center]);

  useEffect(() => {
    let frameId: number;
    const duration = pulseDuration * 1000;

    const calculateSegments = () => {
      const now = Date.now();
      const segments: PulseSegment[] = [];

      for (const pulse of pulses) {
        const from = nodePositions[pulse.pathIndex];
        if (!from) continue;

        let path = pathCacheRef.current.get(pulse.pathIndex);
        if (!path) {
          path = document.createElementNS("http://www.w3.org/2000/svg", "path");
          path.setAttribute("d", generatePathD(from, center));
          pathCacheRef.current.set(pulse.pathIndex, path);
        }

        const progress = Math.min((now - pulse.startTime) / duration, 1);
        if (progress <= 0 || progress >= 1) continue;

        const length = path.getTotalLength();
        const headPos = progress;
        const tailPos = Math.max(0, progress - pulseLength);

        const points: { x: number; y: number }[] = [];
        for (let i = 0; i <= 8; i++) {
          const point = path.getPointAtLength(
            length * (tailPos + (headPos - tailPos) * (i / 8)),
          );
          points.push({ x: point.x, y: point.y });
        }

        if (points.length < 2) continue;

        const opacity =
          Math.min(1, progress / FADE_THRESHOLD) *
          Math.min(1, (1 - progress) / FADE_THRESHOLD);

        segments.push({
          id: pulse.id,
          d:
            `M ${points[0].x} ${points[0].y}` +
            points
              .slice(1)
              .map((p) => ` L ${p.x} ${p.y}`)
              .join(""),
          opacity,
          startPoint: points[0],
          endPoint: points[points.length - 1],
        });
      }

      setPulseSegments(segments);
      frameId = requestAnimationFrame(calculateSegments);
    };

    frameId = requestAnimationFrame(calculateSegments);
    return () => cancelAnimationFrame(frameId);
  }, [pulses, nodePositions, center, pulseDuration, pulseLength]);

  const nodeStyle = useMemo(
    () => ({
      borderRadius: borderRadius * 0.6,
      background: nodeBgColor,
      backdropFilter: "blur(8px)",
      border: `1px solid ${isLight ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)"}`,
      boxShadow: isLight
        ? "0 2px 8px rgba(0,0,0,0.1)"
        : "0 2px 8px rgba(0,0,0,0.3)",
      ...(variableNodeWidth
        ? {
            minWidth: nodeSize,
            width: "max-content",
            height: nodeSize,
            paddingLeft: 12,
            paddingRight: 12,
          }
        : { width: nodeSize, height: nodeSize }),
    }),
    [borderRadius, isLight, nodeBgColor, variableNodeWidth, nodeSize],
  );

  const centerStyle = useMemo(
    () => ({
      left: center.x,
      top: center.y,
      width: centerSize,
      height: centerSize,
      borderRadius,
      background: centerBgColor,
      backdropFilter: "blur(12px)",
      border: `2px solid ${activeGlowColor}20`,
      boxShadow: `0 0 20px 5px ${activeGlowColor}10`,
    }),
    [
      center.x,
      center.y,
      centerSize,
      borderRadius,
      centerBgColor,
      activeGlowColor,
    ],
  );

  const defaultCenterContent = (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-full h-full"
      style={{ color: activePulseColor }}
    >
      <path
        d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const defaultNodeContent = (
    <div
      className="w-3 h-3 rounded-full"
      style={{
        background: `${activePulseColor}40`,
        boxShadow: `0 0 8px ${activePulseColor}30`,
      }}
    />
  );

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${className || ""}`}
      style={{ background: "transparent" }}
    >
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ overflow: "visible" }}
      >
        <defs>
          <filter id="pulseGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {pulseSegments.map((segment) => (
            <linearGradient
              key={`grad-${segment.id}`}
              id={`pulse-grad-${segment.id}`}
              x1={segment.startPoint.x}
              y1={segment.startPoint.y}
              x2={segment.endPoint.x}
              y2={segment.endPoint.y}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor={activePulseColor} stopOpacity="0" />
              <stop
                offset={`${tailStop}%`}
                stopColor={activePulseColor}
                stopOpacity="1"
              />
              <stop
                offset={`${headStop}%`}
                stopColor={activePulseColor}
                stopOpacity="1"
              />
              <stop
                offset="100%"
                stopColor={activePulseColor}
                stopOpacity="0"
              />
            </linearGradient>
          ))}
        </defs>

        {nodePositions.map((node, i) => (
          <path
            key={i}
            d={generatePathD(node, center)}
            fill="none"
            stroke={activeLineColor}
            strokeWidth={lineWidth}
            strokeLinecap="round"
          />
        ))}

        {pulseSegments.map((segment) => (
          <g key={segment.id}>
            <path
              d={segment.d}
              fill="none"
              stroke={`url(#pulse-grad-${segment.id})`}
              strokeWidth={pulseWidth * 3}
              strokeLinecap="round"
              opacity={segment.opacity * 0.4}
              filter="url(#pulseGlow)"
            />
            <path
              d={segment.d}
              fill="none"
              stroke={`url(#pulse-grad-${segment.id})`}
              strokeWidth={pulseWidth}
              strokeLinecap="round"
              opacity={segment.opacity}
            />
          </g>
        ))}
      </svg>

      {nodePositions.map((node, i) => {
        const nodeItem = nodeItems[i];
        const hasCustomContent = nodeItem?.content !== undefined;

        return (
          <div
            key={i}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
            style={{
              left: node.x,
              top: node.y,
              ...nodeStyle,
            }}
          >
            {hasCustomContent ? nodeItem!.content : defaultNodeContent}
          </div>
        );
      })}

      <div
        ref={glowRef}
        className="absolute transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-colors duration-300"
        style={centerStyle}
      >
        <div
          className="flex items-center justify-center font-semibold text-lg text-neutral-900 dark:text-white"
          style={{ width: centerSize * 0.5, height: centerSize * 0.5 }}
        >
          {centerContent !== undefined ? centerContent : defaultCenterContent}
        </div>
      </div>
    </div>
  );
};

CenterFlow.displayName = "CenterFlow";

export default CenterFlow;
