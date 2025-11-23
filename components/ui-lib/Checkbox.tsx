import React, { useState } from 'react';
import { Check } from 'lucide-react';

interface CheckboxProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  className = '',
  checked: controlledChecked,
  onCheckedChange,
  ...props
}) => {
  const [uncontrolledChecked, setUncontrolledChecked] = useState(false);
  const checked = controlledChecked !== undefined ? controlledChecked : uncontrolledChecked;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newChecked = !checked;
    if (onCheckedChange) {
      onCheckedChange(newChecked);
    } else {
      setUncontrolledChecked(newChecked);
    }
    if (props.onClick) props.onClick(e);
  };

  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      onClick={handleClick}
      className={`peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground ${className}`}
      data-state={checked ? 'checked' : 'unchecked'}
      {...props}
    >
      {checked && <Check className="h-3 w-3 stroke-[3] text-current" />}
    </button>
  );
};
