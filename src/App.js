import Githubuserinfo from './container/Githubuserifno/Githubuserinfo'
import Repodetail from './component/Repodetail/Repodetail'
import axios from 'axios'
import { useState } from 'react'
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom'

const App = () => {

  const [details, setDetails] = useState([]);
  const [reponame, setReponame] = useState({})
  const [showmodal, setShowmodal] = useState(false)
  const [followers, setFollowers] = useState([])
  const [username, setUsername] = useState("")


  const followerhandler = (fallacy, url) => {

    setShowmodal(fallacy)
    axios.get(url)
      .then(response => {
        setFollowers([...response.data])
      })
      .catch(err => {
        setFollowers([])
        console.log("sorry no repository found")
      })


  }
  const reponamehandler = (name) => {
    setReponame(details.find(val => val.name === name))
  }
  const setname = (e) => {
    setUsername(e.target.value)
  }
  const fetchdetails = (name) => {

    axios.get("https://api.github.com/users/" + name + "/repos")
      .then(response => {
        setDetails([...response.data])
        console.log(name)
      })
      .catch(err => {
        setDetails([])
        console.log("sorry no repository found")
      })

  }


  return (

    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/repoinfo/">
            <Repodetail
              reponame={reponame}
              showmodal={showmodal}
              followers={followers}
              followerhandler={followerhandler}
              setShowmodal={setShowmodal}
              fetchdetails={fetchdetails}
            />
          </Route>
          <Route path="/">
            <Githubuserinfo details={details}
              reponame={reponame}
              setDetails={setDetails}
              setReponame={setReponame}
              fetchdetails={fetchdetails}
              reponamehandler={reponamehandler}
              setname={setname}
              username={username}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>

  );
}

export default App;
