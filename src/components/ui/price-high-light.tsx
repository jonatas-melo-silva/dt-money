import { cn } from '@/libs'
import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps } from 'react'

const styles = cva('', {
  variants: {
    variant: {
      default: 'text-gray-200',
      income: 'text-green-500',
      outcome: 'text-red-300',
    },
  },
})

export type PriceHighlightProps = ComponentProps<'span'> &
  VariantProps<typeof styles>

export function PriceHighlight({
  className,
  variant,
  ...props
}: PriceHighlightProps) {
  return <span className={cn(styles({ variant, className }))} {...props} />
}
