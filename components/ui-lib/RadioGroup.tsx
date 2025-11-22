import React, { createContext, useContext, useState } from 'react';
import { Circle } from 'lucide-react';

const RadioGroupContext = createContext<{
  value: string | undefined;
  onValueChange: (value: string) => void;
} | undefined>(undefined);

interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  defaultValue,
  value: controlledValue,
  onValueChange,
  className = '',
  children,
  ...props
}) => {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const value = controlledValue !== undefined ? controlledValue : uncontrolledValue;

  const handleValueChange = (newValue: string) => {
    if (onValueChange) {
      onValueChange(newValue);
    } else {
      setUncontrolledValue(newValue);
    }
  };

  return (
    <RadioGroupContext.Provider value={{ value, onValueChange: handleValueChange }}>
      <div className={`grid gap-2 ${className}`} role="radiogroup" {...props}>
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
};

interface RadioGroupItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

export const RadioGroupItem: React.FC<RadioGroupItemProps> = ({
  className = '',
  value,
  ...props
}) => {
  const context = useContext(RadioGroupContext);
  if (!context) throw new Error("RadioGroupItem must be used within a RadioGroup");

  const checked = context.value === value;

  return (
    <button
      type="button"
      role="radio"
      aria-checked={checked}
      onClick={() => context.onValueChange(value)}
      className={`aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    >
      {checked && <Circle className="h-2.5 w-2.5 fill-current text-current mx-auto" />}
    </button>
  );
};
