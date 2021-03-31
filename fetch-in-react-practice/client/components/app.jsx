import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    this.getAllTodos();
  }

  getAllTodos() {
    fetch('api/todos')
      .then(response => response.json())
      .then(todos => {
        this.setState({
          todos
        });
      })
      .catch(err => console.error(err))
    /**
     * Use fetch to send a GET request to `/api/todos`.
     * Then 😉, once the response JSON is received and parsed,
     * update state with the received todos.
     */
  }

  addTodo(newTodo) {
    fetch('api/todos', {
      method: 'POST',
      body: JSON.stringify(newTodo),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(newTodo => {
        const todos = this.state.todos.slice();
        todos.push(newTodo);
        this.setState({
          todos: todos
        });
      })
      .catch(err => console.error(err))
    /**
    * Use fetch to send a POST request to `/api/todos`.
    * Then 😉, once the response JSON is received and parsed,
    * add the created todo to the state array.
    *
    * TIP: Be sure to SERIALIZE the todo object in the body with JSON.stringify()
    * and specify the "Content-Type" header as "application/json"
    */
  }

  toggleCompleted(todoId) {
    let toEditIndex;
    const todos = this.state.todos;
    for (var i = 0; i < todos.length; i++) {
      if (todos[i].todoId === todoId) {
        toEditIndex = i;
        break;
      }
    }
    const status = todos[toEditIndex].isCompleted;
    const updatedStatus = {
      isCompleted: !status
    };
    fetch(`api/todos/${todoId}`, {
      method: 'PATCH',
      body: JSON.stringify(updatedStatus),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(updatedTodo => {
        const newTodos = this.state.todos.slice();
        newTodos[toEditIndex] = updatedTodo;
        this.setState({
          todos: newTodos
        });
      })
    /**
     * Find the index of the todo with the matching todoId in the state array.
     * Get its "isCompleted" status.
     * Make a new object containing the opposite "isCompleted" status.
     * Use fetch to send a PATCH request to `/api/todos/${todoId}`
     * Then 😉, once the response JSON is received and parsed,
     * replace the old todo in the state array.
     *
     * NOTE: "toggle" means to flip back and forth, so clicking a todo
     * in the list should "toggle" its isCompleted status back and forth.
     *
     * TIP: Be sure to SERIALIZE the updates in the body with JSON.stringify()
     * And specify the "Content-Type" header as "application/json"
     */
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App" />
            <TodoForm onSubmit={this.addTodo} />
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted} />
          </div>
        </div>
      </div>
    );
  }
}
