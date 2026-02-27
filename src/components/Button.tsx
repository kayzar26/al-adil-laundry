import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50',
        {
          'bg-primary text-white hover:bg-primary/90': variant === 'primary',
          'bg-white text-primary hover:bg-gray-100': variant === 'secondary',
          'border-2 border-primary text-primary hover:bg-primary/10': variant === 'outline',
          'hover:bg-primary/10 text-text-primary hover:text-primary': variant === 'ghost',
          'h-9 px-4 text-sm': size === 'sm',
          'h-12 px-8 text-base': size === 'md',
          'h-14 px-10 text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    />
  );
}
