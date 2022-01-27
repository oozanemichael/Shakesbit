import request from '@/utils/request'
///存储用户账户信息
export function isWhite() {
  return request({
    url: 'info/isWhite',
    method: 'post',
  })
}