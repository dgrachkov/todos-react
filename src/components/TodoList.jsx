import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import Todo from './Todo'

const TodoList = ({setVisibleNotification}) => {
  const todos = useSelector(state => state.todos.todos);

  return (
    <div className='todo_list'>
      {todos.map((todo) => 
        <Todo 
          setVisibleNotification={setVisibleNotification}
          todo={todo}
          key={todo.id}
        />
      )}
    </div>
  )
}

export default TodoList