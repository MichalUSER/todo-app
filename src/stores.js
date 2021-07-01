import { writable } from "svelte/store";

let storedTodos = [];
if (localStorage.getItem("todos") !== null) {
    storedTodos = JSON.parse(localStorage.getItem("todos"));
}
export const todos = writable(storedTodos);