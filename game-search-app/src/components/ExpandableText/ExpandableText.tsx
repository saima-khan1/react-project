import { useState } from "react"
import './ExpandableText.css'


interface Props{
    children:string
}

const ExpandableText = ({children}:Props) => {
    const [expanded, setExpanded]=useState(false);
    const limit=300;
    if(!children) return null;
    if(children.length <= limit)
    return <p>{children}</p>
    const summary=expanded?children :children.substring(0 , limit)+'...'
  return (
    <div>
        <p className="game-description">{summary} 
        <button className="expandable-btn
        " onClick={()=>setExpanded(!expanded)}>{expanded ? 'Show Less' : 'Read More'}</button></p>

    </div>
  )
}

export default ExpandableText