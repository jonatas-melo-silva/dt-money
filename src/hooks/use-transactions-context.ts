import { TransactionsContext } from '@/contexts'
import { useContext } from 'react'

export function useTransactionsContext() {
  const context = useContext(TransactionsContext)

  if (!context) {
    throw new Error(
      'useTransactionsContext deve ser usado dentro de um TransactionsProvider',
    )
  }

  return context
}
