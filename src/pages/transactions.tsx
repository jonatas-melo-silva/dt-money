import {
  Header,
  PriceHighlight,
  SearchForm,
  Summary,
  TableCell,
  TableRoot,
} from '@/components'
import { cn } from '@/libs'
import { cva } from 'class-variance-authority'
import { ComponentProps } from 'react'

const styles = cva(
  'flex flex-col w-full min-h-screen items-center justify-start',
)

export type TransactionsProps = ComponentProps<'main'>

export function Transactions({ className, ...props }: TransactionsProps) {
  return (
    <main className={cn(styles({ className }))} {...props}>
      <Header />
      <Summary />
      <div className="mx-auto mb-0 mt-10 flex w-full flex-col overflow-x-auto px-6 py-6 md:max-w-[1216px] xl:px-0">
        <SearchForm />
        <TableRoot>
          <tbody>
            <tr>
              <TableCell variant="firstLeft">Desenvolvimento de web</TableCell>
              <TableCell>
                <PriceHighlight variant="income">+ R$ 12.000,00</PriceHighlight>
              </TableCell>
              <TableCell>Venda</TableCell>
              <TableCell variant="lastRight">13/04/2024</TableCell>
            </tr>
            <tr>
              <TableCell variant="firstLeft">Hambúrguer</TableCell>
              <TableCell>
                <PriceHighlight variant="outcome">
                  - R$ 12.000,00
                </PriceHighlight>
              </TableCell>
              <TableCell>Alimentação</TableCell>
              <TableCell variant="lastRight">13/04/2024</TableCell>
            </tr>
            <tr>
              <TableCell variant="firstLeft">Computador</TableCell>
              <TableCell>
                <PriceHighlight variant="income">+ R$ 12.000,00</PriceHighlight>
              </TableCell>
              <TableCell>Venda</TableCell>
              <TableCell variant="lastRight">13/04/2024</TableCell>
            </tr>
          </tbody>
        </TableRoot>
      </div>
    </main>
  )
}
