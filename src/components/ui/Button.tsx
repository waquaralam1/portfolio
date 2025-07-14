import React from 'react'
import { cn } from '@/utils/cn'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, asChild = false, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none transform hover:scale-[1.02] active:scale-[0.98]'
    
    const variants = {
      primary: 'bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40',
      secondary: 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 hover:from-gray-200 hover:to-gray-300 shadow-soft',
      outline: 'border-2 border-primary-200 bg-white text-primary-700 hover:bg-primary-50 hover:border-primary-300 shadow-soft',
      ghost: 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
    }
    
    const sizes = {
      sm: 'h-10 px-4 py-2 text-sm',
      md: 'h-12 px-6 py-3 text-base',
      lg: 'h-14 px-8 py-4 text-lg'
    }

    const classes = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      className
    )

    if (asChild) {
      return React.cloneElement(children as React.ReactElement, {
        className: classes,
        ref
      })
    }

    return (
      <button
        className={classes}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
