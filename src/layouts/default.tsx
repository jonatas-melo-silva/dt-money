import { cn } from '@/libs'
import { cva } from 'class-variance-authority'
import { ComponentProps } from 'react'

const styles = cva('')

export type DefaultProps = ComponentProps<'div'>

export function Default({ className, ...props }: DefaultProps) {
  return (
    <div className={cn(styles({ className }))} {...props}>
      {props.children}
    </div>
  )
}
