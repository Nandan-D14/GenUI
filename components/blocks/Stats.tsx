import React from 'react';

export const Stats: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-4">
          <div className="flex flex-col space-y-2">
            <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl/none">10K+</h3>
            <p className="text-sm text-primary-foreground/80">Downloads</p>
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl/none">200+</h3>
            <p className="text-sm text-primary-foreground/80">Components</p>
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl/none">99%</h3>
            <p className="text-sm text-primary-foreground/80">Satisfaction</p>
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl/none">24/7</h3>
            <p className="text-sm text-primary-foreground/80">Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};
