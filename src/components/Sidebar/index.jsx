import './index.css'
export default function Sidebar(props) {
  return (
    <div className='side-bar'>
      {props.children}
    </div>
  )
}