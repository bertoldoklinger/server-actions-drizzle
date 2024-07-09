'use server'

import { db } from '@/db'
import { revalidatePath } from 'next/cache'

export type CreatePaymentInput = {
  senderId: string
  receiverId: string
  amount: number
}

export async function createPayment(formData: FormData) {
  const senderId = formData.get('senderId') as string
  const amount = formData.get('amount') as string as unknown as number
  const receiverId = formData.get('receiverId') as string

  const sender = await db.user.findUnique({
    where: {
      taxId: senderId,
    },
  })

  if (!sender) throw new Error('Sender not found')

  const receiver = await db.user.findUnique({
    where: {
      taxId: receiverId,
    },
  })

  if (!receiver) throw new Error('Receiver not found')

  const senderAccount = await db.account.findUnique({
    where: {
      userId: sender.id,
    },
  })

  if (!senderAccount) throw new Error('Sender account not found')

  const receiverAccount = await db.account.findUnique({
    where: {
      userId: receiver.id,
    },
  })

  if (!receiverAccount) throw new Error('Receiver account not found')

  await db.transaction.create({
    data: {
      amount: Number(amount),
      receiverId: receiverAccount.id,
      senderId: senderAccount.id,
    },
  })

  revalidatePath('/')
}
