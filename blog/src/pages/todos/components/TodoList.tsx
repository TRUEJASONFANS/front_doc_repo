import React from 'react';
import {TodoItemModel} from "@/pages/todos/model";

interface TodoListProps {
  items: Array<TodoItemModel>,
  removeItem: Function,
  markTodoDone: Function
}

export default class TodoList extends React.Component<TodoListProps> {
  render () {
    var items = this.props.items.map((item, index) => {
      return (
        <TodoListItem key={index} item={item} index={index} removeItem={this.props.removeItem} markTodoDone={this.props.markTodoDone} />
      );
    });
    return (
      <ul className="list-group"> {items} </ul>
    );
  }
}

interface TodoListItemProps {
  removeItem: Function,
  markTodoDone: Function,
  index: number,
  item:TodoItemModel,
}
  
class TodoListItem extends React.Component<TodoListItemProps> {
  constructor(props:TodoListItemProps) {
    super(props);
    this.onClickClose = this.onClickClose.bind(this);
    this.onClickDone = this.onClickDone.bind(this);
  }
  onClickClose() {
    var index = this.props.index;
    this.props.removeItem(index);
  }
  onClickDone() {
    var index = this.props.index;
    this.props.markTodoDone(index);
  }
  render () {
    var todoClass = this.props.item.done ? 
        "done" : "undone";
    return(
      <li className="list-group-item ">
        <div className={todoClass}>
          <span className="glyphicon glyphicon-ok icon" aria-hidden="true" onClick={this.onClickDone}></span>
          {this.props.item.value}
          <button type="button" className="close" onClick={this.onClickClose}>&times;</button>
        </div>
      </li>     
    );
  }
}