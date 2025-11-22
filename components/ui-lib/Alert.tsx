import React from 'react';
import { AlertCircle, CheckCircle2, Info, XCircle } from 'lucide-react';

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'destructive' | 'success' | 'warning';
  title?: string;
  children: React.ReactNode;
}

export const Alert: React.FC<AlertProps> = ({
  className = '',
  variant = 'default',
  title,
  children,
  ...props
}) => {
  const baseStyles = "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground";

  const variants = {
    default: "bg-background text-foreground",
    destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
    success: "border-green-500/50 text-green-700 dark:text-green-400 [&>svg]:text-green-600 dark:border-green-500/30",
    warning: "border-yellow-500/50 text-yellow-700 dark:text-yellow-400 [&>svg]:text-yellow-600 dark:border-yellow-500/30",
  };

  const getIcon = () => {
      switch (variant) {
          case 'destructive': return <XCircle className="h-4 w-4" />;
          case 'success': return <CheckCircle2 className="h-4 w-4" />;
          case 'warning': return <AlertCircle className="h-4 w-4" />;
          default: return <Info className="h-4 w-4" />;
      }
  };

  return (
    <div
      className={`${baseStyles} ${variants[variant]} ${className}`}
      role="alert"
      {...props}
    >
      {getIcon()}
      {title && <h5 className="mb-1 font-medium leading-none tracking-tight">{title}</h5>}
      <div className="text-sm [&_p]:leading-relaxed">
        {children}
      </div>
    </div>
  );
};
