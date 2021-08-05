import './App.css';
import HookPage from './hooksComponent/h-useState'
import EHookPage from './hooksComponent/h-effect';
import UseMemoPage from './hooksComponent/h-useMemo';
import UserReducerPage from './hooksComponent/h-useReducer'
import UseContextFather from './hooksComponent/h-useContext'
import UserReactRedux from './hooksComponent/h-useSelector'
import UseRefTimer from './hooksComponent/h-useRef';
import UseHistory from './hooksComponent/h-useHistory';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <nav>
            <ul>
              <li>
                <Link to="/">useState</Link>
              </li>
              <li>
                <Link to="/effect">useEffect</Link>
              </li>
              <li>
                <Link to="/memo">useMemo</Link>
              </li>
              <li>
                <Link to="/reducer">useReducer</Link>
              </li>
              <li>
                <Link to="/context">useContext</Link>
              </li>
              <li>
                <Link to="/reactredux">useReactRedux</Link>
              </li>
              <li>
                <Link to="/ref">useRef</Link>
              </li>
              <li>
                <Link to="/history/123">useHistory</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className='main'>
          <Switch>
            <Route path="/" exact component={HookPage} />
            <Route path="/effect" component={EHookPage} />
            <Route path="/memo" component={UseMemoPage} />
            <Route path="/reducer" component={UserReducerPage} />
            <Route path="/context" component={UseContextFather} />
            <Route path="/selector" component={UserReactRedux} />
            <Route path="/ref" component={UseRefTimer} />
            <Route path="/history/:id" component={UseHistory} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
