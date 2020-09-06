export default {
  namespace: "TodoList",
  state: {

  },
}

export interface TodoItemModel {
  ID: number,
  Name: string, 
  done: boolean,
  dateTime: number,
}