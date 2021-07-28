/* 
使用场景：state 逻辑较复杂且包含多个子值
*/
import React, { useReducer } from 'react';
let initialState = { number:100 };
function reducer(state,action){
  switch(action.type){
    case "increment":
      return {number:state.number + action.payload.step}
    case "decrement":
      return {number:state.number -1 }
    default:
      throw new Error()
  }
}
export default function UserReducerPage(){
  const [state,dispatch] = useReducer(reducer,initialState)
  return(
    <div>
      count: {state.number}
      <button onClick={()=>dispatch({type:'increment',payload:{step:2}})}>useReducer Button</button>
    </div>
  )
}