import request from '../utils/request';

export function getUser() {
  return request('/api/users' );
}
