import React from 'react';

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  fallback?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  className = '',
  src,
  alt,
  fallback,
  ...props
}) => {
  const [hasError, setHasError] = React.useState(false);

  const baseStyles = "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full";

  return (
    <div
      className={`${baseStyles} ${className}`}
      {...props}
    >
       {src && !hasError ? (
        <img
          src={src}
          alt={alt}
          className="aspect-square h-full w-full"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center rounded-full bg-muted">
            {fallback && <span className="text-sm font-medium uppercase text-muted-foreground">{fallback}</span>}
        </div>
      )}
    </div>
  );
};
