import React, { useState } from 'react'
import Listofrepos from '../../component/Listofrepos/Listofrepos'
// import Repodetail from '../../component/Repodetail/Repodetail'
import './Githubuserinfo.css'



const Githubuserinfo = (props) => {

    const { details, reponamehandler, setname, fetchdetails, username } = props



    return <div>
        <div className="githubuserinfo">
            <input onChange={e => setname(e)} placeholder="user name" />
            <button onClick={() => fetchdetails(username)}>Repos</button>
        </div>
        {details.length === 0 ? null :
            <Listofrepos reponamehandler={reponamehandler} details={details} />
        }
        {/* {Object.keys(reponame).length === 0 ? null : <Repodetail reponame={reponame} />} */}
    </div>

}



export default Githubuserinfo