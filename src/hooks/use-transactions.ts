import { api } from '@/libs'
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
  async function fetchTransactions(query?: string) {
    const response = await api.get('/transactions', {
      params: {
        query,
      },
    })
    setTransactions(response.data)
  }
  useEffect(() => {
    fetchTransactions()
  }, [])
  return { transactions, fetchTransactions }
}
