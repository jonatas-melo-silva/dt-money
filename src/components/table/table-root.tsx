import { cn } from '@/libs'
import { cva } from 'class-variance-authority'
import { ComponentProps } from 'react'

const styles = cva(
  'min-w-full border-separate border-spacing-x-0 border-spacing-y-2 mt-6',
)

export type TableRootProps = ComponentProps<'table'>

export function TableRoot({ className, ...props }: TableRootProps) {
  return <table className={cn(styles({ className }))} {...props} />
}
