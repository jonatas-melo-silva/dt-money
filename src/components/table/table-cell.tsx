import { cn } from '@/libs'
import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps } from 'react'

const styles = cva('bg-gray-700 px-5 py-8', {
  variants: {
    variant: {
      default: '',
      firstLeft: 'rounded-tl-md rounded-bl-md w-3/6',
      lastRight: 'rounded-tr-md rounded-br-md',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export type TableCellProps = ComponentProps<'td'> & VariantProps<typeof styles>

export function TableCell({ className, variant, ...props }: TableCellProps) {
  return <td className={cn(styles({ variant, className }))} {...props} />
}
