import React from 'react'
import {useSelector} from 'react-redux'

const AppHeader = ({setVisibleForm}) => {
  const todos = useSelector(state => state.todos.todos);

  const completedTodos = todos.filter(todo => {
    if (todo.done === true) {
      return todo
    }
  });

  return (
    <header className='header'>
      <div className='header_info'>
        <h1 className='app_title'>Todos</h1>
        <h2 className='todos_info'>Number of todos:{todos.length}</h2>
        <h2 className='todos_info'>Completed todos: {completedTodos.length}</h2>
      </div>
      <button 
        className='create_todo_btn'
        onClick={() => setVisibleForm(true)}
      >
        <div></div>
        <img src='/images/add.svg'></img>
      </button>
    </header>
  )
}

export default AppHeader