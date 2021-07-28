export default function reducer2(state = {num:0},action){
  switch(action.type){
    case 'ADD': 
      return {...state, num:state.num+1 };
    default:
      return state
  }
}