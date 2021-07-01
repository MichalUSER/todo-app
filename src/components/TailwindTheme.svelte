<script context="module">
    export function toggle() {
        let htmlClasses = document.querySelector("html").classList;
        if (localStorage.theme === "dark") {
            htmlClasses.remove("dark");
            localStorage.removeItem("theme");
        } else {
            htmlClasses.add("dark");
            localStorage.theme = "dark";
        }
    }
</script>

<script>
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
