import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../tamplate/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export class Todo extends Component {
  constructor(props){
    super(props)
    this.state = { description: '', list: []}

    this.handleChange = this.handleChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleChange(e){
    
    this.setState({...this.state, description: e.target.value})

  }

  refresh(){
    axios.get(`${URL}?sort=-createdAt`)
      .then(resp => this.setState({...this.state, description: '', list: resp.data }))
  }
  handleAdd(){
    const description = this.state.description;
    axios.post(URL, {description})
      .then(resp => refresh())

    console.log('Funcionou!')
    this.setState({...this.state, description: ''})
  }
 
  render() {
    return (
      <div>
        <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
        <TodoForm description={this.state.description}
        handleChange={this.handleChange}
        handleAdd={this.handleAdd}/>
        <TodoList/>
      </div>  
    )
  }
}

export default Todo
