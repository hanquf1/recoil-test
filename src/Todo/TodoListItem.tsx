import React from 'react'
import {useRecoilState} from 'recoil'
import {todoListState} from '../recoil/atom/todo'

interface TodoListItemProps {
  todo: TodoListItemType
}

export type TodoListItemType = {
  todoId: number
  todoCtn: string
  isComplete: boolean
}

const {useState} = React

export const TodoListItem = (props: TodoListItemProps) => {
  const [todoList, setTodoList] = useRecoilState(todoListState)
  const [editMode, setEditMode] = useState(false)

  const {todo} = props

  const handleTodoCmpl = () => {
    const copyTodoList = JSON.parse(JSON.stringify(todoList)) as TodoListItemType[]
    let editTodo = copyTodoList.find(item => item.todoId === todo.todoId) || {} as TodoListItemType
    if (editTodo) {
      editTodo.isComplete = !editTodo.isComplete
    }
    setTodoList(copyTodoList)
  }

  const handleTodoEditMode = () => {
    setEditMode(!editMode)
  }

  const handleChangeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const copyTodoList = JSON.parse(JSON.stringify(todoList)) as TodoListItemType[]
    let editTodo = copyTodoList.find(item => item.todoId === todo.todoId) || {} as TodoListItemType
    if (editTodo) {
      editTodo.todoCtn = e.currentTarget.value
    }

    setTodoList(copyTodoList)
  }
  const handleTodoRemove = (todoId: number) => {
    setTodoList(todoList.filter(item => item.todoId !== todoId))
  }

  const viewModeRender = (
    <span>
      <span className={todo.isComplete ? 'complete' : ''}>{todo.todoCtn}</span>
      <button onClick={() => handleTodoRemove(todo.todoId)}>삭제</button>
      <button onClick={handleTodoEditMode}>수정</button>
    </span>
  )

  const editModeRender = (
    <span>
      <input type="text" value={todo.todoCtn} onChange={handleChangeTodo}/>
      <button onClick={handleTodoEditMode}>수정</button>
    </span>
  )

  return (
    <div className="todo-list-item">
      <input onChange={handleTodoCmpl} type="checkbox" checked={todo.isComplete}/>
      {
        !editMode
          ? viewModeRender
          : editModeRender
      }
    </div>
  )
}
