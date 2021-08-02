import { useSelector,useDispatch } from 'react-redux'
import { useState } from 'react'
import {Redirect} from "react-router-dom";
export default function LoginPage(props){
  console.log('props:',props)
  const [name,setName] = useState('w')
  const user = useSelector((state)=>state.user)
  console.log('user',user)
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
        <button onClick={()=>{dispatch({type:'LOGIN_SUCCESS',payload:{id:1,name:'wjl'}})}}>点我</button>
    </div>
  )
}