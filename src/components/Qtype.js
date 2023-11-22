import React from 'react'

export default function Qtype({arrayItems,selectoption}) {
  return (
    <div>
        {arrayItems.map((item)=>{
          return(<div onClick={()=>selectoption(item.option)}>
            <h4>{item.name}</h4>
            <p>{item.description}</p>
          </div>)
        })}
    </div>
  )
}
