<script>
	import { Textarea, Button, Input, Label } from 'flowbite-svelte';
</script>

<div class="w-full h-full flex items-center justify-center">
	<div>
		<form>
			<Label class="m-2 block">Cree aqui su proyecto</Label>
			<Input
				class="mb-2 pb-2 text-xs"
				id="nombre_proyecto"
				type="text"
				placeholder="Nombre del proyecto"
				size="default"
			/>
			<Label for="" class="ml-2 mb-2 mt-2">Descripcion del proyecto</Label>
			<Textarea
				class="w-66 h-52 text-xs"
				id="desc_proyecto"
				placeholder="Escriba aqui"
				rows="4"
				name="message"
			/>
			<div class="flex justify-center">
				<Button id="guardar" class="mr-2" type="submit">Guardar</Button>
				<Button id="cancelar" type="submit">Cancelar</Button>
			</div>
		</form>
	</div>
</div>
