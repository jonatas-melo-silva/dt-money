import { cn } from '@/libs'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { cva } from 'class-variance-authority'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { ComponentProps } from 'react'
import { Button, Input } from './ui'

const styles = cva(
  'fixed inset-0 h-screen w-screen bg-black bg-opacity-75 transition-opacity duration-200 ease-in-out',
)

export type NewTransactionModalProps = ComponentProps<'div'>

export function NewTransactionModal({ className }: NewTransactionModalProps) {
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
        <form action="" className="mt-8 flex flex-col gap-4">
          <Input type="text" placeholder="Description" />
          <Input type="text" placeholder="Price" />
          <Input type="text" placeholder="Category" />

          <RadioGroup.Root className="mt-2 grid grid-cols-2 gap-4">
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

          <Button size="lg" type="submit">
            Register
          </Button>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
