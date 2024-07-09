'use server'

import { db } from '@/db'

export async function getTransactions() {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return await db.transaction.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })
}
