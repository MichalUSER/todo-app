<script>
	import { Link } from "svelte-routing";
	import TailwindTheme from "./TailwindTheme.svelte";
</script>

<TailwindTheme />
<nav>
	<div class="link">
		<Link class="link" to="/todo">Todo app</Link>
	</div>
</nav>
