<script>
	import { Button } from 'flowbite-svelte';
	let colors = [
		'bg-red-500',
		'bg-yellow-500',
		'bg-green-500',
		'bg-blue-500',
		'bg-indigo-500',
		'bg-purple-500',
		'bg-pink-500'
	];
</script>

<div class="flex justify-between">
	<div class="flex gap-x-4">
		{#each colors as color}
			<Button href="/projects/project-1/edit-epic" class={color}>Epic</Button>
		{/each}
	</div>
	<Button pill={true} outline={true} color="light" href="/projects/project-1/create-epic"
		>Nuevo Epic</Button
	>
</div>
