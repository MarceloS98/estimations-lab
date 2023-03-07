<script>
	import { Navbar, NavLi, NavUl } from 'flowbite-svelte';
	import { Textarea, Button, Input, Label } from 'flowbite-svelte';
</script>

<h1 class="container mx-auto text-3xl font-bold underline">Create Request</h1>
<Navbar>
	<NavUl>
		<NavLi href="/projects/project-1">Go Back</NavLi>
	</NavUl>
</Navbar>
<div class="w-full h-full flex items-center justify-center">
	<div>
		<form>
			<Label class="m-2 block">Cree aqui su Request</Label>
			<Input
				class="mb-2 pb-2 text-xs"
				id="nombre_request"
				type="text"
				placeholder="Nombre del Request"
				size="default"
			/>
			<Label for="textarea-id" class="ml-2 mb-2 mt-2">Descripcion del Request</Label>
			<Textarea
				class="w-66 h-52 text-xs"
				id="request_description"
				placeholder="Escriba aqui"
				rows="4"
				name="message"
			/>
			<div class="flex justify-center">
				<Button id="guardar_request" class="mr-2" type="submit">Guardar</Button>
				<Button id="cancelar_request" type="submit">Cancelar</Button>
			</div>
		</form>
	</div>
</div>
