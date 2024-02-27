import { cn } from '@/libs'
import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { cva } from 'class-variance-authority'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { ComponentProps } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button, Input } from './ui'

const newTransactionSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionSchema>

const styles = cva(
  'fixed inset-0 h-screen w-screen bg-black bg-opacity-75 transition-opacity duration-200 ease-in-out',
)

export type NewTransactionModalProps = ComponentProps<'div'>

export function NewTransactionModal({ className }: NewTransactionModalProps) {
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionSchema),
    defaultValues: {
      type: 'income',
    },
  })

  async function handleNewTransaction(data: NewTransactionFormInputs) {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log(data)
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className={cn(styles({ className }))} />

      <Dialog.Content className="fixed left-2/4 top-2/4 min-w-[512px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray-800 px-12  py-10">
        <Dialog.Title className="text-2xl font-bold leading-loose">
          New transaction
        </Dialog.Title>

        <Dialog.Close className="absolute right-6 top-6 cursor-pointer rounded-md text-gray-400 transition-colors duration-200 ease-in-out hover:text-white">
          <X className="h-6 w-6" />
        </Dialog.Close>
        <form
          onSubmit={handleSubmit(handleNewTransaction)}
          className="mt-8 flex flex-col gap-4"
        >
          <Input
            type="text"
            placeholder="Description"
            required
            {...register('description')}
          />
          <Input
            type="number"
            placeholder="Price"
            required
            {...register('price', { valueAsNumber: true })}
          />
          <Input
            type="text"
            placeholder="Category"
            required
            {...register('category')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              console.log(field)
              return (
                <RadioGroup.Root
                  onValueChange={field.onChange}
                  value={field.value}
                  className="mt-2 grid grid-cols-2 gap-4"
                >
                  <RadioGroup.Item
                    value="income"
                    className="flex w-full items-center justify-center gap-2 rounded-md bg-gray-700 px-4 py-4 text-base leading-relaxed text-gray-300 transition-colors duration-200 ease-in-out data-[state=checked]:bg-green-700 data-[state=checked]:text-white data-[state=unchecked]:hover:bg-gray-600"
                  >
                    <ArrowCircleUp className="h-6 w-6 text-green-300" />
                    Income
                  </RadioGroup.Item>
                  <RadioGroup.Item
                    value="outcome"
                    className="flex w-full items-center justify-center gap-2 rounded-md bg-gray-700 px-4 py-4 text-base leading-relaxed text-gray-300 transition-colors duration-200 ease-in-out data-[state=checked]:bg-red-500 data-[state=checked]:text-white data-[state=unchecked]:hover:bg-gray-600"
                  >
                    <ArrowCircleDown className="h-6 w-6 text-red-300" />
                    Outcome
                  </RadioGroup.Item>
                </RadioGroup.Root>
              )
            }}
          />

          <Button
            disabled={isSubmitting}
            size="lg"
            type="submit"
            className="disabled:pointer-events-none disabled:opacity-70"
          >
            Register
          </Button>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
