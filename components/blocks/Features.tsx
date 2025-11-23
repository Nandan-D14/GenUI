import React from 'react';
import { Zap, Shield, Layout } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Features</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Everything you need</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A complete toolkit to build your next great idea.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Zap className="h-6 w-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Optimized for speed and performance. Your users will love the snappy experience.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
             <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Shield className="h-6 w-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Secure by Design</h3>
              <p className="text-muted-foreground">
                Built with security in mind. Data protection and privacy are baked into the core.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
             <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Layout className="h-6 w-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Responsive Layout</h3>
              <p className="text-muted-foreground">
                Looks great on any device, from mobile phones to large desktop screens.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
