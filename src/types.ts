export type TODO = {
  id: number | undefined;
  title: string | undefined;
  isDone: boolean | undefined;
};
export type TODOPROPS = {
  id: number | undefined;
  title: string | undefined;
  isDone: boolean | undefined;
  setter: React.Dispatch<React.SetStateAction<TODO[]>>;
};
export type TODOSTORE = {
  todo: null | TODO;
  addTodo: () => void;
  deleteTodo: () => void;
  edit: () => void;
};
export type FORM = {
  title: string;
};
