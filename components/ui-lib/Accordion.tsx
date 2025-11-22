import React, { createContext, useContext, useState } from 'react';
import { ChevronDown } from 'lucide-react';

type AccordionContextType = {
  value: string | undefined;
  onValueChange: (value: string) => void;
};

const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: 'single' | 'multiple'; // Implementing single for now to match simple requirements
  collapsible?: boolean;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

export const Accordion: React.FC<AccordionProps> = ({
  children,
  className = '',
  defaultValue,
  value: controlledValue,
  onValueChange,
  ...props
}) => {
  const [uncontrolledValue, setUncontrolledValue] = useState<string | undefined>(defaultValue);
  const value = controlledValue !== undefined ? controlledValue : uncontrolledValue;

  const handleValueChange = (newValue: string) => {
    const nextValue = newValue === value ? undefined : newValue;
    if (onValueChange) {
      onValueChange(nextValue as string);
    } else {
      setUncontrolledValue(nextValue);
    }
  };

  return (
    <AccordionContext.Provider value={{ value, onValueChange: handleValueChange }}>
      <div className={className} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

// Internal base component
const AccordionItemBase: React.FC<AccordionItemProps> = ({
  children,
  className = '',
  value,
  ...props
}) => {
  return (
    <div className={`border-b border-border ${className}`} data-value={value} {...props}>
      {children}
    </div>
  );
};

// Helper Context for Items
const AccordionItemContext = createContext<{ value: string }>({ value: '' });

// Exported wrapper that provides context
export const AccordionItem: React.FC<AccordionItemProps> = ({ value, children, ...props }) => {
    return (
        <AccordionItemContext.Provider value={{ value }}>
            <AccordionItemBase value={value} {...props}>
                {children}
            </AccordionItemBase>
        </AccordionItemContext.Provider>
    );
};

interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const AccordionTrigger: React.FC<AccordionTriggerProps> = ({
  children,
  className = '',
  onClick,
  ...props
}) => {
  const context = useContext(AccordionContext);

  return (
    <AccordionItemContext.Consumer>
      {({ value }) => {
        const isOpen = context?.value === value;
        return (
          <h3 className="flex">
            <button
              type="button"
              onClick={(e) => {
                context?.onValueChange(value);
                if (onClick) onClick(e);
              }}
              className={`flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180 ${className}`}
              data-state={isOpen ? 'open' : 'closed'}
              {...props}
            >
              {children}
              <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
            </button>
          </h3>
        );
      }}
    </AccordionItemContext.Consumer>
  );
};

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const AccordionContent: React.FC<AccordionContentProps> = ({
  children,
  className = '',
  ...props
}) => {
  const context = useContext(AccordionContext);

  return (
     <AccordionItemContext.Consumer>
      {({ value }) => {
         const isOpen = context?.value === value;
         if (!isOpen) return null;

         return (
            <div
              className={`overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down ${className}`}
              data-state={isOpen ? 'open' : 'closed'}
              {...props}
            >
              <div className="pb-4 pt-0">{children}</div>
            </div>
         );
      }}
     </AccordionItemContext.Consumer>
  );
};
