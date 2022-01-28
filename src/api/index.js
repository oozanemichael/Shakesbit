import request from '@/utils/request'
///存储用户账户信息
export function isWhite(data) {
  return request({
    url: 'info/isWhite',
    method: 'post',
    data:data
  })
}
