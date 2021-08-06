import { Link, useRouteMatch, Switch, Route, useParams } from 'react-router-dom'
import Sidebar from '../Sidebar';
import Dashbord from '../Dashbord';
export default function Contents() {
  const { path, url } = useRouteMatch();
  console.log(path, url)
  return (
    <div className='content'>
      <Sidebar>
        <ul>
          <li>
            <Link to={`${url}/rendering`}>Rendering with React</Link>
          </li>
          <li>
            <Link to={`${url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul>
      </Sidebar>
      <Dashbord>
        <Switch>
          <Route exact path={path}>
            <h3>Please select a topic.</h3>
          </Route>
          <Route path={`${path}/:id`}>
            <Content />
          </Route>
        </Switch>
      </Dashbord>
    </div>
  );
}
function Content() {
  const { id } = useParams()
  return (
    <div>
      {id}
    </div>
  )
}
