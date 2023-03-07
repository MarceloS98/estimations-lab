<script lang="ts">
	import { Textarea, Button, Input, Label } from 'flowbite-svelte';
	import { goto, afterNavigate } from '$app/navigation';
	import { base } from '$app/paths';

	export let toEdit = false;
	export let type = 'Type';

	let previousPage: string = base;

	afterNavigate(({ from }) => {
		previousPage = from?.url.pathname || previousPage;
		console.log(previousPage);
	});

	function goBack(e: Event) {
		e.preventDefault();
		goto(previousPage);
	}
</script>

<div class="max-w-lg mx-auto bg-white p-8 rounded-lg">
	<h1 class="text-2xl font-bold container border-b border-slate-200 pb-3">
		{toEdit ? `Edicion de ${type}` : `Creacion de ${type}`}
	</h1>
	<div>
		<form action="?/createProject" method="POST">
			<Label for={`nombre_${type}`} class="m-2 text-lg block">Cree aqui su {type}</Label>
			<Input
				id={`tittle${type}`}
				type="text"
				placeholder="Escriba el nombre"
				size="default"
				name="tittle"
			/>
			<Label for={`desc_${type}`} class="m-2 text-lg">Descripcion del {type}</Label>
			<Textarea
				class="h-52"
				id={`description${type}`}
				placeholder="Escriba la descripción"
				name="description"
			/>
			<div class="flex gap-x-3 mt-3 justify-end">
				<Button id="guardar" type="submit">Guardar</Button>
				<Button id="cancelar" type="submit" on:click={goBack}>Cancelar</Button>
			</div>
		</form>
	</div>
</div>
