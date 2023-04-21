import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router';
import ReactConfetti from 'react-confetti';
import ConfettiExplosion from 'react-confetti-explosion';
import videosml from "../assets/happy-aid-small.mp4"

function Confetti() {    
  const params = useParams()
  const [data, setData] = useState ([])
  
  useEffect( ()=>{    
   async function getUser (){
      try {
      const {data} = await axios.get(`https://congrats-hb-api.onrender.com/user/${params.id}`)
      setData(data)
    } catch (error) {
      console.log(error);
    }
    }
    getUser()    
  }, [params.id])
  
 //users names
  const userName = data.name

//confetti
const [windowDimension, setWindowDimension] = useState({
  width: window.innerWidth,
  height: window.innerHeight
})
  useEffect(()=>{
    function adjustSize(event){
      setWindowDimension ({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

      window.addEventListener('resize', adjustSize)
      return ()=> window.removeEventListener('resize', adjustSize)
  }, [windowDimension])

  //switch confetti
  const [display, setDisplay] = useState(true)

  //set texts 
  const [display1, setDisplay1]=useState(false)
  const [display11, setDisplay11]=useState(false)
  const [display2, setDisplay2]=useState(false)
  const [display3, setDisplay3]=useState(false)
  const [display4, setDisplay4]=useState(false)
  const [display5, setDisplay5]=useState(false)
  const [display6, setDisplay6]=useState(false)
  const [display7, setDisplay7]=useState(false)
  const [display8, setDisplay8]=useState(false)
  const [display9, setDisplay9]=useState(false)

  //back home
  const[home, setHome] = useState(false)
  const [count, setCount] = useState (-1)
  
 const timer = useRef(null);
  useEffect(()=>{
  timer.current = setInterval(() => {
      setCount(count+1)    
    }, 1000);
    
  return ()=> clearInterval(timer.current)
  }, [count])

  useEffect(()=>{
      switch (count) {
        case 0:
          setDisplay1(true)
          break;
        case 2:
          setDisplay11(true)
          break;
        case 4:
          setDisplay1(false)
          setDisplay11(false)
          setDisplay2(true)
          break;
        case 7:
          setDisplay2(false)
          setDisplay3(true)
          break;
        case 14:
          setDisplay3(false)
          setDisplay4(true)
          break;
        case 19:
          setDisplay4(false)
          setDisplay5(true)
          break;
        case 28:
          setDisplay5(false)
          setDisplay6(true)      
          break;
        case 35:
          setDisplay6(false)
          setDisplay7(true)
          break;
      
        case 39:
          setDisplay7(false)
          setDisplay8(true)
          break;
        case 49:
          setDisplay8(false)
          setDisplay9(true)
          break;
          default :
          console.log("joyeuse fête à tout le monde!");
          break;
      }

      if(count >= 49){
        clearInterval(timer)   
          setTimeout(() => {
            setDisplay(false)
            setHome(true)
          }, 7000);     
    }
  },[count])
 
  return (
    <div className='confetti'>
      <div className='confetti-location'>
        <div>   {display9 && !display && <ConfettiExplosion     
      particleCount={250}
      />}
        </div>
        <div>{display9 && display && <ReactConfetti
      width={windowDimension.width}
      height={windowDimension.height}
      tweenDuration={6000}
      numberOfPieces={130}
      gravity={0.07}     
      />}
        </div>
        <div>
          {display9 && !display && <ConfettiExplosion     
      particleCount={250}
      width={1500}
      />
      }
        </div>
      </div>
      
      <div className='texts'>          
          <p style={{display : display1 ? "block" : 'none'}}>je suis </p>
          <span style={{display : display11 ? "block" : 'none'}} className='username'>{userName}</span> 
          <h3 style={{display : display2 ? "block" : 'none'}}>et je veux vous transmettre un message <span>spécial</span> </h3>  
          <h2 style={{display : display3 ? "block" : 'none'}}>à l'occasion de cette journée sacrée...</h2>
          <h1 style={{display : display4 ? "block" : 'none'}}>Aïd Moubarak à tous et à toutes !</h1>
          <h4 style={{display : display5 ? "block" : 'none'}}>Qu'ALLAH accepte votre jeûne et vos prières</h4>
          <h4 style={{display : display6 ? "block" : 'none'}}>Qu'ALLAH vous accorde sa bénédiction et le bonheur dans vos coeurs</h4>
          <h4 style={{display : display7 ? "block" : 'none'}}>ALLAHOUMA AMINE <span>🤲</span></h4>
          <h5 style={{display : display8 ? "block" : 'none'}} className='memory'>en mémoire de tous ceux et celles qui nous ont quitté très tôt...</h5>
          <div style={{display : home ? "block" : 'none'}} className='link'>
            <a href='/'>envoyer d'autres messages </a>
            <span>😃</span>
          </div>
      </div>          
<div className="overlay">
</div>

<div className="video">
     <video src={videosml} autoPlay muted />
</div>
   
    </div>
  )
}

export default Confetti