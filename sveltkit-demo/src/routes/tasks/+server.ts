import AppDataSource from "$lib/database/data-source";
import { json } from "@sveltejs/kit";

export async function GET() {
    const db = await AppDataSource.getDataSource();
    const todos = db?.manager.find("Todo");
    return json(todos);
}

export async function POST({ request }) {
    const db = await AppDataSource.getDataSource();
    const todo = await request.json();
    const result = await db?.manager.save("Todo", todo);
    return json(result, { status: 201 });
}