<script>
	import "./TailwindStyles.svelte";
	import { Router, Route } from "svelte-routing";
	import Todo from "./Todo.svelte";
	import Home from "./Home.svelte";
</script>

<Router>
	<Route path="" component={Home} />
	<Route path="todo" component={Todo} />
</Router>
