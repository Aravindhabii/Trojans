import React from 'react'
import {Tabletcont} from '../../pages/Events/Events.styles'
// import tab from "../../assets/events/tabletpng.png"
import tab from "../../assets/events/pngtablet.png"
import Tabletcontent from "./Tabletcontent"


const Tablet = ( props) => {
  const {isTabletOpen, setisTabletOpen} = props

  return (
    <Tabletcont tab={tab} >
        <h1>Event Name</h1>
        <Tabletcontent />
    </Tabletcont>
  )
}

export default Tablet