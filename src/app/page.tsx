import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@/components/ui/table'
import { createPayment } from './_actions/create-payment'
import { getTransactions } from './_actions/get-transactions'

export default async function Home() {
  const transactions = await getTransactions()
  return (
    <main>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-white tracking-tighter">WEE</h1>{' '}
        <span className=" text-6xl font-extrabold tracking-tighter bg-white px-3 py-1 rounded-sm text-[#36D7A1]">
          PAY
        </span>
      </div>
      <div className="flex items-center justify-center h-screen gap-12">
        <div>
          <Table className="border-2 bg-white">
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Data do Pagamento</TableHead>
              <TableHead className="text-right">Valor</TableHead>
            </TableRow>
            <TableBody>
              {transactions &&
                transactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell>{transaction.id}</TableCell>
                    <TableCell>
                      {new Date(transaction.createdAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="text-right">
                      {transaction.amount}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Enviar pagamento</CardTitle>
            </CardHeader>
            <CardContent>
              <form action={createPayment} className="flex flex-col gap-4">
                <Input name="senderId" placeholder="CPF do Pagador" />
                <Input name="receiverId" placeholder="CPF do Recebidor" />
                <Input name="amount" placeholder="Valor do pagamento" />
                <Button> Enviar Pagamento </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
