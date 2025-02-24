<script lang="ts">
    import Todo from "$lib/Todo.svelte";

    let todos = [
        { id: 1, title: "Learn Svelte", isDone: true },
        { id: 2, title: "Learn SvelteKit", isDone: false },
    ];

    let addTodo = (title: string) => {
        todos = [...todos, { id: todos.length + 1, title, isDone: false }];
    }

    let handleDelete = (id: number) => {
        todos = todos.filter(todo => todo.id != id);
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
    <Todo {...todo} handleDelete={handleDelete} />
{/each}