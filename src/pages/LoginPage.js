import { useSelector,useDispatch } from 'react-redux'
import { useState } from 'react'
import {Redirect} from "react-router-dom";
import {login} from '../actions/login'
export default function LoginPage(props){
  console.log('props:',props)
  const [name,setName] = useState('w')
  const user = useSelector(({user})=>user)
  const dispatch = useDispatch()
  const { isLogin,loading,err } = user

  const {from="/"} = props.location?.state || {}
  if(isLogin){
    return <Redirect to={from}/>
  }
  return(
    <div>
        <h3>登录页</h3>
        <input 
          type="text"
          value={name}
          onChange={e=>setName(e.target.value)}
        />
        <button onClick={()=>{dispatch(login({name}))}}>点我{loading?'加载中':''}</button>
        <div>{err.msg}</div>
    </div>
  )
}