import { TransactionsContext } from '@/contexts'
import { useContextSelector } from 'use-context-selector'

export function useTransactionsContext() {
  const context = useContextSelector(TransactionsContext, (context) => context)

  if (!context) {
    throw new Error(
      'useTransactionsContext deve ser usado dentro de um TransactionsProvider',
    )
  }

  return context
}
