import { cn } from '@/libs'
import { cva } from 'class-variance-authority'
import { ComponentProps } from 'react'

const styles = cva('flex items-center justify-between text-gray-300')

export type CardHeaderProps = ComponentProps<'header'>

export function CardHeader({ className, ...props }: CardHeaderProps) {
  return <header className={cn(styles({ className }))} {...props} />
}
