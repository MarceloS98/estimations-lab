<script>
	import { Button, Modal } from 'flowbite-svelte';
	export let isEditable = false;
	export let title = 'No title';
	let popupModal = false;

	// import { afterNavigate } from '$app/navigation';
	// import { base } from '$app/paths';

	// let previousPage = base;
	// console.log(previousPage);

	// afterNavigate(({ from }) => {
	// 	previousPage = from?.url.pathname || previousPage;
	// });
</script>

{#if !isEditable}
	<div class="flex items-center mb-4">
		<h1 class="container mx-auto text-4xl font-bold">{title}</h1>
		<Button href="/projects/create-project">Nuevo</Button>
	</div>
{:else}
	<div class="flex items-center">
		<h1 class="container mx-auto text-4xl font-bold">{title}</h1>
		<div class="flex gap-x-2">
			<Button href="/projects/create-project">Editar</Button>
			<Button on:click={() => (popupModal = true)}>Eliminar</Button>
			<Modal bind:open={popupModal} size="xs" autoclose>
				<div class="text-center">
					<svg
						aria-hidden="true"
						class="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/></svg
					>
					<h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
						Are you sure you want to delete this project?
					</h3>
					<Button color="red" class="mr-2">Yes, delete</Button>
					<Button color="alternative">Cancel</Button>
				</div>
			</Modal>
		</div>
	</div>
{/if}
