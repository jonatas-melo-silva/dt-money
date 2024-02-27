import { useTransactions } from '@/hooks'
import { ReactNode } from 'react'
import { createContext } from 'use-context-selector'

export type TransactionContextType = ReturnType<typeof useTransactions>

export const TransactionsContext = createContext({} as TransactionContextType)

type TransactionsProviderProps = {
  readonly children: ReactNode
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const contextValue = useTransactions()
  return (
    <TransactionsContext.Provider value={contextValue}>
      {children}
    </TransactionsContext.Provider>
  )
}
