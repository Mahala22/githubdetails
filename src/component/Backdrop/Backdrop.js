import React from 'react'
import './Backdrop.css'



const backdrop = (props) => {

    const {showmodal} = props
    return  showmodal === true ? <div className="backdrop"></div> : null



}



export default backdrop