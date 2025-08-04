import type { TODO, TODOPROPS } from "../types";

function Todo({ id, title, isDone, setter }: TODOPROPS) {
  function isDoneHandle() {
    setter((prev) => {
      console.log(prev);
      return prev.map((item) =>
        item?.id === id ? { ...item, isDone: !item?.isDone } : item
      );
    });
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
      <h1 id="title">{title}</h1>
    </div>
  );
}

export default Todo;
