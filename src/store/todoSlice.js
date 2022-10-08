import {createSlice} from '@reduxjs/toolkit';
import uuid from 'react-uuid';

const date = new Date();
const hour = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours();
const minute = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
const timeNow = `${hour}.${minute}`;

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [
      {id: uuid(), title: 'Todo 1', time: timeNow, description: '...', done: false},
      {id: uuid(), title: 'Todo 2', time: timeNow, description: '...', done: false},
    ]
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload)
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
    },
    completeTodo(state, action) {
      const completedTodo = state.todos.find(todo => todo.id === action.payload.id)
      completedTodo.done = !completedTodo.done;
    },
    updateTodo(state, action) {
      const updatedTodo = state.todos.find(todo => todo.id === action.payload.id)
      updatedTodo.title = action.payload.title
      updatedTodo.description = action.payload.description
    }
  }
});

export const {addTodo, removeTodo, completeTodo, updateTodo} = todoSlice.actions;
export default todoSlice.reducer;
