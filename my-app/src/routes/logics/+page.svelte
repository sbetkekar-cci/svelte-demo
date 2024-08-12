<script>
	//keyed each block
	import Colors from './colors.svelte'
	import Thing from './things.svelte';
	let things = [
		{ id: 1, name: 'apple' },
		{ id: 2, name: 'banana' },
		{ id: 3, name: 'carrot' },
		{ id: 4, name: 'doughnut' },
		{ id: 5, name: 'egg' }
	];

	function handleClick() {
		things = things.slice(1);
	}
</script>

<Colors />

<!-- keyed each block -->
<button on:click={handleClick}>
	Remove first thing
</button>

{#each things as thing}
	<Thing name={thing.name} />
{/each}


