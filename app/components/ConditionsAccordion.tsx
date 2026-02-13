"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type Condition = {
  title: string;
  description: string;
};

type ConditionsAccordionProps = {
  conditions: Condition[];
  type?: "single" | "multiple";
  defaultValue?: string;
};

export default function ConditionsAccordion({
  conditions,
  type = "single",
  defaultValue,
}: ConditionsAccordionProps) {
  if (conditions.length === 0) return null;

  const firstValue = `item-0`;
  const initialValue = defaultValue ?? (type === "single" ? firstValue : undefined);

  return (
    <Accordion
      type={type}
      defaultValue={initialValue}
      className="w-full"
      collapsible={type === "single"}
    >
      {conditions.map((condition, index) => (
        <AccordionItem key={`${condition.title}-${index}`} value={`item-${index}`}>
          <AccordionTrigger className="text-left">
            {condition.title}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            {condition.description}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
