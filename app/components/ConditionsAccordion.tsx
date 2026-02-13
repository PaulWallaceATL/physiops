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

const accordionItems = (
  conditions: Condition[],
) =>
  conditions.map((condition, index) => (
    <AccordionItem key={`${condition.title}-${index}`} value={`item-${index}`}>
      <AccordionTrigger className="text-left">
        {condition.title}
      </AccordionTrigger>
      <AccordionContent className="text-muted-foreground">
        {condition.description}
      </AccordionContent>
    </AccordionItem>
  ));

export default function ConditionsAccordion({
  conditions,
  type = "single",
  defaultValue,
}: ConditionsAccordionProps) {
  if (conditions.length === 0) return null;

  if (type === "multiple") {
    return (
      <Accordion type="multiple" className="w-full">
        {accordionItems(conditions)}
      </Accordion>
    );
  }

  return (
    <Accordion
      type="single"
      defaultValue={defaultValue}
      className="w-full"
      collapsible
    >
      {accordionItems(conditions)}
    </Accordion>
  );
}
