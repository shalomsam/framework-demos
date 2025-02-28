import AppDataSource from "$lib/database/data-source";
import type { Todo } from "$lib/database/entity/Todo";
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (): Promise<{ todos: Todo[] }> => {
    const db = await AppDataSource.getDataSource();
    let todos = await db?.getRepository("Todo").find() || [];
    todos = JSON.parse(JSON.stringify(todos));
    console.log("todos [DB]: ", todos);
    return {
        todos: todos as Todo[],
    };
};