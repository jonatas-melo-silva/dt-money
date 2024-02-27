import {
  Header,
  PriceHighlight,
  SearchForm,
  Summary,
  TableCell,
  TableRoot,
} from '@/components'
import { useTransactionsContext } from '@/hooks'
import { cn } from '@/libs'
import { TransactionType, currencyFormatter, dataFormatter } from '@/utils'
import { cva } from 'class-variance-authority'
import { ComponentProps } from 'react'

const styles = cva(
  'flex flex-col w-full min-h-screen items-center justify-start',
)

export type TransactionsProps = ComponentProps<'main'>

export function Transactions({ className, ...props }: TransactionsProps) {
  const { transactions } = useTransactionsContext()
  return (
    <main className={cn(styles({ className }))} {...props}>
      <Header />
      <Summary />
      <div className="mx-auto mb-0 mt-10 flex w-full flex-col overflow-x-auto px-6 py-6 md:max-w-[1216px] xl:px-0">
        <SearchForm />
        <TableRoot>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <TableCell variant="firstLeft">
                  {transaction.description}
                </TableCell>
                <TableCell>
                  <PriceHighlight
                    variant={
                      transaction.type === TransactionType.INCOME
                        ? TransactionType.INCOME
                        : TransactionType.OUTCOME
                    }
                  >
                    {transaction.type === TransactionType.OUTCOME && '- '}
                    {currencyFormatter.format(transaction.price)}
                  </PriceHighlight>
                </TableCell>
                <TableCell>{transaction.category}</TableCell>
                <TableCell variant="lastRight">
                  {dataFormatter.format(new Date(transaction.createdAt))}
                </TableCell>
              </tr>
            ))}
          </tbody>
        </TableRoot>
      </div>
    </main>
  )
}
