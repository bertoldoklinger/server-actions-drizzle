import { db } from "@/db";
import { todos } from "@/db/schema";
import { revalidatePath } from "next/cache";


export default async function Home() {
  const todosData = await db?.select().from(todos)
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Todos</h1>

      <ul>
        {todosData.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <form action={async (formData: FormData) => {
        'use server'
        const text = formData.get('text') as string;

        await db?.insert(todos).values({
          text
        });

        revalidatePath('/')
      }}>
        <input name="text" className="text-black"/>
        <button type="submit">Criar todo</button>
      </form>
    </div>
  );
}
