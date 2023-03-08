<!-- <script>
	import { Toggle } from 'flowbite-svelte';
	let colors = [
		{ red: 'bg-red-500' },
		{ yellow: 'bg-yellow-500' },
		{ green: 'bg-green-500' },
		{ blue: 'bg-blue-500' },
		{ indigo: 'bg-indigo-500' },
		{ purple: 'bg-purple-500' },
		{ pink: 'bg-pink-500' }
	];
	let selectedColor = '';
</script>

{#each colors as colorObj}
	<Toggle
		id={'epic_' + Object.keys(colorObj)[0]}
		class="p-2"
		{Object.values(colorObj)[0] }
		checked={selectedColor === colorObj}
		on:click={() => (selectedColor = colorObj)}>
		{Object.keys(colorObj)[0]}
	</Toggle>
{/each}
 -->
