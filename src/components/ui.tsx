import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-lg font-bold transition-all active:scale-95 disabled:opacity-50',
          {
            'bg-primary text-bg hover:opacity-90': variant === 'primary',
            'bg-card text-text border border-white/5 hover:bg-inset': variant === 'secondary',
            'text-primary hover:bg-primary/10': variant === 'ghost',
            'border-2 border-white/10 text-white hover:border-primary/30 hover:bg-primary/5': variant === 'outline',
          },
          {
            'h-9 px-4 text-xs': size === 'sm',
            'h-14 px-6 text-sm tracking-widest uppercase': size === 'md',
            'h-16 px-8 text-base tracking-widest uppercase': size === 'lg',
          },
          className
        )}
        {...props}
      />
    );
  }
);

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <div className="w-full space-y-2">
        {label && (
          <label className="text-[10px] uppercase font-bold tracking-widest text-secondary ml-1">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            'w-full bg-card border border-white/5 rounded-lg h-14 px-4 text-text placeholder:text-text-muted focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all',
            className
          )}
          {...props}
        />
      </div>
    );
  }
);
