<script>
    import { fade } from "svelte/transition";
    import { onMount } from "svelte";

    let todoName = "";
    let todos = [];

    function add() {
        if (todoName.length != 0) {
            todos.push({
                name: todoName,
            });
            todos = todos;
            todoName = "";
            localStorage.setItem("todos", JSON.stringify(todos));
        } else {
            localStorage.setItem("todos", JSON.stringify(todos));
        }
    }

    function remove(index) {
        todos.splice(index, 1);
        todos = todos;
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    function toggle() {
        let htmlClasses = document.querySelector("html").classList;
        if (localStorage.theme === "dark") {
            htmlClasses.remove("dark");
            localStorage.removeItem("theme");
        } else {
            htmlClasses.add("dark");
            localStorage.theme = "dark";
        }
    }
    onMount(() => {
        if (localStorage.getItem("todos") !== null) {
            todos = JSON.parse(localStorage.getItem("todos"));
        }

        if (
            localStorage.theme === "dark" ||
            (!"theme" in localStorage &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.querySelector("html").classList.add("dark");
        } else if (localStorage.theme === "dark") {
            document.querySelector("html").classList.add("dark");
        }
    });
</script>

<header>
    <h1>Todo app</h1>
</header>
<main>
    <div class="form">
        <input
            type="text"
            placeholder="Name"
            bind:value={todoName}
            on:keydown={(e) => e.key === "Enter" && add()}
        />
        <button class="add" on:click={add}>Add</button>
    </div>
    <div class="todos">
        {#each todos as { name }, index}
            <div class="todo" transition:fade={{ duration: 100 }}>
                <input bind:value={name} />
                <button on:click={() => remove(index)}>x</button>
            </div>
        {/each}
    </div>
</main>
<button class="toggle" on:click={toggle}>⚙️</button>

<style type="postcss">
    header {
        @apply mt-16 flex flex-col items-center;
    }
    main {
        @apply mt-8 md:mt-32 flex flex-col items-center;
    }
    h1 {
        @apply text-4xl;
    }

    .form {
        @apply flex items-center flex-col md:flex-row;
    }
    .add {
        @apply px-6 py-1 mt-2 md:mt-0 rounded border-2 border-opacity-0 text-lg bg-indigo-300 border-indigo-300 cursor-pointer
        focus:border-indigo-500 focus:outline-none;
    }
    .form > input {
        @apply mx-4 text-lg border border-indigo-800 bg-transparent px-3 py-2 focus:outline-none focus:border-indigo-300 transition;
    }

    .todos {
        @apply mt-8 flex flex-col items-center;
    }
    .todo {
        @apply my-4 px-0 md:px-16 py-8 bg-indigo-300 text-lg text-indigo-600 flex items-center flex-col;
    }
    .todo > input {
        @apply bg-transparent border-none text-center w-48 md:w-auto focus:outline-none;
    }
    .todo > button {
        @apply text-2xl text-red-500 focus:outline-none;
    }

    .toggle {
        @apply text-2xl cursor-pointer
        fixed top-0 right-0 m-4;
    }
</style>
