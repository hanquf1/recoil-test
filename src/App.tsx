import React from 'react'
import {TodoListPage} from './Todo/TodoListPage'
import {RecoilRoot} from 'recoil'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RecoilRoot>
          <TodoListPage/>
        </RecoilRoot>
      </header>
    </div>
  )
}

export default App
