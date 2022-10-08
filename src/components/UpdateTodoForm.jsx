import {React, useState} from 'react'
import {useDispatch} from 'react-redux'
import {updateTodo} from '../store/todoSlice';

const UpdateTodoForm = ({choosenTodo, visibleUpdate, setVisibleUpdate}) => {
  const dispatch = useDispatch();
  const [formUpdate, setFormUpdate] = useState({
    title: '',
    description: ''
  });
  const [visibleNotification , setVisibleNotification] = useState(false);

  function changeTodo(e) {
    e.preventDefault();

    const updatedTodo = {
      id: choosenTodo.id,
      title: formUpdate.title,
      description: formUpdate.description,
      time: choosenTodo.time,
      done: choosenTodo.done,
    }

    if (formUpdate.title === '') {
      setVisibleNotification(true);
      setTimeout(() => {
        setVisibleNotification(false);
      }, 1500)
    }

    if (updatedTodo.description === '') {
      updatedTodo.description = choosenTodo.description
    }

    if (formUpdate.title !== '') {
      dispatch(updateTodo(updatedTodo))
      setFormUpdate({title: '', description: ''})
      setVisibleUpdate(false)
    };
  }

  return !visibleUpdate ? null : (
    <div className='form_modal' onClick={() => setVisibleUpdate(false)}>
      <form className='todo_form container' onClick={(e) => e.stopPropagation()}>
        <div className='form_title'>
          <h2>Change your todo</h2>
          <img
            onClick={() => setVisibleUpdate(false)}
            src='/images/delete.svg'
          />
        </div>
        <div className='todo_form_title'>
          <label>Title</label>
          <div>
            <input
              value={formUpdate.title}
              onChange={(e) => setFormUpdate({...formUpdate, title: e.target.value})}
              type="text"
              placeholder={choosenTodo.title}
            />
            <img
              onClick={() => setFormUpdate({title: ''})}
              src='/images/delete.svg'
            />
          </div>
        </div>
        <div className='todo_form_description'>
          <label>Description</label>
          <div>
            <textarea
              value={formUpdate.description}
              onChange={(e) => setFormUpdate({...formUpdate, description: e.target.value})}
              type="text"
              placeholder={choosenTodo.description}
            />
            <img
              onClick={() => setFormUpdate({description: ''})}
              src='/images/delete.svg'
            />
          </div>
        </div>
        <div className='todo_form_btn'>
          <button onClick={changeTodo}>
            <img src='/images/checkmark.svg'/>
          </button>
        </div>
      </form>
      {visibleNotification
        ? <div className='notification' onClick={(e) => e.stopPropagation()}>
            <img src='/images/delete-red.svg'/>
            <span>Please enter the title</span>
          </div>
        : null
      }
    </div>
  )
}

export default UpdateTodoForm