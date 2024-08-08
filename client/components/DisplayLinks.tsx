import React from 'react'
interface DisplayLinksProps {
  completedSet: string[]
}

const DisplayLinks: React.FC<DisplayLinksProps> = ({ completedSet }) => {
    return (
        <div className="grid grid-cols-1 gap-4 w-full text-center">
            {completedSet.map((item) => 
            <div className="bg-white text-black py-2 px-4 rounded" key={item}>
                <p>{item}</p>
            </div>)}
        </div>
    )
  }


export default DisplayLinks