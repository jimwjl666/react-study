import React, { useState } from 'react';
export default function HookPage(props) {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>useState</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>点我</button>
    </div>
  )
}