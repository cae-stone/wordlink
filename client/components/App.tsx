import { useWords } from "../hooks/useWords";
import WordGrid from "./WordGrid";

function App(){

    const { data, isLoading, isError, refetch } = useWords();

    if (isLoading) {
        return <div>Loading...</div>;
      }
    
      if (isError) {
        return <div>An error occurred. Please try again later.</div>;
      }
      
    
    if(data){
        return(<>
       <WordGrid data={data}/>
        </>)

    }

}

export default App

// App component handles all game states - including game end, replay / refetch data, current game word grid
// Word Grid component contains logic for current game, using four word sets from most recent request
// Word component displays individual words