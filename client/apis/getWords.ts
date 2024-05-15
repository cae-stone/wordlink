import request from 'superagent'

const rootUrl = '/api/v1'

export function getWords(): Promise<string[]> {
  return request.get(rootUrl).then((res) => {
    return res.body
  })
}