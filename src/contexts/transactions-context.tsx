import { useTransactions } from '@/hooks'
import { ReactNode, createContext } from 'react'

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
