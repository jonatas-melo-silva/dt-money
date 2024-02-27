import { cn } from '@/libs'
import { cva } from 'class-variance-authority'
import { ComponentProps } from 'react'

const styles = cva(
  'flex flex-col w-full min-h-screen xl:px-6 items-center justify-start',
)

export type DefaultProps = ComponentProps<'div'>

export function Default({ className, ...props }: DefaultProps) {
  return (
    <div className={cn(styles({ className }))} {...props}>
      {props.children}
    </div>
  )
}
