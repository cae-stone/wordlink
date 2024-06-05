import { WordModel } from "../../models/word";
import { useWords } from "../hooks/useWords";
import DisplayLinks from "./DisplayLinks";
import WordGrid from "./WordGrid";
import { useEffect, useState } from 'react'


function App(){
    const { data, isLoading, isError, refetch } = useWords()
    const [newGame, setNewGame] = useState(false)
    const dummyWordInfo : WordModel[] = [{name: 'test1', desc: 'test1'}, {name: 'test2', desc: 'test2'}]
    const [wordInfo, setWordInfo] = useState(dummyWordInfo)
    const initialSet: string[] = []
    const [completedSet, setCompletedSet] = useState(initialSet)

    useEffect(() => {
        if(data){
          setWordInfo(data)
        }
      }, [data, wordInfo]);

    function handleRefetch(){
        refetch()
        setNewGame(false)
        setCompletedSet(initialSet)
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
            <div className="flex justify-center"><p className="text-xl font-bold my-8 py-2">Well Done!</p></div>
            <div className="flex justify-center">
             <DisplayLinks completedSet={completedSet} />
             </div>
             <div className="flex justify-center">
            <button className="bg-indigo-600 text-white my-8 py-2 px-4 rounded font-bold" onClick={() => handleRefetch()}>Play Again</button>
            </div>
            </>)}
        return(<>
            <WordGrid data={wordInfo} setData={setWordInfo} newGame={newGame} setNewGame={setNewGame} completedSet={completedSet} setCompletedSet={setCompletedSet}/>
        </>)
    }

}

export default App



