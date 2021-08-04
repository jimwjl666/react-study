import {getUser} from '../services/example'
export default {

  namespace: 'example',

  state: {
    data:[{
      id:1,
      text:1
    },
    {
      id:2,
      text:2
    },
  ]
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  /* 数据异步请求，可以处理多个action */
  effects: {
    *getUsers({ payload },{call,put}){
      const res = yield call(getUser,payload)
      console.log(res)
      yield put({type:'query',payload:res.data})
    }
  },

  reducers: {
    del(state, {payload:id}) {
      console.log(id)
      return {...state,data:state.data.filter(item=>item.id!==id)}
    },
    query(state,{ payload }){
      console.log('payload',payload)
      return {...state,user:payload.data}
    }
  },

};
