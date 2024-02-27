import { cn } from '@/libs'
import { cva } from 'class-variance-authority'
import { ComponentProps } from 'react'

const styles = cva(
  'w-full max-h-[54px] rounded-md bg-gray-900 text-base font-normal text-gray-300 p-4 placeholder-gray-500 truncate',
)

export type InputProps = ComponentProps<'input'>

export function Input({ className, ...props }: InputProps) {
  return <input className={cn(styles({ className }))} {...props} />
}
