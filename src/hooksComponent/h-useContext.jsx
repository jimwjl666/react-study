import React, { createContext, useContext, useReducer } from 'react'
import reducer from './reducer'
const initialState = { number: 0 }

/* 第一步createContext */
const AutoContext = createContext()
/* 第二步 AutoContext.Provider */
function Child() {
  /*  第三步： 子组件  */
  const { state, dispatch } = useContext(AutoContext)
  return (
    <div>
      <h1>useContext</h1>
      {state.number}
      <button onClick={() => { dispatch({ type: 'ADD' }) }}>contextButton</button>
    </div>
  )
}

/* 获取context第二种方式 */
function Child2() {
  return (
    <AutoContext.Consumer>
      {
        value => (
          <div>
            <h1>Consumer</h1>
            <p><span>ConSumer获取</span>{value.state.number}</p>
            <button onClick={() => value.dispatch({ type: 'ADD' })}>Consumer dispatch</button>
          </div>
        )
      }
    </AutoContext.Consumer>
  )
}

export default function UseContextFather() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <AutoContext.Provider value={{ state, dispatch }}>
      <Child />
      <Child2 />
    </AutoContext.Provider>
  )
}
