import React, {useState} from 'react'
import {useRecoilState} from 'recoil'
import {todoListState} from '../recoil/atom/todo'
import {TodoListItemType} from './TodoListItem'

export const TodoCreate = () => {

  const [todoList, setTodoList] = useRecoilState(todoListState)
  const [isCreateMode, setCreateMode] = useState(false)

  const init = {
    todoId: 0,
    todoCtn: '',
    isComplete: false
  } as TodoListItemType

  const [newTodo, setNewTodo] = useState<TodoListItemType>(init)

  const handleCreatMode = () => {
    setCreateMode(!isCreateMode)
  }

  const handleSaveTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const todoId = todoList.length > 0 ?todoList[todoList.length-1].todoId+1 : 1
    setTodoList(todoList.concat({...newTodo, todoId}))
    setNewTodo(init)
    handleCreatMode()
  }

  const handleChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const {value} = e.currentTarget
    setNewTodo({...newTodo, todoCtn: value})
  }

  return (
    <div>
      <button onClick={handleCreatMode} disabled={isCreateMode}>+</button>
      {
        isCreateMode && (
          <form onSubmit={handleSaveTodo}>
            <input name='todoCtn' value={newTodo.todoCtn} onChange={handleChange} type="text"/>
            <button type='submit'>추가</button>
          </form>
        )
      }
    </div>
  )
}
