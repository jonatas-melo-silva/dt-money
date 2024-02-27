import { cn } from '@/libs'
import { cva } from 'class-variance-authority'
import { MagnifyingGlass } from 'phosphor-react'
import { ComponentProps } from 'react'
import { Button, Input } from './ui'

const styles = cva('flex w-full gap-4 items-center justify-center')

export type SearchFormProps = ComponentProps<'section'>

export function SearchForm({ className, ...props }: SearchFormProps) {
  return (
    <section className={cn(styles({ className }))} {...props}>
      <Input placeholder="Search for transactions" />

      <Button
        type="submit"
        variant="outline"
        className="flex items-center justify-center gap-3 py-3.5"
      >
        <MagnifyingGlass className="h-5 w-5" />
        Search
      </Button>
    </section>
  )
}
