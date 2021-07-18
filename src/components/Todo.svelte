<script>
	import { todos } from "../stores.js";
	import TailwindTheme, { toggle } from "./TailwindTheme.svelte";
	import { fade } from "svelte/transition";

	let todoTitle = "";
	let todoDescription = "";
	let defaultHeight = 40;

	function add() {
		if (todoTitle.length != 0) {
			$todos = [
				...$todos,
				{
					title: todoTitle,
					description: todoDescription,
					height: defaultHeight,
				},
			];
			todoTitle = "";
			todoDescription = "";
			localStorage.setItem("todos", JSON.stringify($todos));
		} else {
			localStorage.setItem("todos", JSON.stringify($todos));
		}
	}

	function remove(index) {
		let tempTodos = $todos;
		tempTodos.splice(index, 1);
		$todos = tempTodos;
		localStorage.setItem("todos", JSON.stringify($todos));
	}
</script>

<TailwindTheme />
<header>
	<h1>Todo app</h1>
</header>
<main>
	<div class="form">
		<div class="form_div">
			<input
				type="text"
				class="form_input"
				placeholder="Title"
				bind:value={todoTitle}
				on:keydown={(e) => e.key === "Enter" && add()}
			/>
			<button class="add" on:click={add}>Add</button>
			<!-- <textarea
				bind:value={todoDescription}
				class="form_textarea"
				placeholder="Description"
				on:keydown={(e) => e.key === "Enter" && add()}
			/> -->
		</div>
	</div>
	<div class="todos">
		{#each $todos as { title, description, height }, index}
			<div class="todo" transition:fade={{ duration: 100 }}>
				<input type="text" bind:value={title} />
				<div bind:clientHeight={height} style="height: {height}px;">
					<textarea class="todo_textarea" bind:value={description} />
				</div>
				<button on:click={() => remove(index)}>x</button>
			</div>
		{/each}
	</div>
</main>
<button class="toggle" on:click={toggle}>⚙️</button>

<style type="postcss">
	header {
		@apply mt-10 flex flex-col items-center;
	}
	main {
		@apply mt-8 md:mt-32 flex flex-col items-center;
	}
	h1 {
		@apply text-4xl;
	}

	.form {
		@apply flex flex-col items-center;
	}
	.form_div {
		@apply flex flex-col items-center md:flex-row;
	}
	.form_input {
		@apply mx-4 text-lg border border-indigo-600 bg-transparent px-3 py-2 focus:outline-none focus:border-indigo-300 transition;
	}
	/* .form_textarea {
		@apply mx-4 my-2 max-h-48 text-lg border border-indigo-800 bg-transparent px-3 py-2 focus:outline-none focus:border-indigo-300 transition;
	} */

	.add {
		@apply px-6 py-1 mt-2 md:mt-0 rounded border-2 border-opacity-0 text-lg bg-indigo-300 border-indigo-300 cursor-pointer focus:border-indigo-500 focus:outline-none;
	}

	.todos {
		@apply mt-8 flex flex-col items-center;
	}
	.todo {
		@apply my-4 px-0 md:px-16 py-8 bg-indigo-300 text-lg flex items-center flex-col;
	}
	.todo > div {
		@apply resize-y overflow-hidden w-48 md:w-auto;
	}
	.todo > input {
		@apply bg-transparent text-center text-indigo-700 text-2xl focus:outline-none;
	}
	.todo_textarea {
		@apply bg-transparent text-center text-indigo-500 resize-none focus:outline-none;
	}
	.todo > button {
		@apply text-2xl text-red-500 focus:outline-none;
	}

	.toggle {
		@apply text-2xl cursor-pointer fixed top-0 right-0 m-4;
	}
</style>
