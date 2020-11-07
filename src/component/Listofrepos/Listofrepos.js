import React from 'react';
import {Link} from 'react-router-dom'
import './Listofrepos.css'




const listofrepos = (props) => {


    const { details, reponamehandler } = props
    return <div className="infodiv">
        <div className="userinfo">
            <img alt="random" src={details[0].owner.avatar_url} />
            <div>
                <p>{details[0].owner.login}</p>
                <p>{details[0].owner.url}</p>
            </div>
        </div>
        <div className="listofrepos">

            {details.map((data, index) => {
                return <div key={index}>
                    <img alt={index} src={data.owner.avatar_url} />
                    <div>
                        <p onClick={() => reponamehandler(data.name) } ><Link to='/repoinfo'>{data.name}</Link></p>
                        <p>{data.description === null ? "None" : data.description}</p>
                    </div>
                </div>
            })}
        </div>
    </div>


}

export default listofrepos