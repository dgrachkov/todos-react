import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../store/todoSlice'
import uuid from 'react-uuid';

const TodoForm = ({visible, setVisible, time}) => {
  const dispatch = useDispatch();

  const [quizForm, setQuizForm] = useState({
    title: '',
    description: ''
  });

  function createTodo(e) {
    e.preventDefault();
    const newTodo = {
      id: uuid(),
      time: time,
      title: quizForm.title,
      description: quizForm.description,
      done: false,
    }
    if (quizForm.title !== '') {
      setVisible(false);
      dispatch(addTodo(newTodo));
      setQuizForm({title: '', description: ''})
    };
  }

  return !visible ? null : (
    <div className='form_modal' onClick={() => setVisible(false)}>
      <form className='todo_form container' onClick={(e) => e.stopPropagation()}>
        <div className='form_title'>
          <h2>Do your todo</h2>
          <img
            onClick={() => setVisible(false)}
            src='/images/delete.svg'
          />
        </div>
        <div className='todo_form_title'>
          <label>Title</label>
          <div>
            <input
              type="text"
              value={quizForm.title}
              onChange={(e) => setQuizForm({...quizForm, title: e.target.value})}
              placeholder='Enter a title'
            />
            <img
              onClick={() => setQuizForm({title: ''})}
              src='/images/delete.svg'
            />
          </div>
        </div>
        <div className='todo_form_description'>
          <label>Description</label>
          <div>
            <textarea
              type="text"
              value={quizForm.description}
              onChange={(e) => setQuizForm({...quizForm, description: e.target.value})}
              placeholder='Enter a description'
            />
            <img
              onClick={() => setQuizForm({description: ''})}
              src='/images/delete.svg'
            />
          </div>
        </div>
        <div className='todo_form_btn'>
          <button 
            onClick={createTodo}
          >
            <img src='/images/checkmark.svg'/>
          </button>
        </div>
      </form>
    </div>
  )
}

export default TodoForm