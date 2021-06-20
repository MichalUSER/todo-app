<script>
	import { Link } from "svelte-routing";
	import { onMount } from "svelte";

	onMount(() => {
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

<nav>
	<div class="link">
		<Link class="link" to="/todo">Todo app</Link>
	</div>
</nav>
