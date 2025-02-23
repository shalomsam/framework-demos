<script lang="ts">
    /** @type {{ section: string }} section */
    let { title, isDone } = $props();
    import TrashIcon from "virtual:icons/material-symbols/delete-forever-rounded";
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<p class="todoContainer" onclick={() => isDone = !isDone}>
    <input type="checkbox" class="margin-right-10px" checked={isDone} />
    <span class={{"flex-grow-1": true, "line-through": isDone}}>{ title }</span>
    <button class="btn btn-danger" aria-label="Delete"><TrashIcon /></button>
</p>

<style lang="postcss">
    @reference "tailwindcss/theme";

    .todoContainer {
        @apply mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-4 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:outline-white/10 dark:-outline-offset-1 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700;
    }
</style>
