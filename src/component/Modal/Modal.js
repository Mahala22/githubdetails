import React from 'react'
import Backdrop from '../Backdrop/Backdrop'
import { Link } from 'react-router-dom'
import './Modal.css'

const modal = (props) => {


    const { showmodal, followers, setShowmodal, fetchdetails } = props
    return showmodal === true ? <div onClick={ () => { setShowmodal(false)}}>
        <Backdrop showmodal={showmodal} />
        <div className="modal">
            {followers.map((data, index) => {
                return <div key={index}>
                    <img alt={index} src={data.avatar_url} />
                    <div>
                        <p onClick={() => fetchdetails(data.login)}><Link to='/'>{data.login}</Link></p>
                        <p>{data.url}</p>
                    </div>
                </div>
            })}
        </div>
    </div>
        : null
}


export default modal 