import './App.css';

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from "react-router-dom";
import Contents from './components/Contents';
import Dashbord from './components/Dashbord';
function App() {

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <ul className="app-header-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/topics">Topics</Link></li>
          </ul>
        </header>
        <Switch>
          <Route exact path="/">
            <Dashbord>
              我是home
            </Dashbord>
          </Route>
          <Route path="/topics">
            <Contents />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
