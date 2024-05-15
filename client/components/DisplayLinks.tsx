function DisplayLinks(props : {completedSet : string[]}){
    const {completedSet} = props
    return <div className="grid grid-cols-1 gap-4">{completedSet.map((item, index) => <p key={index}>{item}</p>)}</div>
}

export default DisplayLinks