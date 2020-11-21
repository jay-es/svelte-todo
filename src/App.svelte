<script lang="ts">
  import type { Todo } from "./types";
  import TodoForm from "./TodoForm.svelte";
  import TodoItem from "./TodoItem.svelte";

  let todos: Todo[] = [
    {
      title: "task1",
      done: true,
    },
    {
      title: "task2",
      done: false,
    },
    {
      title: "task3",
      done: false,
    },
  ];

  const addTodo = (title: string) => {
    const newTodo: Todo = {
      title,
      done: false,
    };

    todos = [...todos, newTodo];
  };

  const handleSubmit = (e: CustomEvent<{ title: string }>) => {
    addTodo(e.detail.title);
  };

  const toggle = (index: number) => {
    todos[index].done = !todos[index].done;
  };

  $: totalCount = todos.length;
  $: undoneCount = todos.filter((v) => !v.done).length;
</script>

<style>
  main {
    text-align: center;
  }

  h1 {
    color: #ff3e00;
    font-size: 4em;
    font-weight: 100;
  }

  ul {
    list-style: none;
    padding-inline-start: 0;
  }
</style>

<main>
  <h1>ToDo App</h1>
  <TodoForm on:submit={handleSubmit} />
  <p>{totalCount} items ({undoneCount} undone)</p>

  <ul>
    {#each todos as todoItem, index}
      <TodoItem {todoItem} {index} on:click={() => toggle(index)} />
    {:else}
      <p>No Tasks</p>
    {/each}
  </ul>
</main>
