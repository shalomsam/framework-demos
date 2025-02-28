import AppDataSource from "$lib/database/data-source";
import { json } from "@sveltejs/kit";

export async function DELETE({ params }) {
    const db = await AppDataSource.getDataSource();
    const result = await db?.manager.delete("Todo", params.id);
    return json(result, { status: 200 });
}

export async function PUT({ request, params }) {
    const db = await AppDataSource.getDataSource();
    const todo = await request.json();
    const result = await db?.manager.update("Todo", params.id, todo);
    console.log("todo >>",todo);
    console.log("result >>",result);
    return json(result, { status: 200 });
}