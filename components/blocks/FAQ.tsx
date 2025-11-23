import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui-lib/Accordion';

export const FAQ: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6 mx-auto max-w-3xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
          <p className="text-muted-foreground md:text-xl">
            Everything you need to know about the product and billing.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is this library free to use?</AccordionTrigger>
            <AccordionContent>
              Yes, it is open source and free for both personal and commercial projects.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Can I use it with other frameworks?</AccordionTrigger>
            <AccordionContent>
              Currently, it is designed for React. However, the CSS and logic can be adapted for other frameworks like Vue or Svelte.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Do you offer support?</AccordionTrigger>
            <AccordionContent>
              We offer community support via GitHub and Discord. For priority support, check out our Pro plan.
            </AccordionContent>
          </AccordionItem>
           <AccordionItem value="item-4">
            <AccordionTrigger>How do I customize the theme?</AccordionTrigger>
            <AccordionContent>
              The library uses Tailwind CSS variables. You can override these variables in your global CSS file to change the look and feel.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};
