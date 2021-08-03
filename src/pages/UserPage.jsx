import { useSelector } from 'react-redux';

export default function UserPage(props) {
  console.log('props:', props);
  const user = useSelector((state) => state.user);
  const { isLogin, userInfo } = user;
  console.log(user);
  return (
    <div>
      <h3> UserPage </h3>
      <div>
        <span>{ isLogin ? userInfo.name : '请登录' }</span>
      </div>
    </div>
  );
}
