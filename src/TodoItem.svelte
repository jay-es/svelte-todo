<script lang="ts">
  import type { Todo } from "./store";
  export let todoItem: Readonly<Todo>;
  export let index: Readonly<number>;

  $: num = index + 1;
</script>

<li>
  {num}: <span class:done={todoItem.done} on:click>{todoItem.title}</span>
</li>

<style>
  li {
    margin: 0.4em;
  }

  span {
    cursor: pointer;
    -webkit-user-select: none;
  }

  .done {
    text-decoration: line-through;
  }
</style>
