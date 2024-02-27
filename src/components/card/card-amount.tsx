import { cn } from '@/libs'
import { cva } from 'class-variance-authority'
import { ComponentProps } from 'react'

const styles = cva('mt-8 block text-3xl')

export type CardAmountProps = ComponentProps<'strong'>

export function CardAmount({ className, ...props }: CardAmountProps) {
  return <strong className={cn(styles({ className }))} {...props} />
}
