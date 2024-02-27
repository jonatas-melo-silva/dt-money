import { cn } from '@/libs'
import * as Dialog from '@radix-ui/react-dialog'
import { cva } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { Button, Logo } from './ui/'
import { NewTransactionModal } from './new-transaction-modal'

const styles = cva(
  'flex w-full bg-gray-900 pt-10 pb-28 items-center justify-center',
)

export type HeaderProps = ComponentProps<'header'>

export function Header({ className, ...props }: HeaderProps) {
  return (
    <header className={cn(styles({ className }))} {...props}>
      <div className="flex w-full flex-row items-center justify-between px-6 md:max-w-[1216px] xl:px-0">
        <Logo />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button
              type="button"
              size="sm"
              className="md:px-5 md:py-3 md:text-base"
            >
              New transaction
            </Button>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </div>
    </header>
  )
}
