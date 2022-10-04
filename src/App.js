import React, { useState } from 'react'
import './styles.scss'
import './reset.scss'
import AppHeader from './components/AppHeader'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
  const date = new Date();
  const hour = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours();
  const minute = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
  const timeNow = `${hour}.${minute}`;

  const [visibleForm, setVisibleForm] = useState(false);
  const [visibleNotification , setVisibleNotification] = useState(false);
  
  return (
    <div className='app container'>
      <AppHeader
        setVisible={setVisibleForm}
      />
      <main className='main'>
        <TodoForm
          visible={visibleForm}
          setVisible={setVisibleForm}
          time={timeNow}
        />
        <TodoList
          setVisibleNotification={setVisibleNotification}
        />
        {visibleNotification
          ? <div className='notification_deletion'>
              <img src='/images/checkmark-green.svg'/>
              <span>Successfully deleted</span>
            </div>
          : null
        }
      </main>
    </div>
  )
}

export default App
