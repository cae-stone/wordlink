import request from 'superagent'
import { WordModel } from '../../models/word'

const rootUrl = '/api/v1'

export function getWords(): Promise<WordModel[]> {
  return request.get(rootUrl).then((res) => {
    return res.body
  })
}