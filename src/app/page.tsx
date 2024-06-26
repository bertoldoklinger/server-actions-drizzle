import { db } from "@/db";
import { todos } from "@/db/schema";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form action={async (formData: FormData) => {
        'use server'
        const text = formData.get('text') as string;

        await db?.insert(todos).values({
          text
        });
      }}>
        <input name="text" className="text-black"/>
        <button type="submit">Criar todo</button>
      </form>
    </div>
  );
}
