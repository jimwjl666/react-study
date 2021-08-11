
/* 
  // 基本reduce操作
  const arr = [2,3]
  arr.reduce((pre,cur,curIndex)=>{
    console.log(pre,cur);
    return pre+cur
  },1)
 */
// reduce实现函数聚合,将最内层函数执行结果传递给最外层
  
function f1(arg) {
  return (argOut)=>(disArg)=>{
    
    return  disArg+ argOut('disf2') +' arg1 '
  }
}
function f2(arg) {
  return (argOut)=>(disArg)=>{
    return disArg + argOut('disf3')+' arg2 '
  } 
}
function f3(arg) {
  return (argOut)=>(disArg)=>{
    // console.log(argOut) // omg
    return disArg + ' arg3 '
  } 
}
const chain = [f1,f2,f3].map((mid)=>mid('传入arg'))
// console.log(chain)
function compose(...funcs){
  return funcs.reduce((a,b)=>(...args)=>a(b(...args)))
}
const dispatch = compose(...chain)('0mg')
console.log(dispatch('last '))

/* 
function test(){
  return (name)=>(age)=>{
    return {name,age}
  }
}
let enhancer = test()
console.log(enhancer('zs')('ls')) 

*/
