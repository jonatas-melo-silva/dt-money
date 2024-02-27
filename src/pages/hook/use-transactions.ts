import { useEffect, useState } from 'react'

export type Transaction = {
  id: string
  description: string
  type: string
  category: string
  price: number
  createdAt: string
}

export function useTransactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  async function loadTransactions() {
    const response = await fetch('http://localhost:3333/transactions')
    const data = await response.json()
    setTransactions(data)
  }
  useEffect(() => {
    loadTransactions()
  }, [])
  return { transactions }
}
