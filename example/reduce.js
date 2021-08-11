
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
  console.log("f1", arg);
  return arg+1;
}
function f2(arg) {
  console.log("f2", arg);
  return arg+2; 
}
function f3(arg) {
  console.log("f3", arg);
  return arg+3;
}
function compose(...funcs){
  return funcs.reduce((a,b)=>(...args)=>a(b(...args)))
}
console.log(compose(f1,f2,f3)('0mg'))
