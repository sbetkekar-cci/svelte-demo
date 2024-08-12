<script>
	import Nested from './Nested.svelte';
        let name = "svelte";
    let src="pixelgrade.png"
    	let string = `this string contains some <strong>HTML!!!</strong>`;

	let count = 0;
    let count2 = 0;

    $: doubled = count * 2;

	function increment() {
        count += 1;
	}

    function handleClick(){
                count2 += 1;
    }

   $: if (count2 >= 10) {
	alert('count is dangerously high!');
	count2 = 0;
    }

    let numbers = [1, 2, 3, 4];

	function addNumber() {
		numbers = [...numbers, numbers.length + 1];
	}

	$: sum = numbers.reduce((total, currentNumber) => total + currentNumber, 0);

</script>
<h1>{name.toLocaleUpperCase()}!</h1>
<img src={src} alt="{name}">
<p>This is a paragraph</p>
<Nested />

<p>{@html string}</p>
<p>{string}</p>

<!-- Decleration -->



<!-- Statements -->
<button on:click={increment}>
	Clicked {count}
	{count === 1 ? 'Timee' : 'Times' }
</button>

<h4>{count} doubled is {doubled}</h4>

<!-- If Statements -->
{#if count > 10}
<h4> {count} is greater than 10</h4>
{/if}

<!-- if else statment -->
{#if count > 10}
	<h4>{count} is greater than 10</h4>
{:else}
	<h4>{count} is between 0 and 10</h4>
{/if}
<!--  -->
<!-- else block -->

{#if count > 10}
	<h4>{count} is greater than 10</h4>
{:else if count < 5}
	<h4>{count} is less than 5</h4>
{:else}
	<h4>{count} is between 5 and 10</h4>
{/if}


<button on:click={handleClick}>
    Clicked {count2}
    {count2 === 1 ? "time" : "Times"}
</button>
<p>{count2}</p>

<!-- Updating arrays and objects -->

<p>{numbers.join(' + ')} = {sum}</p>
<button on:click={addNumber}>
	Add a number
</button>
<!-- Declaring Props -->

<Nested answer={42}/>
<Nested />



<style>
	p {
		color: goldenrod;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}
</style>