import { useState} from 'react' 
import './App.css'
import Logo from './components/Logo/Logo'
import Navigation from './components/Navigation/Navigation'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import Rank from './components/Rank/Rank'

function App() {
  const [input, setInput] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [entries, setEntries] = useState(0)
  const [bounding, setBounding] = useState({})

  function handleInputChange({target}) {
    setInput(target.value)
  }

  function handleSubmit() {
    const raw = JSON.stringify({
      "user_app_id": {
        "user_id": "kbz23p0jahdt",
        "app_id": "5ad55bbcbd5b4ff9ac88075c9bbe50c5"
      },
      "inputs": [
        {
          "data": {
            "image": {
              "url": input
            }
          }
        }
      ]
    });
    
    const requestOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Key de76828d0f9c46fbb60870c7f9a1e45d'
      },
      body: raw
    };

    fetch("https://api.clarifai.com/v2/models/face-detection/versions/45fb9a671625463fa646c3523a3087d5/outputs", requestOptions)
      .then(response => response.text())
      .then(result => {
        handleResponse(JSON.parse(result).outputs[0].data.regions[0].region_info.bounding_box)
      })
      .catch(error => alert("Link invalido"));
  }

  function handleResponse(response) {
    const ImgWidth = Number(document.getElementById('image').width)
    const ImgHeight = Number(document.getElementById('image').height)
    const {top_row, left_col, right_col, bottom_row} = response
    console.log("original", top_row, left_col, right_col, bottom_row)
    const PositionInfo = {
      top_row : ImgHeight * top_row,
      left_col: ImgWidth  * left_col,
      bottom_row: ImgHeight  * (bottom_row - 1) * -1,
      right_col: ImgWidth * (right_col - 1) * -1

    } 
    setEntries(entries + 1)
    setBounding(PositionInfo)
  }

  return (
    <div className="App">
      <Navigation />
      <Logo />
      <Rank entries={entries}/>
      <ImageLinkForm handleInputChange={handleInputChange} handleSubmit={handleSubmit} value={input} />
      <FaceRecognition imageUrl={input} bounding={bounding}/>
    </div>
  )
}

export default App
