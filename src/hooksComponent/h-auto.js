import { useState, useEffect } from 'react';
/* 自定义hook */
export default function useClock(){
  const [date,setDate] = useState(new Date())
  useEffect(()=>{
    const timer = setInterval(()=>{
      setDate(new Date())
    },1000)
    return ()=>clearInterval(timer)
  },[])
  return date
}