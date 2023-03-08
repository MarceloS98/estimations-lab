<script lang="ts">
	import { Button, Modal } from 'flowbite-svelte';
	import { createEventDispatcher } from 'svelte';
	export let isEditable = false;
	export let title = 'No title';
	export let type = 'Type';
	export let project_id;

	const dispatcher = createEventDispatcher();

	let route = '';
	let popupModal = false;
	// Switch to determine the route to edit the page
	if (isEditable) {
		switch (type) {
			case 'project':
				route = `/projects/${project_id}/edit-project`;
				break;
			case 'epic':
				route = `/projects/${project_id}/edit-epic`;
				break;
			case 'request':
				route = `/projects/${project_id}/request_id/edit-request`;
				break;
			case 'issue':
				route = `/projects/${project_id}/request_id/issue_id/edit-issue`;
				break;
			default:
				break;
		}
	} else {
		// Switch to determine the route to create the page
		switch (type) {
			case 'project':
				route = `/projects/create-project`;
				break;
			case 'epic':
				route = `/projects/${project_id}/create-epic`;
				break;
			case 'request':
				route = `/projects/${project_id}/create-request`;
				break;
			case 'issue':
				route = `/projects/${project_id}/request_id/create-issue`;
				break;
			default:
				break;
		}
	}
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
			<Button href={route}>Editar</Button>
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
					<!-- <form action="/projects/1/?/delete-project" method="POST"> -->
					<Button
						color="red"
						class="mr-2"
						type="button"
						on:click={() => {
							dispatcher('delete');
							popupModal = false;
						}}>Yes, delete</Button
					>
					<Button color="alternative">Cancel</Button>
					<!-- </form> -->
				</div>
			</Modal>
		</div>
	</div>
{/if}
