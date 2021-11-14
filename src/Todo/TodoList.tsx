import React from 'react'
import {TodoListItem} from './TodoListItem'
import {useRecoilValue} from 'recoil'
import {todoListFilteredState} from '../recoil/selector/todo'

export const TodoList = () => {

  const todoList = useRecoilValue(todoListFilteredState)

  return (
    <div>
      {todoList.map(item => <TodoListItem key={item.todoId} todo={item}/>)}
    </div>
  )
}
