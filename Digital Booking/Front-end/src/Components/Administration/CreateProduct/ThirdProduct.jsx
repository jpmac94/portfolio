import React from 'react'
import BlockPolicity from './BlockPoliticy'

export default function ThirdProduct() {
  return (
    <div className="containerFormClass">
    <h2 className="c h2"> Add Description </h2>
    <div className="containerPolicity">
      <BlockPolicity  titulo = {"House's rules"}/>
      <BlockPolicity  titulo = {"Health and Care"}/>
      <BlockPolicity  titulo = {"Cancellation Policy"}/>
    </div>
      
  </div>
  )
}
