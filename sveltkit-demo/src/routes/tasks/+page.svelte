<script>
    import Todo from "$lib/Todo.svelte";
</script>

<h1 class="h1 mx-auto my-4 text-center flex justify-center">Tasks</h1>

<Todo title="Learn Svelte" isDone={true} />
<Todo title="Learn SvelteKit" isDone={false} />