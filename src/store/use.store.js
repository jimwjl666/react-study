import { makeAutoObservable, runInAction } from 'mobx'
class userStore {
  name = 'wjl'
  constructor() {
    makeAutoObservable(this)
  }
  setUserName = async (name) => {
    const res = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(name)
      }, 500)
    })
    runInAction(() => {
      this.name = res
    })
  }
}
export default userStore