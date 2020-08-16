import React from 'react';
interface TodoFormProps {
  addItem: Function
}
export default class TodoForm extends React.Component<TodoFormProps> {
  constructor(props: TodoFormProps) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    // this.refs.itemName.focus();
  }
  onSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();
    // var newItemValue = this.refs.itemName.value;

    // if (newItemValue) {
    //   this.props.addItem({ value: newItemValue });
    //   this.refs.form.reset();
    // }
  }
  render() {
    return (
      <form ref="form" onSubmit={this.onSubmit} className="form-inline">
        <input type="text" ref="itemName" className="form-control" placeholder="add a new todo..." />
        <button type="submit" className="btn btn-default">Add</button>
      </form>
    );
  }
}