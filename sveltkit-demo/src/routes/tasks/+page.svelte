<script lang="ts">
    import TodoUI from "$lib/components/Todo.svelte";
	import { Todo } from "$lib/database/entity/Todo";
	import type { PageProps } from "../$types";

    let { data } = $props();

    let todos: Todo[] = $state(data.todos);

    let addTodo = async (title: string, isDone: boolean = false) => {
        let todo = new Todo();
        todo.title = title;
        todo.isDone = isDone;
        let response = await fetch("/tasks", {
            method: "POST",
            body: JSON.stringify(todo),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());
        
        console.log(`response [POST]: ${JSON.stringify(response)}`);
        todos = [...todos, response];
    }

    let handleDelete = async (id: number) => {
        let response = await fetch(`/tasks/${id}`, {
            method: "DELETE"
        }).then(res => res.json());
        console.log(`response [DELETE]: ${JSON.stringify(response)}`);
        todos = todos.filter(todo => todo.id !== id);
    }

    let handleEnter = (e: KeyboardEvent) => {
        if (e.key === "Enter") {
            addTodo((e.target as HTMLInputElement).value);
            (e.target as HTMLInputElement).value = "";
        }
    }
</script>

<h1 class="h1 mx-auto my-4 text-center flex justify-center">Tasks</h1>

<div class="flex justify-center mx-auto bg-white p-4 rounded-lg outline-1 outline-gray-300 max-w-sm">
    <input type="text" placeholder="Add a new task" class="flex-grow input-bordered outline-none" onkeyup={handleEnter} />
</div>
{#each todos as todo}
    <TodoUI {...todo} handleDelete={handleDelete} />
{/each}