import { writable } from 'svelte/store';
import { readable } from 'svelte/store';
import { derived } from 'svelte/store';
export const count = writable(10);
export const time = readable(new Date(), function start(set) {
	const interval = setInterval(() => {
		set(new Date());
	}, 1000);

	return function stop() {
		clearInterval(interval);
	};
});

export const name = writable('world');
export const greeting = derived(name, ($name) => 'Hello $($name)!')
