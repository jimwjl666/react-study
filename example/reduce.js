
/* 
  // 基本reduce操作
  const arr = [2,3]
  arr.reduce((pre,cur,curIndex)=>{
    console.log(pre,cur);
    return pre+cur
  },1)
 */
// reduce实现函数聚合,将最内层函数执行结果传递给最外层
  
/* function f1(arg) {
  return (next)=>(action)=>{
    
    return  
  }
} */
function f2(arg) {
  return (next)=>(action)=>{
    console.log(2)
    const data = next(action) // 其实是f3中(action)=>{}
    return data
  } 
}
function f3(arg) {
  return (next)=>(action)=>{
    console.log(3)
    const data = next(action)
    return data
  } 
}
const chain = [f2,f3].map((mid)=>mid('传入arg'))

function compose(...funcs){
  return funcs.reduce((a,b)=>(...args)=>a(b(...args)))
}
const dispatch = compose(...chain)((action)=>1)
console.log(dispatch('action1'))

/* 
function test(){
  return (name)=>(age)=>{
    return {name,age}
  }
}
let enhancer = test()
console.log(enhancer('zs')('ls')) 

*/


/* const connect = (mapStateToProps,mapDispatchToProps)=>{
  return (Warp)=>{
    return (props)=>{

    }
  }
}
connect()(comp) */