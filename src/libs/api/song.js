import request from '../httpUtils'

export function getSongs () {
  return request.get('/top/song?type=7', {})
}
