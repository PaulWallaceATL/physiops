"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { motion } from "motion/react";

type HeroSectionProps = {
  title: string;
  subtitle: string;
};

export default function HeroSection({ title, subtitle }: HeroSectionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));

    const fov = camera.fov * (Math.PI / 180);
    const height = camera.position.z * Math.tan(fov / 2) * 2;
    const width = height * camera.aspect;

    const vertexShader = `
      varying vec2 vUv;

      void main() {
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);
        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectedPosition = projectionMatrix * viewPosition;
        gl_Position = projectedPosition;
        vUv = uv;
      }
    `;

    const fragmentShader = `
      varying vec2 vUv;
      uniform vec2 uViewportRes;
      uniform float uTime;
      uniform float uRedFactor;
      uniform float uGreenFactor;
      uniform float uBlueFactor;
      uniform vec2 uMouse;

      vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
      vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

      float snoise(vec3 v){
        const vec2  C = vec2(1.0/6.0, 1.0/3.0);
        const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

        vec3 i  = floor(v + dot(v, C.yyy));
        vec3 x0 = v - i + dot(i, C.xxx);

        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min(g.xyz, l.zxy);
        vec3 i2 = max(g.xyz, l.zxy);

        vec3 x1 = x0 - i1 + 1.0 * C.xxx;
        vec3 x2 = x0 - i2 + 2.0 * C.xxx;
        vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;

        i = mod(i, 289.0);
        vec4 p = permute(permute(permute(
          i.z + vec4(0.0, i1.z, i2.z, 1.0))
          + i.y + vec4(0.0, i1.y, i2.y, 1.0))
          + i.x + vec4(0.0, i1.x, i2.x, 1.0));

        float n_ = 1.0/7.0;
        vec3  ns = n_ * D.wyz - D.xzx;

        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_);

        vec4 x = x_ * ns.x + ns.yyyy;
        vec4 y = y_ * ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);

        vec4 b0 = vec4(x.xy, y.xy);
        vec4 b1 = vec4(x.zw, y.zw);

        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));

        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;

        vec3 p0 = vec3(a0.xy,h.x);
        vec3 p1 = vec3(a0.zw,h.y);
        vec3 p2 = vec3(a1.xy,h.z);
        vec3 p3 = vec3(a1.zw,h.w);

        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
        p0 *= norm.x;
        p1 *= norm.y;
        p2 *= norm.z;
        p3 *= norm.w;

        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
      }

      vec2 coverUvs(vec2 imageRes, vec2 containerRes, vec2 vUv) {
        float imageAspectX = imageRes.x/imageRes.y;
        float imageAspectY = imageRes.y/imageRes.x;

        float containerAspectX = containerRes.x/containerRes.y;
        float containerAspectY = containerRes.y/containerRes.x;

        vec2 ratio = vec2(
          min(containerAspectX / imageAspectX, 1.0),
          min(containerAspectY / imageAspectY, 1.0)
        );

        vec2 newUvs = vec2(
          vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
          vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
        );

        return newUvs;
      }

      void main() {
        vec2 squareUvs = coverUvs(vec2(1.0), uViewportRes, vUv);

        vec2 mouseInfluence = squareUvs - uMouse;
        float mouseDistance = length(mouseInfluence);
        float mouseEffect = smoothstep(0.8, 0.0, mouseDistance) * 0.3;

        float noise1 = snoise(vec3(squareUvs * 2.0 + mouseInfluence * 0.1, uTime * 0.1));
        float noise2 = snoise(vec3(squareUvs * 3.0 - mouseInfluence * 0.15, uTime * 0.08));
        float noise3 = snoise(vec3(squareUvs * 1.5 + mouseInfluence * 0.05, uTime * 0.12));

        float combinedNoise = noise1 * 0.5 + noise2 * 0.3 + noise3 * 0.2;

        float waves = sin(combinedNoise * 8.0 + uTime * 0.5 + mouseEffect * 5.0) * 0.5 + 0.5;
        float radialGradient = length(squareUvs - 0.5) * 2.0;

        vec3 finalColor = vec3(
          0.2 + waves * uRedFactor * (1.0 - radialGradient * 0.3) + mouseEffect * 0.2,
          0.3 + waves * uGreenFactor + sin(squareUvs.x * 3.14) * 0.2 + mouseEffect * 0.3,
          0.6 + waves * uBlueFactor + cos(squareUvs.y * 3.14) * 0.3 + mouseEffect * 0.4
        );

        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uViewportRes: {
          value: new THREE.Vector2(window.innerWidth, window.innerHeight),
        },
        uRedFactor: { value: 0.4 },
        uGreenFactor: { value: 0.5 },
        uBlueFactor: { value: 0.9 },
        uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      },
    });

    const geometry = new THREE.PlaneGeometry(1, 1);
    const mesh = new THREE.Mesh(geometry, material);
    mesh.scale.set(width, height, 1);
    scene.add(mesh);

    const clock = new THREE.Clock();

    let animationId: number;
    const animate = () => {
      const time = clock.getElapsedTime();
      material.uniforms.uTime.value = time;
      material.uniforms.uMouse.value.x = mousePosition.x;
      material.uniforms.uMouse.value.y = mousePosition.y;
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
      renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));

      const fov = camera.fov * (Math.PI / 180);
      const height = camera.position.z * Math.tan(fov / 2) * 2;
      const width = height * camera.aspect;

      mesh.scale.set(width, height, 1);
      material.uniforms.uViewportRes.value.set(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [mousePosition]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = 1.0 - (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden bg-white dark:bg-neutral-950"
      onMouseMove={handleMouseMove}
    >
      {/* WebGL Canvas Background - Fullscreen */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full z-0"
        style={{ position: "fixed", top: 0, left: 0 }}
        aria-hidden
      />

      {/* Content Overlay - Centered title and subtitle */}
      <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-6 py-24">
        <div className="bg-[rgba(0,0,0,0.35)] dark:bg-[rgba(0,0,0,0.5)] rounded-2xl px-8 py-12 text-center max-w-4xl">
          <motion.h1
            className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="mt-4 text-lg text-white/90 sm:text-xl md:text-2xl md:mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
