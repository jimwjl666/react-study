import './index.css'
export default function Dashbord(props) {
  return (
    <div className='dashbord'>
      <h1>dashbord</h1>
      {props.children}
    </div>
  )
}