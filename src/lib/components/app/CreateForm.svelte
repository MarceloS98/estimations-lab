<script lang="ts">
	import { Textarea, Button, Input, Label } from 'flowbite-svelte';
	import { goto, afterNavigate } from '$app/navigation';
	import { base } from '$app/paths';

	export let toEdit = false;
	export let type: string;
	export let project: any = {};
	export let epics: any[] = [];

	$: console.log(epics);
	let previousPage: string = base;
	let action: string;

	afterNavigate(({ from }) => {
		previousPage = from?.url.pathname || previousPage;
	});

	function goBack(e: Event) {
		e.preventDefault();
		goto(previousPage);
	}

	switch (type) {
		case 'project':
			action = toEdit ? 'updateProject' : 'createProject';
			console.log(action);
			break;
		case 'epic':
			action = toEdit ? 'updateEpics' : 'createEpics';
			break;
		case 'request':
			action = toEdit ? 'updateRequest' : 'createRequest';
			break;
		case 'issue':
			action = toEdit ? 'updateIssue' : 'createIssue';
			break;
		default:
			console.log('Llego aca pero no deberia');
			break;
	}
</script>

<div class="max-w-lg mx-auto bg-white p-8 rounded-lg">
	<h1 class="text-2xl font-bold container border-b border-slate-200 pb-3">
		{toEdit ? `Edicion de ${type}` : `Creacion de ${type}`}
	</h1>
	<div>
		<form action={`?/${action}`} method="POST">
			<Label for={`nombre_${type}`} class="m-2 text-lg block"
				>{toEdit ? 'Edite' : 'Cree'} aqui su {type}</Label
			>
			<Input
				id={`tittle${type}`}
				type="text"
				placeholder="Escriba el nombre"
				size="default"
				name="tittle"
				value={toEdit ? project?.tittle : ''}
			/>
			<Label for={`desc_${type}`} class="m-2 text-lg">Descripcion del {type}</Label>
			<Textarea
				class="h-52"
				id={`description${type}`}
				placeholder="Escriba la descripción"
				name="description"
				value={toEdit ? project?.description : ''}
			/>
			{#if type === 'request'}
				<Label for={`desc_${type}`} class="m-2 text-lg">Selecciona un epic</Label>
				<select name="" id="">
					{#each epics as epic}
						<option value={epic.epics_id}>{epic.name}</option>
					{/each}
				</select>
			{/if}
			<div class="flex gap-x-3 mt-3 justify-end">
				<Button id="guardar" type="submit">Guardar</Button>
				<Button id="cancelar" type="submit" on:click={goBack}>Cancelar</Button>
			</div>
		</form>
	</div>
</div>
