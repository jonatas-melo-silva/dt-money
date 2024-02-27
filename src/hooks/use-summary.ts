import { calculateSummary } from '@/utils'
import { useTransactionsContext } from './use-transactions-context'

export function useSummary() {
  const { transactions } = useTransactionsContext()
  const { income, outcome, total } = calculateSummary(transactions)

  return {
    income,
    outcome,
    total,
  }
}
