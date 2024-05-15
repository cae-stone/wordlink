import { WordModel } from "../../models/word"
import Word from "./Word"
import { useEffect, useState } from "react"
import { checkForMatch, filterAllWords, reduceWordList, shuffle, makeDescriptionString } from "../functions/functions"


function WordGrid(props: {data: WordModel[]; setData: (newValue: WordModel[]) => void; newGame: boolean; setNewGame: (newValue: boolean) => void; }){
    const { data } = props
    const initialWords = shuffle(data)
    const [allWords, setAllWords] = useState(initialWords)
    const initialArr: string[] = []
    const [selectedArr, setSelectedArr] = useState(initialArr)
    const [startAgain, setStartAgain] = useState(false)
    const initialSet: string[] = []
    const [completedSet, setCompletedSet] = useState(initialSet)

    useEffect(() => {
        const initialWords = shuffle(data)
        setAllWords(initialWords)
    }, [data])

    function handleSubmit(){
        if(selectedArr.length === 4){
            const found = filterAllWords(allWords, selectedArr)
            if(checkForMatch(found)){
                const newWordList = reduceWordList(allWords, selectedArr)
                setAllWords(newWordList)
                matchDescription(found)
            }
            if(allWords.length <= 4){
                props.setNewGame(true)
            }
            reset()
        }
    }

    function reset(){
        setSelectedArr([])
        setStartAgain(true)
    }

    function matchDescription(found : WordModel[]){
        const setUpdate : string[] = completedSet
        const description : string = makeDescriptionString(found)
        setUpdate.push(description)
        setCompletedSet(setUpdate)
    }


    return (
        <> 
            {allWords.map((item, index) => 
                <Word key={index} name={item.name}
                selectedArr={selectedArr} setSelectedArr={setSelectedArr} startAgain={startAgain}
                stop={setStartAgain}/>)}
            <button onClick={handleSubmit}>
                Submit
            </button>
        </>
        )
}

export default WordGrid

