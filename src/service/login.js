const LoginService = {
  login(userInfo) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userInfo.name === 'wjl') {
          resolve({ id: 1, name: 'wjl' });
        } else {
          reject({ err: { msg: '用户名或者密码错误' } });
        }
      }, 1000);
    });
  },
  getMoreUserInfo(userInfo) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userInfo.id === 1) {
          resolve({ ...userInfo, sex: '男' });
        } else {
          reject({ msg: '获取详情数据失败' });
        }
      }, 1000);
    });
  },

};
export default LoginService;
