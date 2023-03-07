<script>
	import { Navbar, NavLi, NavUl } from 'flowbite-svelte';
	import { Textarea, Button, Input, Label } from 'flowbite-svelte';
</script>

<h1 class="container mx-auto text-3xl font-bold underline">Edit Epic</h1>
<Navbar>
	<NavUl>
		<NavLi href="/projects/project-1">Go Back</NavLi>
	</NavUl>
</Navbar>

<div class="w-full h-full flex items-center justify-center">
	<div>
		<form>
			<Label class="m-2 block">Cree aqui su Epic</Label>
			<Input
				class="mb-2 pb-2 text-xs"
				id="nombre_epic"
				type="text"
				placeholder="Escriba aqui"
				size="default"
			/>
			<Label for="description_epic" class="ml-2 mb-2 mt-2">Descripcion del Epic</Label>
			<Textarea
				class="w-66 h-52 text-xs"
				id="desc_id"
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
