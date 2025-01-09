import httpService from '../utils/http'

export const login = (data) => {
  return httpService.post('/auth/email/login', data)
}

export const uplaodFile = (data) => {
  return httpService.upload('/files/upload', data)
}