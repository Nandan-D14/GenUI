import React from 'react';
import { Button } from '../components/ui-lib/Button';
import { Link } from 'react-router-dom';
import { ArrowRight, Box, Smartphone, Zap } from 'lucide-react';

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
            <Button size="lg" className="w-full sm:w-auto">
              Browse Components
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

      {/* Features Grid */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-5xl mx-auto px-4">
        <div className="rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-colors">
          <div className="h-12 w-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4">
            <Box className="h-6 w-6 text-indigo-500" />
          </div>
          <h3 className="text-lg font-bold mb-2 text-foreground">Copy & Paste</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Every component is free to use. Just copy the code and paste it into your project. No npm install required for the core logic.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-colors">
          <div className="h-12 w-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4">
            <Smartphone className="h-6 w-6 text-cyan-500" />
          </div>
          <h3 className="text-lg font-bold mb-2 text-foreground">Responsive</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Designed with mobile-first principles. Components look great on phones, tablets, and desktops automatically.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-colors">
           <div className="h-12 w-12 rounded-lg bg-pink-500/10 flex items-center justify-center mb-4">
            <Zap className="h-6 w-6 text-pink-500" />
          </div>
          <h3 className="text-lg font-bold mb-2 text-foreground">AI Powered</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Need something specific? Use our Gemini-powered generator to build custom components in seconds.
          </p>
        </div>
      </section>
    </div>
  );
};