import React, { Component } from 'react';
import { getTodos, postTodos, updateTodos } from './fetch-utils.js';
import './Todo.css'

class Todos extends Component {
    state = { todo: [], updateTodo: {}, newTodo:'' }
    componentDidMount = async() => {
        const data = await getTodos()
        this.setState({todo: data})
    }
    handleCheckbox = async(item) => {
        this.setState({updateTodo: item})
        const newData = {
            id: item.id,
            todo: item.todo,
            completed: true,
            user_id: item.user_id
        }
        await updateTodos(newData)
        await getTodos()
    }
    handleSubmit = async(e) => {
        e.preventDefault()
        const userId = this.state.todo.map(item => item.user_id)
        const newTodo = {
            todo: this.state.newTodo,
            completed: false,
            user_id: userId
        }
        await postTodos(newTodo)
        await getTodos()
    }
    render() { 
        return ( 
            <>
            <section className="todo-section">
                <h1 id="todo-title">Todo List:</h1>
                {this.state.todo.map((item) => (
                    <div className="checkbox">
                      
                        <input key={item.id}
                        value={item.id}
                        onChange={() => this.handleCheckbox(item)}
                        type="checkbox"/>
                        <label key={item.todo}>{item.todo}</label>
                        <label key={item.id + 10}> {item.completed ? 'TRUE' : 'FALSE'}</label>
                    </div>
                ))}
            </section>
            <section>
                <div className="todo-input">
                    <h1>Enter New Todo:</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                        onChange={(e) => this.setState({newTodo: e.target.value})}
                        type="text" required/>
                        <button>Submit</button>
                    </form>
                </div>
            </section>
            </>
         );
    }
}
 
export default Todos;