import { WordModel } from "../../models/word"

function Word(props : {data: WordModel}){
    const {data} = props
    return(<><button>{data.name}</button></>)

}

export default Word