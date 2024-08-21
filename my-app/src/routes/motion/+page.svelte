<script>
	import { tweened,spring } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import JsTransition from '../transition/jsTransition.svelte';
	const progress = tweened(0, {
		duration: 400,
		easing: cubicOut
	});

	// const store = tweened(0);
		const store = spring(0,{
			stiffness:0.10,
			damping:0.1,
			precision:0.9
		});

	function x(){
		$store += 1;
		if($store>5){
			$store = 0;
		}
	}
</script>
{$store}
<progress value={$progress}></progress>

<button on:click={() => progress.set(0)}>
	0%
</button>

<button on:click={() => progress.set(0.25)}>
	25%
</button>

<button on:click={() => progress.set(0.5)}>
	50%
</button>

<button on:click={() => progress.set(0.75)}>
	75%
</button>

<button on:click={() => progress.set(1)}>
	100%
</button>

<button on:click={x}>
spring</button>
<div style ="height:100px;width:100px; border:1px solid red; position: relative;left:{$store * 50}px"></div>
<style>
	progress {
		display: block;
		width: 100%;
	}
</style>