import React from 'react'
import {TodoList} from './TodoList'
import './TodoList.scss'
import {useRecoilValue} from 'recoil'
import {todoListCount} from '../recoil/selector/todo'
import {TodoCreate} from './TodoCreate'
import {TodoFilter} from './TodoFilter'

export const TodoListPage = () => {

  const todoList = useRecoilValue(todoListCount)

  return (
    <div>
      todoListCnt: {todoList}
      <TodoFilter/>
      <TodoCreate/>
      <TodoList/>
    </div>
  )
}
