import { useHistory, useParams, useLocation } from "react-router-dom";
export default function UserHistory() {
  const history = useHistory() // history.push | history.replace
  const location = useLocation()
  console.log('location:', location)
  const { pathname } = location
  const { id } = useParams();
  return (
    <>
      <h1>useHistory</h1>
      <div>我是所传参数：{id}</div>
      <div>我是pathname: {pathname}</div>
      <button onClick={() => history.replace('/')}>返回首页</button>
    </>
  )
}