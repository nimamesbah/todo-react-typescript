import { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";
import type { FORM, TODO } from "./types";
import Todo from "./components/Todo";

function App() {
  const { register, handleSubmit } = useForm<FORM>({ mode: "onSubmit" });
  const [todos, setTodos] = useState<TODO[]>([]);
  function submit(data: { title: string }) {
    setTodos([
      ...todos,
      { id: Date.now() * Math.random() * 10, title: data.title, isDone: false },
    ]);
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit(submit)}>
        <input
          {...register("title")}
          type="text"
          className="border border-red-500"
        />
        <button type="submit">add</button>
      </form>
      <ul>
        {todos.map((item) => (
          <Todo
            id={item?.id}
            title={item?.title}
            isDone={item?.isDone}
            setter={setTodos}
          />
        ))}
      </ul>
    </>
  );
}

export default App;
