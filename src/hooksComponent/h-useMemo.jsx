import React, {
  useState, useMemo, useCallback, memo,
} from 'react';

function Child(props) {
  const { value, addClick } = props;
  console.log('child render');
  return (
    <div>
      <h4>
        child :
        {' '}
        {value}
      </h4>
      <button onClick={() => addClick()}>Child click</button>
    </div>
  );
}
// eslint-disable-next-line no-func-assign
Child = memo(Child);
export default function UseMemoPage() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('');
  // 有点像计算属性，值可以缓存,只会在count改变的时候计算expensive
  const expensive = useMemo(() => {
    console.log('我是memo');
    let sum = 0;
    sum = count * 3;
    return sum;
  }, [count]);

  const doubleClick = useCallback(() => {
    const sum = 5;
    /*  sum = count * 2 */
    setValue(sum);
  }, []);
  // value改变不会影响sum的重新计算，有点像vue的计算属性。

  return (
    <div style={{ border: '1px solid red' }}>
      <h3>UseMemoPage</h3>
      <div>
        UseMemoPage:
        {count}
      </div>
      <p>
        useMemo:
        {expensive}
      </p>
      <button onClick={() => setCount(count + 1)}>add</button>
      <Child value={value} addClick={doubleClick} />
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
}
