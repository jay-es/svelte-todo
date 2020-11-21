<script lang="ts">
  import type { Todo } from "./types";
  export let todoItem: Readonly<Todo>;
  export let index: Readonly<number>;

  $: spanClass = todoItem.done ? "done" : "";
</script>

<style>
  li {
    margin: 0.4em;
  }

  span {
    cursor: pointer;
  }

  .done {
    text-decoration: line-through;
  }
</style>

<li>{index + 1}: <span class={spanClass} on:click>{todoItem.title}</span></li>
