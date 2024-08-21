<script>
	import { tick } from "svelte";

    let name = 'world';
    let editing = false;
    function toggleEdit() {
            editing = !editing
        }

    function focusOnMount(node) {
    node.focus();
}
</script>

<p>
    Name: {name}
</p>
{#if editing}
<label>
Name
<input use:focusOnMount type="text" bind:value={name}>
</label>
{/if}
<button on:click={toggleEdit}>
    {editing ? 'Confirm' : 'Edit'}
</button>