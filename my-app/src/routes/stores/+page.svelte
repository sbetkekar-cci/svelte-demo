<script>
	import { count } from './stores.js';
	import Incrementer from './Incrementer.svelte';
	import Decrementer from './Decrementer.svelte';
	import Resetter from './Resetter.svelte';
	import { time } from './stores.js';
	import {name,greeting} from './stores'

	let count_value;

	count.subscribe((value) => {
		count_value = value;
	});

	const formatter = new Intl.DateTimeFormat(
		'en',
		{
			hour12: true,
			hour: 'numeric',
			minute: '2-digit',
			second: '2-digit'
		}
	);

</script>

<h1>The count is {count_value}</h1>

<Incrementer />
<Decrementer />
<Resetter />

<h1>The time is {formatter.format($time)}</h1>

<h2>{greeting}</h2>
<input bind:value={$name}>
<button on:click={() => $name += '!'}>add</button>