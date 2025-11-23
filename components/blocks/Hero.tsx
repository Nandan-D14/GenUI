import React from 'react';
import { Button } from '../ui-lib/Button';

export const Hero: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Master Your Workflow
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Streamline your development process with our comprehensive suite of tools designed for modern teams.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg">Get Started</Button>
              <Button size="lg" variant="outline">Learn More</Button>
            </div>
          </div>
          <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square bg-muted flex items-center justify-center">
             <span className="text-muted-foreground">Hero Image Placeholder</span>
          </div>
        </div>
      </div>
    </section>
  );
};
