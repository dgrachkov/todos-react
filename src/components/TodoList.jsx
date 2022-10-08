import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import Todo from './Todo'
import UpdateTodoForm from './UpdateTodoForm';

const TodoList = ({setVisibleNotification}) => {
  const todos = useSelector(state => state.todos.todos);
  const [visibleFormUpdate, setVisibleFormUpdate] = useState(false);
  const [choosenTodo, setChoosenTodo] = useState({});

  function chooseTodo(todo) {
    setChoosenTodo(todo)
    setVisibleFormUpdate(true)
  }

  return (
    <div className='todo_list'>
      <UpdateTodoForm
        choosenTodo={choosenTodo}
        visibleUpdate={visibleFormUpdate}
        setVisibleUpdate={setVisibleFormUpdate}
      />
      {todos.length !== 0
        ? todos.map((todo) => 
            <Todo
              choose={chooseTodo}
              setVisibleUpdate={setVisibleFormUpdate}
              setVisibleNotification={setVisibleNotification}
              todo={todo}
              key={todo.id}
            />
          )
        : <div className='todo_list_empty'>Your todo list is empty...</div>
      }
    </div>
  )
}

export default TodoList