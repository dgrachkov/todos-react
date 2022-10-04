import React from 'react'
import {useDispatch} from 'react-redux'
import {removeTodo, completeTodo} from '../store/todoSlice'

const Todo = ({todo, setVisibleNotification}) => {
  const dispatch = useDispatch();

  function removeTask(todo) {
    dispatch(removeTodo(todo))
    setVisibleNotification(true);
    setTimeout(() => {
      setVisibleNotification(false);
    }, 1500)
  }

  function completeTask(todo) {
    dispatch(completeTodo(todo))
  }

  return (
    <div
      value={todo}
      className="todo" 
    >
      <div className='todo_info'>
        <div className='todo_time'>
          {todo.time}
        </div>
        <h3 className='todo_title'>
          {todo.title}
        </h3>
        <h4 className='todo_description'>
          {todo.description}
        </h4>
      </div>
      <div className='todo_control'>
        <img
          className='todo_delete'
          src='/images/delete.svg'
          onClick={() => removeTask(todo)}
        />
        <div 
          className='todo_completion'
          onClick={() => completeTask(todo)}
        >
          {todo.done && <img src='/images/checkmark.svg'/>}
        </div>
      </div>
    </div>
  )
}

export default Todo;