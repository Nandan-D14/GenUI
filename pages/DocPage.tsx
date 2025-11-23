import React from 'react';
import { PreviewWrapper } from '../components/PreviewWrapper';
import { ChevronRight } from 'lucide-react';

interface DocPageProps {
  title: string;
  description: string;
  component: React.ReactNode;
  code: string;
  propsTable?: React.ReactNode;
}

export const DocPage: React.FC<DocPageProps> = ({ title, description, component, code }) => {
  return (
    <div className="w-full max-w-3xl space-y-8">
      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
        <span>Docs</span>
        <ChevronRight className="h-4 w-4" />
        <span>Components</span>
        <ChevronRight className="h-4 w-4" />
        <span className="font-medium text-foreground">{title}</span>
      </div>

      <div className="space-y-4">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
          {title}
        </h1>
        <p className="text-lg text-muted-foreground leading-7">
          {description}
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight border-b border-border pb-2 text-foreground">
          Preview
        </h2>
        <PreviewWrapper code={code}>
          {component}
        </PreviewWrapper>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight border-b border-border pb-2 text-foreground">
          Installation
        </h2>
        <div className="rounded-md bg-zinc-950 border border-border p-4 relative overflow-hidden">
          <code className="text-sm font-mono text-zinc-100">
            npm install lucide-react clsx tailwind-merge
          </code>
        </div>
      </div>
    </div>
  );
};
