// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
// import memedata from './data/memeData'
import {ImageCont} from './components/ImageCont'
import { useEffect, useState } from 'react'

function App() {
  // const memeArray = memedata.data.memes
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg" 
  })
  const [allMemes, setAllMemes] = useState([])

  

  useEffect(function(){

       fetch("https://api.imgflip.com/get_memes") 
            .then(res => res.json())
            .then(data =>setAllMemes(data.data.memes)) 
            
    
  }
  ,[])
  
  function getNewImage(){ 
    
    const randomNum = Math.floor(Math.random() * allMemes.length)

    setMeme(prevData=>{
      return {
        ...prevData,
        randomImage : allMemes[randomNum].url            
      }
    }

)
 
  }

  function putText(event){
    
    setMeme(prevData=>{
              return {
                ...prevData,
                [event.target.name] : event.target.value            
              }
            }
      
    )
    
  }


  
  return (
    <div className="App">
        <Header />
        <Main 
          handleClick={getNewImage}
          toptext={meme.toptext}
          bottomtext={meme.bottomtext}
          handleChange={putText}
        />
        <ImageCont 
                url={meme.randomImage}
                toptext={meme.toptext}
                bottomtext={meme.bottomtext}
                
        />
        
    </div>
  );
}

export default App;
