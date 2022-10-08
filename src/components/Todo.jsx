import React from 'react'
import {useDispatch} from 'react-redux'
import {removeTodo, completeTodo} from '../store/todoSlice'

const Todo = ({todo, choose, setVisibleNotification}) => {
  const dispatch = useDispatch();

  function removeTask(e, todo) {
    e.stopPropagation()
    dispatch(removeTodo(todo))
    setVisibleNotification(true);
    setTimeout(() => {
      setVisibleNotification(false);
    }, 1500)
  }

  function completeTask(e, todo) {
    e.stopPropagation()
    dispatch(completeTodo(todo))
  }

  return (
    <div value={todo} className="todo" onClick={() => choose(todo)}>
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
          onClick={(e) => removeTask(e, todo)}
        />
        <div 
          className='todo_completion'
          onClick={(e) => completeTask(e, todo)}
        >
          {todo.done && <img src='/images/checkmark.svg'/>}
        </div>
      </div>
    </div>
  )
}

export default Todo;