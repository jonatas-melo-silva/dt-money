import { Transaction } from '@/hooks'

export enum TransactionType {
  INCOME = 'income',
  OUTCOME = 'outcome',
}

export function calculateSummary(transactions: Transaction[]) {
  const { income, outcome, total } = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === TransactionType.INCOME) {
        acc.income += transaction.price
      } else {
        acc.outcome += transaction.price
      }
      acc.total = acc.income - acc.outcome
      return acc
    },
    { income: 0, outcome: 0, total: 0 },
  )

  return { income, outcome, total }
}
