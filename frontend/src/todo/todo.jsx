import React, { Component } from 'react'

import PageHeader from '../tamplate/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export class Todo extends Component {
  constructor(props){
    super(props)
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd(){
    console.log(this)
  }
 
  render() {
    return (
      <div>
        <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
        <TodoForm handleAdd={this.handleAdd}/>
        <TodoList/>
      </div>  
    )
  }
}

export default Todo
