import { WordModel } from "../../models/word"
import Word from "./Word"
import { useEffect, useState } from "react"
import { checkForMatch, filterAllWords, reduceWordList, shuffle, makeDescriptionString } from "../functions/functions"
import DisplayLinks from "./DisplayLinks";


function WordGrid(props: {data: WordModel[]; setData: (newValue: WordModel[]) => void; newGame: boolean; setNewGame: (newValue: boolean) => void;  completedSet : string[]; setCompletedSet: (newValue: string[]) => void;  }){
    const { data, completedSet, setCompletedSet } = props
    const initialWords = shuffle(data)
    const [allWords, setAllWords] = useState(initialWords)
    const initialArr: string[] = []
    const [selectedArr, setSelectedArr] = useState(initialArr)
    const [startAgain, setStartAgain] = useState(false)

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
            <div className="mx-16 bg-yellow rounded-md text-center grid gap-4 h-fit">
            <div className="grid grid-cols-4 gap-4">
            {allWords.map((item, index) => 
                <Word key={index} name={item.name}
                selectedArr={selectedArr} setSelectedArr={setSelectedArr} startAgain={startAgain}
                stop={setStartAgain}/>)}
                </div>
                <DisplayLinks completedSet={completedSet}/>
            </div>
            <button onClick={handleSubmit}>
                SUBMIT
            </button>
        </>
        )
}

export default WordGrid

