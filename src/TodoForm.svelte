<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { AddTodo } from "./store";

  const dispatch = createEventDispatcher<{ submit: AddTodo }>();
  let title: string = "";

  const handleClick = () => {
    dispatch("submit", { title });
    title = "";
  };
</script>

<div>
  <input type="text" bind:value={title} placeholder="input your todo" />
  <button disabled={!title} on:click={handleClick}>Add</button>
</div>

<style>
  button:not(:disabled) {
    cursor: pointer;
  }
  button:disabled {
    cursor: not-allowed;
  }
</style>
