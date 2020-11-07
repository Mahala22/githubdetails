import React from 'react'
import Modal from '../Modal/Modal'
import './Repodetail.css'



const Repodetail = (props) => {

    const { reponame, followerhandler, showmodal, followers, setShowmodal, fetchdetails } = props
    return Object.keys(reponame).length === 0 ? null :
        <div>
            <Modal 
                showmodal={showmodal}
                followers={followers}
                setShowmodal={setShowmodal}
                fetchdetails={fetchdetails}
            />
            <div className='repodetail'>
                <div>
                    <img alt="random" src={reponame.owner.avatar_url} />
                    <p onClick={() => followerhandler(true, reponame.owner.followers_url)}>Followers</p>
                </div>
                <div>
                    <p>{reponame.name}</p>
                    <p>{reponame.description === null ? "No description available" : reponame.description}</p>
                </div>
            </div>
        </div>

}

export default Repodetail