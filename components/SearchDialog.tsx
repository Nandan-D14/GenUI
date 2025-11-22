import React, { useState, useEffect } from 'react';
import { Search, X, FileText, Box } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { sidebarNav } from './Sidebar';

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SearchDialog: React.FC<SearchDialogProps> = ({ open, onOpenChange }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  // Flatten items for searching
  const allItems = sidebarNav.flatMap(section => 
    section.items.map(item => ({ ...item, category: section.title }))
  );

  const filteredItems = allItems.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(true);
      }
      if (e.key === 'Escape') {
        onOpenChange(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onOpenChange]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm p-4 md:p-0 flex items-start justify-center">
      {/* Overlay to close */}
      <div className="absolute inset-0" onClick={() => onOpenChange(false)} />
      
      <div className="relative w-full max-w-lg mt-4 md:mt-24 bg-popover border border-border rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center border-b border-border px-3" cmdk-input-wrapper="">
          <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
          <input
            className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Type a command or search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          <button onClick={() => onOpenChange(false)} className="p-1 rounded hover:bg-muted">
             <X className="h-4 w-4 text-muted-foreground" />
          </button>
        </div>
        <div className="max-h-[300px] overflow-y-auto p-2">
          {filteredItems.length === 0 && (
            <p className="p-4 text-sm text-muted-foreground text-center">No results found.</p>
          )}
          {filteredItems.map((item) => (
            <button
              key={item.href}
              onClick={() => {
                navigate(item.href);
                onOpenChange(false);
                setQuery('');
              }}
              className="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground"
            >
              <div className="flex items-center gap-2 w-full">
                 {item.category === "AI Tools" ? <Box className="h-4 w-4" /> : <FileText className="h-4 w-4" />}
                 <span>{item.title}</span>
                 <span className="ml-auto text-xs text-muted-foreground">{item.category}</span>
              </div>
            </button>
          ))}
        </div>
        <div className="border-t border-border p-2 flex justify-end">
           <span className="text-xs text-muted-foreground">Press <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">ESC</kbd> to close</span>
        </div>
      </div>
    </div>
  );
};