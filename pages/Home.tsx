import React from 'react';
import { Button } from '../components/ui-lib/Button';
import { Link } from 'react-router-dom';
import { ArrowRight, Smartphone, Zap, Check, Code, Palette } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-16 pb-20">
      {/* Hero */}
      <section className="mx-auto flex max-w-[980px] flex-col items-center gap-4 py-8 md:py-12 lg:py-24 text-center">
        <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/10 mb-4">
          <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
          v2.0 Now Available
        </div>
        
        <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] text-foreground">
          Build beautiful interfaces <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500">
            at warp speed
          </span>
        </h1>
        
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          Beautifully designed components built with React and Tailwind CSS. 
          Accessible. Customizable. Open Source.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link to="/components/button">
            <Button size="lg" className="w-full sm:w-auto gap-2">
              Browse Components <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link to="/ai-generator">
             <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2">
              <Zap size={16} />
              AI Generator
            </Button>
          </Link>
        </div>
      </section>

      {/* Trusted By (Simulated) */}
      <section className="mx-auto max-w-5xl px-4 text-center">
         <p className="text-sm font-semibold text-muted-foreground mb-6">TRUSTED BY DEVELOPERS AT</p>
         <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* SVG Logos for generic tech companies */}
            <div className="font-bold text-xl flex items-center gap-2"><div className="h-6 w-6 bg-foreground rounded-full"></div> ACME Inc.</div>
            <div className="font-bold text-xl flex items-center gap-2"><div className="h-6 w-6 bg-foreground rounded-lg rotate-45"></div> Globex</div>
            <div className="font-bold text-xl flex items-center gap-2"><div className="h-6 w-6 border-4 border-foreground rounded-full"></div> Sohjo</div>
            <div className="font-bold text-xl flex items-center gap-2"><div className="h-6 w-6 bg-foreground/50 rounded-sm"></div> Initech</div>
         </div>
      </section>

      {/* Features Grid */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-5xl mx-auto px-4 mt-12">
        <div className="rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-colors hover:shadow-lg">
          <div className="h-12 w-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4">
            <Code className="h-6 w-6 text-indigo-500" />
          </div>
          <h3 className="text-lg font-bold mb-2 text-foreground">Modern Tech Stack</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Built with React 19, Tailwind CSS, and TypeScript. Fully typed and ready for production usage.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-colors hover:shadow-lg">
          <div className="h-12 w-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4">
            <Smartphone className="h-6 w-6 text-cyan-500" />
          </div>
          <h3 className="text-lg font-bold mb-2 text-foreground">Responsive & Mobile First</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
             Components are designed to look perfect on any device. Fluid typography and spacing out of the box.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-colors hover:shadow-lg">
           <div className="h-12 w-12 rounded-lg bg-pink-500/10 flex items-center justify-center mb-4">
            <Zap className="h-6 w-6 text-pink-500" />
          </div>
          <h3 className="text-lg font-bold mb-2 text-foreground">AI Powered</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Need a specific component? Generate it instantly with our AI tool and copy-paste the code.
          </p>
        </div>
         <div className="rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-colors hover:shadow-lg">
           <div className="h-12 w-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
            <Palette className="h-6 w-6 text-orange-500" />
          </div>
          <h3 className="text-lg font-bold mb-2 text-foreground">Themable</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Support for dark mode and custom themes via CSS variables. Match your brand identity with ease.
          </p>
        </div>
         <div className="rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-colors hover:shadow-lg md:col-span-2">
           <div className="h-12 w-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4">
            <Check className="h-6 w-6 text-green-500" />
          </div>
          <h3 className="text-lg font-bold mb-2 text-foreground">Accessibility First</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            We prioritize accessibility. Components follow WAI-ARIA patterns to ensure everyone can use your app.
            Keyboard navigation, focus management, and screen reader support are built-in.
          </p>
        </div>
      </section>
    </div>
  );
};
