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
      update((todos) =>
        todos.map((v, i) => ({
          ...v,
          done: i === index ? !v.done : v.done,
        }))
      );
    },
    reset: () => set([]),
  };
};

export const todos = createTodos();
