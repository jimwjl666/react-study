import LoginService from '../service/login'
export function login(userInfo){
    return async function(dispatch){
        dispatch({type:'REQUEST'})
        let partUserInfo = await LoginService.login(userInfo).catch(e=>{
            dispatch({type:'LOGIN_FAILURE',payload:e})
        })
        if(!partUserInfo) return
        let allUserInfo = await LoginService.getMoreUserInfo(partUserInfo).catch(e=>{
            dispatch({type: "LOGIN_FAILURE", payload: e});
        })
        dispatch({type: 'LOGIN_SUCCESS', payload: allUserInfo});
        return allUserInfo
    }
}