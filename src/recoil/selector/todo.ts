import {selector} from 'recoil'
import {todoListFilterState, todoListState} from '../atom/todo'
import {TodoListItemType} from '../../Todo/TodoListItem'

export const todoListCount = selector<number>({
  key: 'todoListCount',
  get: ({get}) => {
    const todoList = get(todoListState)
    return todoList.length
  },
})

export const todoListFilteredState = selector<TodoListItemType[]>({
  key: 'todoListFilteredState',
  get: ({get}) => {
    const filter = get(todoListFilterState)
    const list = get(todoListState)

    switch (filter) {
      case 'complete':
        return list.filter((item) => item.isComplete);
      case 'uncomplete':
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  }
})
