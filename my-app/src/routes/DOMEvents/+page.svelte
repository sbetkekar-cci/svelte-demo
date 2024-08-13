<script>
	let m = { x: 0, y: 0 };

	function handleMove(event) {
		m.x = event.clientX;
		m.y = event.clientY;
	}
    let content = "";
	function displayContent(){
        content = "Hello World";
	}
	//compnent events
	// import Inner from './Inner.svelte';
import Outer from './Outer.svelte';
	function handleMessage(event) {
		alert(event.detail.text);
	}


</script>

<div on:pointermove={handleMove}>
	The pointer is at {m.x} x {m.y}
</div>

<button on:click={displayContent}>
Click me</button>

<p>{content}</p>

<div
	on:pointermove={(e) => {
		m = { x: e.clientX, y: e.clientY };
	}}
>
	The pointer is at {m.x} x {m.y}
</div>
<br>

<button on:click|once={() => alert('clicked')}>
	Click me
</button>


<!-- <Inner on:greet={handleMessage} /> -->

<Outer on:greet={handleMessage} />
<style>
	button{
		bottom:0;
	}
	div {
		/* position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		padding: 1rem; */
	}
</style>
