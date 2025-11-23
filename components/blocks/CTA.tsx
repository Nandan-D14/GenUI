import React from 'react';
import { Button } from '../ui-lib/Button';

export const CTA: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 border-t border-border">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 mx-auto max-w-6xl">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Ready to get started?
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Join thousands of satisfied developers building the future today.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <form className="flex space-x-2">
            <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-lg flex-1" placeholder="Enter your email" type="email" />
            <Button type="submit">Sign Up</Button>
          </form>
          <p className="text-xs text-muted-foreground">
            Sign up to get notified when we launch. <span className="underline underline-offset-2">Terms & Conditions</span>
          </p>
        </div>
      </div>
    </section>
  );
};
