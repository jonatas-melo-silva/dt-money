import { cn } from '@/libs'
import { cva } from 'class-variance-authority'
import { ComponentPropsWithRef, forwardRef } from 'react'

const styles = cva(
  'w-full max-h-[54px] rounded-md bg-gray-900 text-base font-normal text-gray-300 p-4 placeholder-gray-500 truncate',
)

export type InputProps = ComponentPropsWithRef<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input
      autoComplete="off"
      className={cn(styles({ className }))}
      ref={ref}
      {...props}
    />
  ),
)

Input.displayName = 'Input'
