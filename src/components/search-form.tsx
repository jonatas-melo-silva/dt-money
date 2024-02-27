import { cn } from '@/libs'
import { zodResolver } from '@hookform/resolvers/zod'
import { cva } from 'class-variance-authority'
import { MagnifyingGlass } from 'phosphor-react'
import { ComponentProps } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button, Input } from './ui'
import { useTransactionsContext } from '@/hooks'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

const styles = cva('flex w-full gap-4 items-center justify-center')

export type SearchFormProps = ComponentProps<'form'>

export function SearchForm({ className, ...props }: SearchFormProps) {
  const { fetchTransactions } = useTransactionsContext()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })
  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query)
  }
  return (
    <form
      className={cn(styles({ className }))}
      onSubmit={handleSubmit(handleSearchTransactions)}
      {...props}
    >
      <Input
        type="text"
        placeholder="Search for transactions"
        {...register('query')}
      />

      <Button
        disabled={isSubmitting}
        type="submit"
        variant="outline"
        className="flex items-center justify-center gap-3 py-3.5 disabled:pointer-events-none disabled:opacity-70"
      >
        <MagnifyingGlass className="h-5 w-5" />
        Search
      </Button>
    </form>
  )
}
