import { writable } from "svelte/store";

export type Todo = {
  title: string;
  done: boolean;
};

const createTodos = () => {
  const { subscribe, set, update } = writable<Todo[]>([]);

  return {
    subscribe,
    add(title: string) {
      const newTodo: Todo = {
        title,
        done: false,
      };

      update((todos) => [...todos, newTodo]);
    },
    toggle(index: number) {
      update((todos) => {
        todos[index].done = !todos[index].done;
        return todos;
      });
    },
    reset: () => set([]),
  };
};

export const todos = createTodos();
