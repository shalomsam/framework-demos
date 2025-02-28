<script lang="ts">
    /** @type {{ section: string }} section */
    let { id, title, isDone, handleDelete } = $props();
    import TrashIcon from "virtual:icons/material-symbols/delete-forever-rounded";

    let todo = $state({
        title,
        isDone
    });

    console.log("todo", $state.snapshot(todo));

    let onComplete = async (id: number) => {
        todo.isDone = !todo.isDone
        let response = await fetch(`/tasks/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(todo)
        }).then(res => res.json());

        console.log("onComplete [PUT]", response);
        console.log("onComplete", $state.snapshot(todo));
    };
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<p class="todoContainer" onclick={() => onComplete(id)}>
    <input type="checkbox" class="margin-right-10px" checked={Boolean(todo.isDone) === true} />
    <span class={{"flex-grow-1": true, "line-through": Boolean(todo.isDone) === true}}>{ todo.title }</span>
    <button class="btn btn-danger cursor-pointer" aria-label="Delete" onclick={() => handleDelete(id)}>
        <TrashIcon />
    </button>
</p>

<style lang="postcss">
    @reference "tailwindcss/theme";

    .todoContainer {
        @apply mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-4 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:outline-white/10 dark:-outline-offset-1 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700;
    }
</style>
