import { cn } from '@/libs'
import { zodResolver } from '@hookform/resolvers/zod'
import { cva } from 'class-variance-authority'
import { MagnifyingGlass } from 'phosphor-react'
import { ComponentPropsWithRef, forwardRef } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button, Input } from './ui'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

const styles = cva('flex w-full gap-4 items-center justify-center')

export type SearchFormProps = ComponentPropsWithRef<'form'>

export const SearchForm = forwardRef<HTMLFormElement, SearchFormProps>(
  ({ className, ...props }, ref) => {
    const { register, handleSubmit } = useForm<SearchFormInputs>({
      resolver: zodResolver(searchFormSchema),
    })
    function handleSearchTransactions(data: SearchFormInputs) {
      console.log(data)
    }
    return (
      <form
        className={cn(styles({ className }))}
        onSubmit={handleSubmit(handleSearchTransactions)}
        {...props}
        ref={ref}
      >
        <Input
          type="text"
          placeholder="Search for transactions"
          {...register('query')}
        />

        <Button
          type="submit"
          variant="outline"
          className="flex items-center justify-center gap-3 py-3.5"
        >
          <MagnifyingGlass className="h-5 w-5" />
          Search old
        </Button>
      </form>
    )
  },
)

SearchForm.displayName = 'SearchForm'
