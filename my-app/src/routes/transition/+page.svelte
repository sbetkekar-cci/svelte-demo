<script>
	import { fade,fly,scale,draw,crossfade  } from 'svelte/transition';
	import JsTransition from './jsTransition.svelte';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	let visible = true;
	let status = 'waiting...';
	let showItems = true;
	let i = 5;
	let items = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
	let condition = true;
	const [send, receive] = crossfade({
		duration: 1500,
		easing: quintOut
	});
</script>

<label>
	<input type="checkbox" bind:checked={visible} />
	visible
</label>

{#if visible}
	<p transition:fade>
		Fades in and out
	</p>
{/if}

{#if visible}
	<p transition:fly={{ x: 200, duration: 2000 }}>
		Flies in and out
	</p>
{/if}

{#if visible}
	<p in:fly={{ y: 200, duration: 2000 }} out:fade>
		Flies in, fades out
	</p>
{/if}

<JsTransition />

<p>status: {status}</p>

<label>
	<input type="checkbox" bind:checked={visible} />
	visible
</label>

{#if visible}
	<p
		transition:fly={{ y: 200, duration: 2000 }}
		on:introstart={() => status = 'intro started'}
		on:outrostart={() => status = 'outro started'}
		on:introend={() => status = 'intro ended'}
		on:outroend={() => status = 'outro ended'}
	>
		Flies in and out
	</p>
{/if}

<label>
	<input type="range" bind:value={i} max="10" />
</label>

{#if showItems}
	{#each items.slice(0, i) as item}
		<div transition:slide|global>
			{item}
		</div>
	{/each}
{/if}
<label>
	<input type="checkbox" bind:checked={condition} />
	visible
</label>
<!-- {#if condition}
	<div
		transition:fly={{ delay: 250, duration: 300, x: 100, y: 500, opacity: 0.5, easing: quintOut }}
	>
		flies in and out
	</div>
{/if} -->
<!-- {#if condition}
	<div transition:slide={{ duration: 300, easing: quintOut, axis: 'x' }}>
		slides in and out horizontally
	</div>
{/if}

{#if condition}
	<div transition:scale={{ duration: 500, delay: 500, opacity: 0.5, start: 0.5, easing: quintOut }}>
		scales in and out
	</div>
{/if}

<svg viewBox="0 0 5 5" xmlns="http://www.w3.org/2000/svg">
	{#if condition}
		<path
			transition:draw={{ duration: 5000, delay: 500, easing: quintOut }}
			d="M2 1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z"
			fill="none"
			stroke="cornflowerblue"
			stroke-width="0.1px"
			stroke-linejoin="round"
		/>
	{/if}
</svg> -->
{#if condition}
	<h1 in:send={{ key }} out:receive={{ key }}>BIG ELEM</h1>
{:else}
	<small in:send={{ key }} out:receive={{ key }}>small elem</small>
{/if}
<style>
	div {
		padding: 0.5em 0;
		border-top: 1px solid #eee;
	}

	svg{
		width: 200px;
		height: 200px;
	}
</style>
