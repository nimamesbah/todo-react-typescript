import { useForm } from "react-hook-form";
import type { TODOPROPS } from "../types";

function Todo({ id, title, isDone, setter, setEdit, edit }: TODOPROPS) {
  const { register, handleSubmit } = useForm();

  function isDoneHandle() {
    setter((prev) => {
      console.log(prev);
      return prev.map((item) =>
        item?.id === id ? { ...item, isDone: !item?.isDone } : item
      );
    });
  }
  function deleteTodo() {
    setter((prev) => prev.filter((item) => item.id !== id));
  }
  function saveEdit(data: any) {
    const value = data.editInput;
    console.log("Submitted value:", data);
    setter((prev) => {
      return prev.map((item) => {
        if (item.id === id) return { ...item, title: value };
        else return item;
      });
    });
    setEdit(null);
  }
  return (
    <div id={id?.toString()} className="flex gap-3 justify-between ">
      <input
        onClick={() => isDoneHandle()}
        type="checkbox"
        name=""
        id=""
        checked={isDone}
      />
      {edit !== id ? (
        <div className="">
          <h1 id="title">{title}</h1>
          <button onClick={() => setEdit(id || null)}>edit</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(saveEdit)} className="">
          <input type="text" {...register("editInput")} defaultValue={title} />
          <button type="submit">save</button>
        </form>
      )}
      <button onClick={() => deleteTodo()}>delete</button>
    </div>
  );
}

export default Todo;
