import React from 'react';
import { Layers, Github, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container flex flex-col gap-8 py-8 px-4 sm:px-8 mx-auto max-w-screen-2xl md:py-10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 justify-between">
          <div className="flex flex-col gap-4 w-full md:w-1/3">
            <Link to="/" className="flex items-center space-x-2">
              <Layers className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg tracking-tight">NextUI Gen</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-loose">
              Beautifully designed components built with React and Tailwind CSS.
              Open source and free to use in your projects.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 w-full md:w-2/3">
             <div className="flex flex-col gap-2">
               <h3 className="font-semibold text-sm">Components</h3>
               <Link to="/components/button" className="text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-4">Button</Link>
               <Link to="/components/card" className="text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-4">Card</Link>
               <Link to="/components/input" className="text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-4">Input</Link>
               <Link to="/components/badge" className="text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-4">Badge</Link>
             </div>
             <div className="flex flex-col gap-2">
               <h3 className="font-semibold text-sm">Resources</h3>
               <Link to="/installation" className="text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-4">Installation</Link>
               <Link to="/ai-generator" className="text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-4">AI Generator</Link>
             </div>
             <div className="flex flex-col gap-2">
               <h3 className="font-semibold text-sm">Social</h3>
               <a href="#" className="text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-4 flex items-center gap-2">
                 <Github className="h-4 w-4" /> GitHub
               </a>
               <a href="#" className="text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-4 flex items-center gap-2">
                 <Twitter className="h-4 w-4" /> Twitter
               </a>
             </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-border pt-8 gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} NextUI Gen. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
             <span className="text-sm text-muted-foreground">Built with love & coffee</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
