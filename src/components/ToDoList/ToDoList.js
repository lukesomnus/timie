

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  RaisedButton,
  TextField,
  Checkbox
} from 'material-ui';
import TodoItem from './TodoItem';
import s from './ToDoList.css';

// const styles = {
//   checkbox: {
//     display: 'inline-block',

// }
const todoItems = [{
  text: 'go to small',
  level: 1,
  id: 1,
  isEdit: false,
  isCompleted: false,
}];
class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoInputVal: '',
      todoItems,
    };
    this.todoInputChange = this.todoInputChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.checkTodo = this.checkTodo.bind(this);
    this.changeTodo = this.changeTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }
  todoInputChange(event, newVal) {
    this.setState({
      todoInputVal: newVal,

    });
  }
  addTodo() {
    if (!this.state.todoInputVal) return;
    const newTodo = {
      text: this.state.todoInputVal,
      isCompleted: false,
      id: this.state.todoItems.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
      level: 1,
    };
    const newTodoItems = [...this.state.todoItems, newTodo];
    this.setState({
      todoInputVal: '',
      todoItems: newTodoItems,
    });
  }

  checkTodo(id) {
    const newTodoItems = this.state.todoItems.map(todo => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo);
    this.setState({
      todoItems: newTodoItems,
    });
  }

  editTodo(id) {
    const newTodoItems = this.state.todoItems.map(todo => todo.id === id ? { ...todo, isEdit: !todo.isEdit } : todo);
    this.setState({
      todoItems: newTodoItems,
    });
  }

  changeTodo(id, newVal) {
    const newTodoItems = this.state.todoItems.map(todo => todo.id === id ? { ...todo, text: newVal, isEdit: !todo.isEdit } : todo);
    this.setState({
      todoItems: newTodoItems,
    });
  }

  deleteTodo(id) {
    var index;
    this.state.todoItems.forEach((todo, i) => {
      if (todo.id === id) index = i;
    });
    this.state.todoItems.splice(index, 1)
    const newTodoItems = [...this.state.todoItems]
    console.log(newTodoItems)
    this.setState({
      todoItems: newTodoItems,
    });
  }

  render() {
    const styles = {
      labelStyleLine: {
        textDecoration: 'line-through',
        color: '#aaa',
      },
    };

    return (
      <div className={s.container} >
        <div className={s.todoInputArea} >
          <div className={s.todoInput} >
            <TextField hintText="todo content" style={{ width: 300 }} value={this.state.todoInputVal} onChange={this.todoInputChange} />
          </div >
          <RaisedButton label="submit" onClick={this.addTodo} />
        </div >
        <div className={s.todoListGroup} >
          <ul >
            {
              this.state.todoItems.map(item => <TodoItem key={item.id} {...item} todoCheck={() => this.checkTodo(item.id)} labelStyleLine={styles.labelStyleLine} editTodo={() => this.editTodo(item.id)} changeTodo={this.changeTodo} deleteTodo={() => this.deleteTodo(item.id)} />)
            }
          </ul>
        </div >
      </div>
    );
  }
}


export default withStyles(s)(ToDoList);
