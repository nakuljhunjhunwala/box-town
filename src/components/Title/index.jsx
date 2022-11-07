import React from 'react'
import "./Title.css"

function Title({title}) {
  return (
    <div className='titleContainer'>
    <h3 className='title'>
{title}
    </h3>
    </div>
  )
}

export default Title
