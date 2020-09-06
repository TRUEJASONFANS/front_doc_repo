
import React, { useState, useEffect } from 'react';

import TodoForm from './components/Todoform';
import { TodoItemModel } from './model';
import TodoList from './components/TodoList';
import { getTodoList, postTodo, deleteTodo } from './services/TodoServices';
import {useQuery} from 'react-query';


class TodoHeader extends React.Component {
  render() {
    return <h1>Todo list</h1>;
  }
}


function Todos(props:{data:TodoItemModel[]}) {

  const [allTodoItems, setTodoItems] = useState(props.data);

  const addItem = (todoItem: TodoItemModel) => {
    let todoItems = [...allTodoItems]
    postTodo(todoItem).then(re=> {
      todoItems.unshift({
        ...re
      })
      setTodoItems(todoItems);
    });
  }

  const removeItem = (deleteId: number) => {
    deleteTodo(deleteId).then(re => {
      let todoItems = allTodoItems.filter(item=> item.ID !== deleteId)
      setTodoItems(todoItems);
    })
  }

  const markTodoDone = (itemIndex: number) => {
    console.log("mark todo done")
    let todoItems = [...allTodoItems]
    var todo = todoItems[itemIndex];
    todoItems.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
    setTodoItems(todoItems);
  }

    return (
      <div id="main">
        <TodoHeader />
        <TodoList items={allTodoItems} removeItem={removeItem} markTodoDone={markTodoDone} />
        <TodoForm addItem={addItem} />
      </div>
    );  

}

export default function TodoApp() {
  const { isLoading, data } = useQuery(['getTodoList'], () => getTodoList());

  if (isLoading) {
    return <div>isLoading</div>
  } else {
    return <Todos data={data.Tasks}/>
  }
}