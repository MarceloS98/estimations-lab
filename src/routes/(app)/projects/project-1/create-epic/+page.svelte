<script>
	import { Navbar, NavLi, NavUl, Toggle } from 'flowbite-svelte';
	import { Textarea, Button, Input, Label } from 'flowbite-svelte';
	let selectedColor = 'red';
	// let colors = [
	// 	'bg-red-500',
	// 	'bg-yellow-500',
	// 	'bg-green-500',
	// 	'bg-blue-500',
	// 	'bg-indigo-500',
	// 	'bg-purple-500',
	// 	'bg-pink-500'
	// ];
</script>

<h1 class="container mx-auto text-3xl font-bold underline">Create Epic</h1>
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
				id="nombre_Epic"
				type="text"
				placeholder="Nombre del Epic"
				size="default"
			/>
			<Label for="" class="ml-2 mb-2 mt-2">Descripcion del Epic</Label>
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
	<div class="pt-8 pl-4">
		<Toggle
			id="epic_red"
			class="p-2"
			color="red"
			checked={selectedColor === 'red'}
			on:click={() => (selectedColor = 'red')}>Rojo</Toggle
		>
		<Toggle
			id="epic_green"
			class="p-2"
			color="green"
			checked={selectedColor === 'green'}
			on:click={() => (selectedColor = 'green')}>Verde</Toggle
		>
		<Toggle
			id="epic_green"
			class="p-2"
			color="blue"
			checked={selectedColor === 'blue'}
			on:click={() => (selectedColor = 'blue')}>Azul</Toggle
		>
		<Toggle
			id="	"
			class="p-2"
			color="yellow"
			checked={selectedColor === 'yellow'}
			on:click={() => (selectedColor = 'yellow')}>Amarillo</Toggle
		>
		<Toggle
			class="p-2"
			color="purple"
			checked={selectedColor === 'purple'}
			on:click={() => (selectedColor = 'purple')}>purpura</Toggle
		>
	</div>
</div>
