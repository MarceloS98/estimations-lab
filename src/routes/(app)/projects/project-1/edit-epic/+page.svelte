<script>
	import { Navbar, NavLi, NavUl } from 'flowbite-svelte';
	import { Textarea, Button, Input, Label, Toggle } from 'flowbite-svelte';
	let selectedColor = 'red';
</script>

<h1 class="container mx-auto text-3xl font-bold underline">Edit Epic</h1>
<Navbar>
	<NavUl>
		<NavLi href="/projects/project-1">Go Back</NavLi>
	</NavUl>
</Navbar>
<div class="w-full h-full flex items-center justify-center">
	<div>
		<h2 class="underline">Elija el color de su Epic</h2>
		<div class="flex">
			<Toggle
				class="p-2"
				color="red"
				checked={selectedColor === 'red'}
				on:click={() => (selectedColor = 'red')}>Rojo</Toggle
			>
			<Toggle
				class="p-2"
				color="green"
				checked={selectedColor === 'green'}
				on:click={() => (selectedColor = 'green')}>Verde</Toggle
			>
			<Toggle
				class="p-2"
				color="blue"
				checked={selectedColor === 'blue'}
				on:click={() => (selectedColor = 'blue')}>Azul</Toggle
			>
			<Toggle
				class="p-2"
				color="purple"
				checked={selectedColor === 'purple'}
				on:click={() => (selectedColor = 'purple')}>Purpura</Toggle
			>
			<Toggle
				class="p-2"
				color="orange"
				checked={selectedColor === 'orange'}
				on:click={() => (selectedColor = 'orange')}>Naranja</Toggle
			>
			<Toggle
				class="p-2"
				color="yellow"
				checked={selectedColor === 'yellow'}
				on:click={() => (selectedColor = 'yellow')}>Amarillo</Toggle
			>
		</div>
		<form>
			<Label class="m-2 block">Cree aqui su proyecto</Label>
			<Input
				class="mb-2 pb-2 text-xs"
				id="nombre_proyecto"
				type="text"
				placeholder="Nombre del proyecto"
				size="default"
			/>
			<Label for="textarea-id" class="ml-2 mb-2 mt-2">Descripcion del proyecto</Label>
			<Textarea
				class="w-66 h-52 text-base"
				id="textarea-id"
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
