<script>
	//keyed each block
	import Colors from './colors.svelte'
	import Thing from './things.svelte';
	import { getRandomNumber } from '$lib/utils.js';

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

	//await

	let promise = getRandomNumber();

	function handleClickRandom() {
		promise = getRandomNumber();
	}
</script>

<Colors />

<!-- keyed each block -->
<button on:click={handleClick}>
	Remove first thing
</button>



 <!-- Iterates over the things array and for each item, renders a Thing component, passing the name of the item as a prop. -->
{#each things as thing}
	<Thing name={thing.name} />
{/each}



<!-- Await -->

<button on:click={handleClickRandom}>
	generate random number
</button>

{#await promise}
	<p>...waiting</p>
{:then number}
	<p>The number is {number}</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
