import React, { Component } from 'react';
import { getTodos } from './fetch-utils.js';

class Todos extends Component {
    state = { todo: [] }
    componentDidMount = async() => {
        const data = await getTodos()
        this.setState({todo: data})
    }
    render() { 
        console.log(this.state.todo)
        return ( 
            <>
            <section>
                <h1>Todo List</h1>
                {this.state.todo.map((item) => (
                    <h1 key={item.id}>{item.todo}</h1>
                ))}
            </section>
            </>
         );
    }
}
 
export default Todos;