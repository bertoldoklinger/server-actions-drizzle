'use server'

import { db } from '@/db'

export async function getTransactions() {
  return await db.transaction.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })
}
