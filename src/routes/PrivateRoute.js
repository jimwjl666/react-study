import { Redirect,Route } from "react-router-dom";
import { useSelector } from "react-redux"

export default function PrivateRoute({path,component:Component,...rest}){
  const user = useSelector((state)=>state.user)
  const { isLogin } = user
  return(
    <Route
      render = {
        (props)=>isLogin?(<Component {...props}/>)
        :(<Redirect to={{pathname:'/login',state:{from: props.location.pathname}}}/>)
      }
    />
  )
} 