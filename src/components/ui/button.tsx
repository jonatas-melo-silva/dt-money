import { cn } from '@/libs'
import { VariantProps, cva } from 'class-variance-authority'
import { ComponentPropsWithRef, forwardRef } from 'react'

const styles = cva(
  'rounded-md font-bold transition-colors duration-200 ease-in-out focus:outline-none disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        solid: '',
        outline: 'border',
      },
      size: {
        sm: 'px-4 py-2 text-sm',
        md: 'px-5 py-3 text-base',
        lg: 'px-8 py-4 text-base',
      },
      colorScheme: {
        primary: 'text-white',
      },
    },
    compoundVariants: [
      {
        variant: 'solid',
        colorScheme: 'primary',
        className: 'bg-green-700 hover:bg-green-500',
      },
      {
        variant: 'outline',
        colorScheme: 'primary',
        className:
          'border-green-500 text-green-500 hover:bg-green-500 hover:text-white',
      },
    ],
    defaultVariants: {
      variant: 'solid',
      size: 'md',
      colorScheme: 'primary',
    },
  },
)

export type ButtonProps = ComponentPropsWithRef<'button'> &
  VariantProps<typeof styles>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, colorScheme, className, ...props }, ref) => (
    <button
      className={cn(styles({ variant, size, colorScheme, className }))}
      {...props}
      ref={ref}
    />
  ),
)

Button.displayName = 'Button'
