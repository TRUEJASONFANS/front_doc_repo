import React, { useEffect, useRef } from 'react';
import { TodoItemModel } from '../model';
interface TodoFormProps {
  addItem: (t:TodoItemModel) => void
}

export default function TodoForm(props: TodoFormProps) {

  const inputRef = useRef(null);
  const formRef = useRef(null);

  const onSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    var newItemValue = inputRef.current.value;

    if (newItemValue) {
      props.addItem({ Name: newItemValue} as TodoItemModel);
      formRef.current.reset();
    }
  }

  useEffect(()=> {
    inputRef.current.focus();
  });

  return (
    <form ref={formRef} onSubmit={onSubmit} className="form-inline">
      <input type="text" ref={inputRef} className="form-control" placeholder="add a new todo..." />
      <button type="submit" className="btn btn-default">Add</button>
    </form>
  );
}