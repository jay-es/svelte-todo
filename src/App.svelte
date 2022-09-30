<script lang="ts">
  import { todos } from "./store";
  import type { AddTodo } from "./store";
  import TodoForm from "./TodoForm.svelte";
  import TodoList from "./TodoList.svelte";

  // リストが空の状態を確認するため、処理を遅らせる
  setTimeout(() => {
    todos.add("task1");
    todos.add("task2");
    todos.add("task3");
    todos.toggle(0);
  }, 400);

  const handleSubmit = (e: CustomEvent<AddTodo>) => {
    todos.add(e.detail.title);
  };

  $: totalCount = $todos.length;
  $: undoneCount = $todos.filter((v) => !v.done).length;
</script>

<main>
  <h1>ToDo App</h1>
  <TodoForm on:submit={handleSubmit} />
  <p>{totalCount} items ({undoneCount} undone)</p>

  <TodoList />
</main>

<style>
  main {
    text-align: center;
  }

  h1 {
    color: #ff3e00;
    font-size: 4em;
    font-weight: 100;
  }
</style>
