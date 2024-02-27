import { cn } from '@/libs'
import { cva } from 'class-variance-authority'
import { ComponentProps } from 'react'

const styles = cva('rounded-md bg-gray-600 p-8')

export type CardRootProps = ComponentProps<'div'>

export function CardRoot({ className, ...props }: CardRootProps) {
  return <div className={cn(styles({ className }))} {...props} />
}
