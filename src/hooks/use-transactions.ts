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
        _sort: 'id',
        query,
      },
    })
    setTransactions(response.data)
  }
  async function createTransaction(
    data: Omit<Transaction, 'id' | 'createdAt'>,
  ) {
    const { category, description, price, type } = data
    const response = await api.post('/transactions', {
      category,
      description,
      price,
      type,
      createdAt: new Date().toISOString(),
    })
    setTransactions((prev) => [response.data, ...prev])
  }
  useEffect(() => {
    fetchTransactions()
  }, [])
  return { transactions, fetchTransactions, createTransaction }
}
