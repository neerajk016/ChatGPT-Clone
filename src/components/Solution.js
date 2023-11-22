import React from 'react'

export default function solution({dostuff,setinput,result}) {
  return (
    <div>
        <textarea className="text-area" cols={55} rows={10} onChange={(e)=>setinput(e.target.value)} >  </textarea>
        <button className="action-btn" onClick={dostuff}>GET </button>
        <h3 className="result-text">{result.length > 0 ? result : ""}</h3>
      
    </div>
  )
}
