import React, { createContext, useContext, useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';

const SheetContext = createContext<{
  open: boolean;
  setOpen: (open: boolean) => void;
} | undefined>(undefined);

interface SheetProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

export const Sheet: React.FC<SheetProps> = ({
  open: controlledOpen,
  onOpenChange,
  children
}) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
  const open = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen;

  const setOpen = (newOpen: boolean) => {
    if (onOpenChange) {
      onOpenChange(newOpen);
    } else {
      setUncontrolledOpen(newOpen);
    }
  };

  return (
    <SheetContext.Provider value={{ open, setOpen }}>
      {children}
    </SheetContext.Provider>
  );
};

interface SheetTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export const SheetTrigger: React.FC<SheetTriggerProps> = ({
  children,
  onClick,
  asChild = false,
  ...props
}) => {
  const context = useContext(SheetContext);
  if (!context) throw new Error("SheetTrigger must be used within a Sheet");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    context.setOpen(true);
    if (onClick) onClick(e);
  };

  if (asChild && React.isValidElement(children)) {
     return React.cloneElement(children as React.ReactElement<any>, {
        onClick: handleClick,
        ...props
     });
  }

  return (
    <button
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};

export const SheetContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = '',
  ...props
}) => {
  const context = useContext(SheetContext);
  if (!context) throw new Error("SheetContent must be used within a Sheet");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && context.open) {
        context.setOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [context.open, context]);

  if (!context.open) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm" onClick={() => context.setOpen(false)}>
      <div
        className={`fixed inset-y-0 right-0 z-50 h-full w-3/4 border-l bg-background p-6 shadow-lg transition ease-in-out duration-300 sm:max-w-sm ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
         <div className="flex flex-col space-y-2 text-center sm:text-left mb-4">
             {children}
         </div>
         <button
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"
            onClick={() => context.setOpen(false)}
         >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
         </button>
      </div>
    </div>,
    document.body
  );
};

export const SheetHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = '', ...props }) => (
  <div className={`flex flex-col space-y-2 text-center sm:text-left ${className}`} {...props} />
);

export const SheetFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = '', ...props }) => (
  <div className={`flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 ${className}`} {...props} />
);

export const SheetTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ className = '', ...props }) => (
  <h3 className={`text-lg font-semibold text-foreground ${className}`} {...props} />
);

export const SheetDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({ className = '', ...props }) => (
  <p className={`text-sm text-muted-foreground ${className}`} {...props} />
);
