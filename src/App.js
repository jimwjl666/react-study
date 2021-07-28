import logo from './logo.svg';
import './App.css';
import HookPage from './hooksComponent/h-useState'
import EHookPage from './hooksComponent/h-effect';
import UseMemoPage from './hooksComponent/h-useMemo';
import UserReducerPage from './hooksComponent/h-useReducer'
import UseContextFather from './hooksComponent/h-useContext'
import UserReactRedux from './hooksComponent/h-useSelector'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HookPage />
        <EHookPage />
        <UseMemoPage />
        <UserReducerPage />
        <UseContextFather/>
        <UserReactRedux/>
      </header>
    </div>
  );
}

export default App;
