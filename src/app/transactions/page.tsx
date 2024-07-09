import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { createPayment } from '../_actions/create-payment'
import { getTransactions } from '../_actions/get-transactions'

export default async function Home() {
  const transactions = await getTransactions()
  return (
    <main>
      <div className="flex items-center justify-center h-screen gap-12">
        <div className="rounded-lg">
          <Table className="border-2 bg-white rounded-lg">
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Data do Pagamento</TableHead>
                <TableHead className="text-right">Valor</TableHead>
              </TableRow>
            </TableHeader>
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
