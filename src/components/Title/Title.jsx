import {  Translate } from "react-translated";


import "./Title.css"

export default function Title({title}) {
  return (
    <p className='input-title' >
    <Translate text={title} />
    </p>
  )
}
