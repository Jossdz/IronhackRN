import type {Result} from './types'
import axios from 'axios'

const baseURL = 'https://rickandmortyapizz.com/api/character'

axios.get<Result>(baseURL).then(({ data }) => {
  console.log(JSON.stringify(data.results , null, 2))
}).catch((error) => {
  if(axios.isAxiosError(error)){
    console.log("Error " + error.message)
  }
})