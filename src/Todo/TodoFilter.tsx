import React from 'react'
import {useRecoilState} from 'recoil'
import {todoListFilterState} from '../recoil/atom/todo'

export function TodoFilter() {

  const [filterd, setFilterd] = useRecoilState(todoListFilterState)

  const handleChangeFilte = (e: React.SyntheticEvent<HTMLSelectElement>) => {
    const {value} = e.currentTarget
    setFilterd(value as any)

  }

  return (
    <select value={filterd} onChange={handleChangeFilte}>
      <option value='all'>all</option>
      <option value='complete'>complete</option>
      <option value='uncomplete'>uncomplete</option>
    </select>

  )
}
