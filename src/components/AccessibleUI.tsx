import React from 'react';
import { cn } from '@/src/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'icon';
}

/**
 * Accessible Button component with focus states and variant support.
 * Redesign Feature: Color Contrast Optimization & Keyboard Focus States.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-primary text-white hover:bg-accent shadow-sm',
      secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
      outline: 'border-2 border-primary text-primary hover:bg-primary/5',
      ghost: 'hover:bg-gray-100 text-gray-700',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg font-semibold',
      icon: 'p-2 rounded-full',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none font-medium',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
}

/**
 * Accessible Input component with associated labels and error messages.
 * Redesign Feature: Cognitive Error Prevention & Keyboard Focus States.
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className, id, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, '-');
    const errorId = `${inputId}-error`;
    const helperId = `${inputId}-helper`;

    return (
      <div className="flex flex-col gap-1.5 w-full">
        <label htmlFor={inputId} className="text-sm font-semibold text-gray-900">
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          className={cn(
            'flex h-12 w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-2 text-base ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all',
            error && 'border-error focus-visible:ring-error',
            className
          )}
          aria-invalid={!!error}
          aria-describedby={cn(error && errorId, helperText && helperId)}
          {...props}
        />
        {helperText && !error && (
          <p id={helperId} className="text-xs text-gray-500">
            {helperText}
          </p>
        )}
        {error && (
          <p id={errorId} className="text-sm font-medium text-error flex items-center gap-1">
            <span aria-hidden="true">⚠</span> {error}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';
