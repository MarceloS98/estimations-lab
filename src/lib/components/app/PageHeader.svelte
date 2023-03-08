<script>
	import { Button } from 'flowbite-svelte';
	export let isEditable = false;
	export let title = 'No title';
	export let route = '/';
</script>

{#if !isEditable}
	<div class="flex items-center mb-4">
		<h1 class="container mx-auto text-4xl font-bold">{title}</h1>
		<Button href={route}>Nuevo</Button>
	</div>
{:else}
	<div class="flex items-center">
		<h1 class="container mx-auto text-4xl font-bold">{title}</h1>
		<div class="flex gap-x-2">
			<Button href="/projects/create-project">Editar</Button>
			<Button href="/projects/create-project">Eliminar</Button>
		</div>
	</div>
{/if}
