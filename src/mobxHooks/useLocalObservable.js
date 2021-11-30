import { observer, useLocalObservable, useLocalStore, useObserver } from "mobx-react"
import { useState } from "react"
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

const LocalObservable = () => {
  const timer = useLocalStore(() => ({
    secondsPassed: 0,
    * increaseTimer() {
      this.secondsPassed = yield new Promise((resolve) => {
        setTimeout(() => {
          resolve(1000)
        }, 1000);
      })
    },
    get computedSeconds() {
      return this.secondsPassed + 1
    }
  }))
  return useObserver(() => (<h1 onClick={timer.increaseTimer}>{timer.secondsPassed}{timer.computedSeconds}</h1>))
}

export default LocalObservable;