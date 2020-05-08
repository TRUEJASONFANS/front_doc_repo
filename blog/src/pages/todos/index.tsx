  
import React from 'react';
import TodoList from '@/pages/todos/components/TodoList';
import TodoForm from './components/Todoform';
import {TodoItemModel} from "@/pages/todos/model";
class TodoHeader extends React.Component {
  render () {
    return <h1>Todo list</h1>;
  }
}



interface TodoState {
  todoItems: TodoItemModel[],
}

const initItems:TodoItemModel[] = [];
  
export default class TodoApp extends React.Component<any,TodoState> {
  constructor (props:any) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
    
    initItems.push({ index: 1, value: "learn react", done: false });
    initItems.push({ index: 2, value: "Go shopping", done: true });
    initItems.push({ index: 3, value: "buy flowers", done: true });
    this.state = { todoItems: initItems };
  }
  addItem(todoItem:TodoItemModel) {
    let todoItems = this.state.todoItems
    todoItems.unshift({
      index: todoItems.length+1, 
      value: todoItem.value, 
      done: false
    });
    this.setState({todoItems: todoItems});
  }
  removeItem (itemIndex: number) {
    let todoItems = this.state.todoItems
    todoItems.splice(itemIndex, 1);
    this.setState({todoItems: todoItems});
  }
  markTodoDone(itemIndex: number) {
    let todoItems = this.state.todoItems
    var todo = todoItems[itemIndex];
    todoItems.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
    this.setState({todoItems: todoItems});  
  }
  render() {
    return (
      <div id="main">
        <TodoHeader />
        <TodoList items={initItems} removeItem={this.removeItem} markTodoDone={this.markTodoDone}/>
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}
