import { useEffect, useState } from "react"


function Word(props: {name: string; selectedArr: string[]; setSelectedArr: (newValue: string[]) => void; startAgain: boolean; stop: (newValue: boolean) => void; }){
    const [selected, setSelected] = useState(false)
    const selectedArr = props.selectedArr
    const { startAgain, stop } = props
    
    useEffect(() => {
    if (startAgain) {
      setSelected(false)
      stop(false)
    }
  }, [startAgain, stop])

    function handleClick(){
            if(selectedArr.length <= 4 && selected){
                const index = selectedArr.indexOf(props.name)
                selectedArr.splice(index, 1)
                props.setSelectedArr(selectedArr)
                setSelected(!selected)
            } else if (selectedArr.length < 4) {
                selectedArr.push(props.name)
                props.setSelectedArr(selectedArr)
                setSelected(!selected)
            } 
    }

    return <><button className={selected? "bg-slate-900 text-white py-2 px-4 rounded" : "bg-white text-black py-2 px-4 rounded"} onClick={handleClick}>{props.name}</button></>
}

export default Word

