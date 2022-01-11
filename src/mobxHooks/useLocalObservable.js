import { observer, useLocalObservable, useLocalStore, useObserver } from "mobx-react"
import { useState, useEffect } from "react"
import { autorun, reaction } from 'mobx'
/* 
函数调用1
const LocalObservable = observer(() => {
  const timer = useLocalObservable(() => ({
    secondsPassed: 0,
    increaseTimer() {
      this.secondsPassed++
    },
    get computedSeconds() {
      return this.secondsPassed + 1
    }
  }))
  console.log(1)
  return <h1 onClick={timer.increaseTimer}>{timer.secondsPassed}{timer.computedSeconds}</h1>
})

*/

const LocalObservable = observer(() => {
  const timer = useLocalObservable(() => ({
    secondsPassed: 0,
    increaseTimer() {
      this.secondsPassed++
    },

    /* get computedSeconds() {
      return this.secondsPassed + 1
    }, */

  }))

  useEffect(() => {
    // 确保 autorun 方法只被初始化一次
    autorun(() => {
      console.log('进来了')
      console.log(timer.secondsPassed)
    })
  }, [])

  useEffect(() => {
    reaction(
      () => {
        return timer.secondsPassed
      },
      (current, previous) => {
        console.log('current', current)
        console.log('previous', previous)
      }
    )
  }, [])


  return <h1 onClick={timer.increaseTimer}>{timer.secondsPassed}</h1>
})

export default LocalObservable;