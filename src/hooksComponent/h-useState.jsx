import React, { useState } from 'react';
export default function HookPage(props) {
  const [count, setCount] = useState(0)
  const cb = async () => {
    const res = (await import('./test.json')).default
    console.log('res', res)
  }
  return (
    <div>
      <h1>useState</h1>
      <p>{count}</p>
      <button onClick={cb}>点我</button>
    </div>
  )
}