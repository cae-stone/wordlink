import {
    useQuery
  } from '@tanstack/react-query'

  import { getWords } from '../apis/getWords.ts'
  
  export function useWords() {
    const query = useQuery({ queryKey: ['words'], queryFn: getWords })
    return query
  }
