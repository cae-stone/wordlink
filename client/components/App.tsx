import { WordModel } from "../../models/word";
import { useWords } from "../hooks/useWords";
import WordGrid from "./WordGrid";
import { useEffect, useState } from 'react'


function App(){
    const { data, isLoading, isError, refetch } = useWords()
    const [newGame, setNewGame] = useState(false)
    const dummyWordInfo : WordModel[] = [{name: 'test1', desc: 'test1'}, {name: 'test2', desc: 'test2'}]
    const [wordInfo, setWordInfo] = useState(dummyWordInfo)

    useEffect(() => {
        if(data){
          setWordInfo(data)
        }
      }, [data, wordInfo]);

    function handleRefetch(){
        refetch()
        setNewGame(false)
    }
    
    if (isLoading) {
        return <div>Loading...</div>;
      }
    
    if (isError) {
        return <div>An error occurred. Please try again later.</div>;
    } 
    
    if(data){
        if(newGame){
            return (<>
            <button onClick={() => handleRefetch()}>Play Again</button>
            </>)}
        return(<>
            <WordGrid data={wordInfo} setData={setWordInfo} newGame={newGame} setNewGame={setNewGame}/>
        </>)
    }

}

export default App



