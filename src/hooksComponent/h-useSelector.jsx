import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';
import reducer from './reducer';
import reducer2 from './reducer2';

const rootReducer = combineReducers({
  reducer,
  reducer2,
});
// console.log(rootReducer)

const store = createStore(rootReducer);
console.log(store.getState());
const Child = function () {
  const state = useSelector((state) => state.reducer);
  const { number } = state;
  const dispatch = useDispatch();
  return (
    <div>
      useSelector
      {' '}
      {number}
      <button onClick={() => { dispatch({ type: 'ADD' }); }}>useDisptch</button>
    </div>
  );
};
export default function UserReactRedux() {
  return (
    <div>
      <h2>ComponentUseReactRedux</h2>
      <Provider store={store}>
        <Child />
      </Provider>
    </div>
  );
}
