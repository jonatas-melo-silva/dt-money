import { Default } from '@/layouts'
import { Transactions } from '@/pages'
import { TransactionsProvider } from './contexts'

export function App() {
  return (
    <Default>
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </Default>
  )
}
