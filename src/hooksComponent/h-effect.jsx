import React, { useState, useEffect } from 'react';
import useClock from './h-auto';
/*
 副作用：
 获取数据
 设置订阅、定时器
 手动更改React中的DOM
*/
export default function EHookPage() {
  const [count, setCount] = useState(0);
  const [dcount, setDCount] = useState(0);
  useEffect(() => {
    document.title = `${count}`;
    const timer = setTimeout(() => {
      setDCount(count * 2);
    }, 0);
    return () => clearTimeout(timer); // 此处清除定时器、事件等
  }, [count]);
  return (
    <div>
      <h3>EffectHook</h3>
      <p>{count}</p>
      <p>{dcount}</p>
      <p>{useClock().toLocaleTimeString()}</p>
      <button onClick={() => setCount(count + 1)}>EHookPage</button>
    </div>
  );
}
