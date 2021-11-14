import {atom} from 'recoil'
import {TodoListItemType} from '../../Todo/TodoListItem'

export const todoListState = atom<TodoListItemType[]>({
  key: 'todoListState',
  default: []
})

export const todoListFilterState = atom<'all'|'complete'|'uncomplete'>({
  key: 'todoListFilterState',
  default: 'all'
})
