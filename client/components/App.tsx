import { useWords } from "../hooks/useWords";

function App(){

    const { data, isLoading, isError, refetch } = useWords();
    
    if(data){
        return(<>
        {data.map((item, index) => <p key={index}>{item.name}</p>)}
        </>)

    }

}

export default App

