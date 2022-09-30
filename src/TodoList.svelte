<script lang="ts">
  import { todos } from "./store";
  import TodoItem from "./TodoItem.svelte";
</script>

<ul>
  {#each $todos as todoItem, index}
    <TodoItem {todoItem} {index} on:click={() => todos.toggle(index)} />
  {:else}
    <p>No Tasks</p>
  {/each}
</ul>

<style>
  ul {
    list-style: none;
    padding-inline-start: 0;
  }
</style>
