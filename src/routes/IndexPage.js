import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { query } from '../services/example';
@connect(({example})=>({state:example}),{
  del:(payload)=>({type:'example/del',payload}),
  query:()=>({type:'example/getUsers'})
})
class IndexPage extends Component {
  render(){
    const { del,query } = this.props
    console.log('props',this.props)
    return (
      <div className={styles.normal}>
        <h1 className={styles.title}>Yay! Welcome to dva!</h1>
        <div className={styles.welcome} />
        <button onClick={()=>{del(1)}}>点我</button>
        <button onClick={()=>{query()}}>query</button>
      </div>
    );
  }
  
}

export default IndexPage;
