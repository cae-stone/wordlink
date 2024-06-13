function DisplayLinks(props : {completedSet : string[]}){
    const {completedSet} = props
    return <div className="grid grid-cols-1 gap-4 w-full text-center mb-4">{completedSet.map((item, index) => <div className="bg-white text-black py-2 px-4 rounded" key={index}><p>{item}</p></div>)}</div>
}

export default DisplayLinks