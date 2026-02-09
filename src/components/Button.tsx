import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  external?: boolean
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  href,
  external = false,
  className,
  ...props 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg'
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-xl',
    secondary: 'bg-accent text-white hover:bg-accent-dark shadow-lg hover:shadow-xl',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }
  
  const classes = cn(baseStyles, variants[variant], sizes[size], className)
  
  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      )
    }
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    )
  }
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
