import { useState, useEffect} from 'react' 
import './App.css'
import Register from './components/Register/Register'
import Logo from './components/Logo/Logo'
import Navigation from './components/Navigation/Navigation'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import Rank from './components/Rank/Rank'
import SignIn from './components/SignIn/SignIn'

function App() {
  const [input, setInput] = useState('')
  const [entries, setEntries] = useState(0)
  const [bounding, setBounding] = useState({})
  const [route, setRoute] = useState('signin')
  const [isActive, setIsActive] = useState(false)
  const [user, setUser] = useState({
                                    name: '',
                                    email: '',
                                    id: '',
                                    entries: 0,
                                    joined: ''
                                })

  
  function loadUser(data) {
    setUser({
      name: data.name,
      email: data.email,
      id: data.id,
      entries: data.entries,
      joined: data.joined
  })
  }

  function changeRoute(route) {
    if (route === 'home') {
      setIsActive(true)
    } else {
      setIsActive(false)
    }

    setRoute(route)
  }

  function sendImageUrl(imageUrl) {
    fetch('http://localhost:3001/image', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: user.id,
              imageUrl: imageUrl,
            })
        })
        .then(res => {
                return res.json()
        }).then(data => {
          if (data) {
            handleResponse(data)
            console.log('bouding do app.jsx', data)
          }
          
      })
  }

  function handleSubmit() {
    const inputUrl = document.getElementById('urlContent').value
    sendImageUrl(inputUrl)
    setInput(inputUrl)
  }

  function handleResponse(response) {
    const ImgWidth = Number(document.getElementById('image').width)
    const ImgHeight = Number(document.getElementById('image').height)
    const {top_row, left_col, right_col, bottom_row} = response
    const PositionInfo = {
      top_row : ImgHeight * top_row,
      left_col: ImgWidth  * left_col,
      bottom_row: ImgHeight  * (bottom_row - 1) * -1,
      right_col: ImgWidth * (right_col - 1) * -1

    } 
    setEntries(Number(entries) + 1)
    setBounding(PositionInfo)
  }

  useEffect(() => {
    if (entries == 0) {
      setEntries(user.entries)
    }
  })

  return (
    <div className="App">
      <Navigation changeRoute={changeRoute} isActive={isActive}/>
      {
        route === 'home' 
        ? <div>
        <Logo />
        <Rank entries={entries} user={user}/>
        <ImageLinkForm handleSubmit={handleSubmit} value={input} />
        <FaceRecognition imageUrl={input} bounding={bounding}/>
      </div>
        : (
          route === 'signin' ? <SignIn changeRoute={changeRoute} loadUser={loadUser}/> : <Register changeRoute={changeRoute} loadUser={loadUser}/>
        ) 
      }
      {/* <SignIn /> */}
      
    </div>
  )
}

export default App
