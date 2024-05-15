import { WordModel } from "../../models/word"
import Word from "./Word"

function WordGrid(props : {data: WordModel[]}){
    const {data} = props
    return(<>
    {data.map((item, index) => <Word key={index} data={item}/>)}
    </>)
}

export default WordGrid