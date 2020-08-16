export default {
  namespace: "TodoList",
  state: {

  },
}

export interface TodoItemModel {
  index: number,
  value: string, 
  done: boolean,
}