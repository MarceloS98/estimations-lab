<script>
	import { Textarea, Button, Input, Label } from 'flowbite-svelte';
</script>

<div class="w-full h-full flex items-center justify-center">
	<div>
		<form action="?/createProject" method="POST">
			<Label class="m-2 block">Cree aqui su proyecto</Label>
			<Input
				class="mb-2 pb-2 text-xs"
				id="tittle"
				type="text"
				placeholder="Nombre del proyecto"
				size="default"
				name="tittle"
			/>
			<Label for="" class="ml-2 mb-2 mt-2">Descripcion del proyecto</Label>
			<Textarea
				class="w-66 h-52 text-xs"
				id="description"
				placeholder="Escriba aqui"
				rows="4"
				name="description"
			/>
			<div class="flex justify-center">
				<Button id="guardar" class="mr-2" type="submit">Guardar</Button>
				<Button id="cancelar" type="submit">Cancelar</Button>
			</div>
		</form>
	</div>
</div>
