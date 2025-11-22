import React, { useState } from 'react';
import { generateComponentCode } from '../services/gemini';
import { Button } from '../components/ui-lib/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui-lib/Card';
import { Sparkles, Loader2, Copy, Check, Terminal } from 'lucide-react';

export const AiBuilder: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setLoading(true);
    setError('');
    setGeneratedCode('');
    
    try {
      const code = await generateComponentCode(prompt);
      setGeneratedCode(code);
    } catch (err) {
      setError("Failed to generate component. Please check your API key and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-4xl space-y-8 animate-in fade-in duration-500">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
           <div className="p-2 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
             <Sparkles className="h-6 w-6 text-indigo-500" />
           </div>
           <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
             AI Component Generator
           </h1>
        </div>
        <p className="text-lg text-muted-foreground leading-7 max-w-2xl">
          Describe the UI component you need, and our Gemini-powered engine will generate 
          production-ready React + Tailwind code for you instantly.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Input Section */}
        <Card className="h-full border-border bg-card">
          <CardHeader>
            <CardTitle>Description</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
             <textarea 
               className="w-full min-h-[200px] p-4 rounded-md bg-background border border-input text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent resize-none font-mono text-sm"
               placeholder="e.g., A pricing card with a featured badge, list of features with checkmarks, and a gradient subscribe button."
               value={prompt}
               onChange={(e) => setPrompt(e.target.value)}
             />
             <div className="flex justify-end">
               <Button 
                 onClick={handleGenerate} 
                 disabled={loading || !prompt.trim()}
                 className="w-full sm:w-auto"
               >
                 {loading ? (
                   <>
                     <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                     Generating...
                   </>
                 ) : (
                   <>
                     <Sparkles className="mr-2 h-4 w-4" />
                     Generate Component
                   </>
                 )}
               </Button>
             </div>
             {error && (
               <div className="text-red-400 text-sm bg-destructive/10 border border-destructive/20 p-3 rounded-md">
                 {error}
               </div>
             )}
          </CardContent>
        </Card>

        {/* Output Section */}
        <Card className="h-full border-border bg-zinc-950 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-50" />
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="flex items-center gap-2 text-zinc-100">
              <Terminal className="h-4 w-4 text-zinc-400" />
              Generated Code
            </CardTitle>
            {generatedCode && (
              <button
                onClick={handleCopy}
                className="p-2 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </button>
            )}
          </CardHeader>
          <CardContent className="p-0">
            {generatedCode ? (
              <div className="max-h-[500px] overflow-y-auto p-4">
                <pre className="text-xs sm:text-sm font-mono text-indigo-100/90 whitespace-pre-wrap break-words">
                  <code>{generatedCode}</code>
                </pre>
              </div>
            ) : (
              <div className="h-[300px] flex flex-col items-center justify-center text-zinc-600 gap-3">
                <Terminal className="h-8 w-8 opacity-20" />
                <p className="text-sm">Code will appear here...</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};