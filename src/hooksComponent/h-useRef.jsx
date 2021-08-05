import { useEffect, useState, useRef } from "react";

export default function UseRefTimer() {
  let timerRef = useRef({})
  let [num, setNum] = useState(0)

  useEffect(() => {
    const promiseFn = () => {
      return new Promise((resolve) => {
        timerRef.current = setTimeout(() => {
          setNum(num => num + 1)
          resolve(num)
        }, 1000)
      })
    }
    (async function () {
      const res = await promiseFn()
      console.log(res)
    })();
    return () => {
      clearTimeout(timerRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // 传递空数组只调用一次
  return (
    <div>
      <h1>useRef</h1>
      <div>count: {num}</div>
      <button onClick={() => { clearInterval(timerRef.current) }}>清除定时器</button>
    </div>
  )
}