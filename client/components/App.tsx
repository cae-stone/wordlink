import { WordModel } from "../../models/word";
import { useWords } from "../hooks/useWords";
import DisplayLinks from "./DisplayLinks";
import WordGrid from "./WordGrid";
import { useEffect, useState } from 'react'


function App(){
    const { data, isLoading, isError, refetch } = useWords()
    const [newGame, setNewGame] = useState(false)
    const [wordInfo, setWordInfo] = useState<WordModel[]>([])
    const [completedSet, setCompletedSet] = useState<string[]>([])

    useEffect(() => {
        if(data){
          setWordInfo(data)
        }
      }, [data, wordInfo]);

    function handleRefetch(){
        refetch()
        setNewGame(false)
        setCompletedSet([])
    }
    
    if (isLoading) {
        return <div className="flex flex-col items-center justify-center"><div className="h-12 w-12 m-4 animate-spin rounded-full border-4 border-solid text-indiblue-300 border-current border-e-transparent align-[-0.125em]"
        role="status"></div><p>Loading ...</p></div>;
      }
    
    if (isError) {
        return <div className="flex flex-col items-center justify-center">An error occurred. Please try again later.</div>;
    } 
    
    if(data){
        if(newGame){
            return (<>
            <div className="flex justify-center"><p className="text-2xl font-bold my-6 py-2">{completedSet.length == 4 ? "Well Done!" : "You are out of guesses..." }</p></div>
            <div className="flex justify-center mx-16">
             <DisplayLinks completedSet={completedSet} />
             </div>
             <div className="flex justify-center">
            <button className="bg-slate-800 ease-in-out duration-150 text-white my-6 py-2 px-4 rounded font-bold hover:bg-slate-950" onClick={() => handleRefetch()}>Play Again</button>
            </div>
            </>)}
        return(<>
            <WordGrid data={wordInfo} setData={setWordInfo} newGame={newGame} setNewGame={setNewGame} completedSet={completedSet} setCompletedSet={setCompletedSet}/>
        </>)
    }

}

export default App



