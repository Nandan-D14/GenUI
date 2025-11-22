import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface PreviewWrapperProps {
  children: React.ReactNode;
  code: string;
}

export const PreviewWrapper: React.FC<PreviewWrapperProps> = ({ children, code }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-sm">
      <div className="flex items-center justify-between border-b border-border px-4 py-2 bg-muted/30">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('preview')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeTab === 'preview' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Preview
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeTab === 'code' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Code
          </button>
        </div>
      </div>
      
      <div className="relative">
        {activeTab === 'preview' ? (
          <div className="flex min-h-[350px] w-full items-center justify-center p-10 bg-muted/20 border-b border-border">
            {children}
          </div>
        ) : (
          <div className="relative min-h-[350px] bg-zinc-950 p-4 overflow-x-auto dark:bg-zinc-950">
             <button
              onClick={handleCopy}
              className="absolute right-4 top-4 p-2 rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-all"
              title="Copy Code"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
            </button>
            <pre className="text-sm font-mono text-zinc-300 leading-relaxed">
              <code>{code}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};