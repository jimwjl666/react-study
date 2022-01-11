import './App.css';
import React, { useState, useEffect } from 'react';
import { Observer } from "mobx-react"
import { useStores } from './store'

export default function App() {
  const { userStore } = useStores();
  /* const { account } = useWallet() */
  /*  console.log(account) */
  const handleNameChange = (e) => {
    e.preventDefault();
    userStore.setUserName(e.target.value)
  }
  console.log(1)
  useEffect(() => {
    const timer = setInterval(() => {
      userStore.setUserName(new Date().getTime())
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  })
  return <Observer>{() => <div>
    <h2>
      {userStore.name}
    </h2>
    <input onChange={handleNameChange} />
  </div>}</Observer>
}

