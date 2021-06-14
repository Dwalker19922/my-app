import {useState,useEffect} from "react"
import profilePic from "./img/hmPage.jpg";
import homeImg from "./img/hmPage.jpg"
import LandingImage from "./img/Vector_2646.jpg"
import { makeStyles } from '@material-ui/core/styles';
import TDiv from "./Components/ToggleArrow";
import './App.css';
import{getWindowDimensions} from"./Components/LandingScrollFunction"
const preload = homeImg
localStorage.setItem("preloadImg",preload)
const home = localStorage.getItem("preloadImg")
function App() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
        setMD(-windowDimensions.height)
      }
      
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, [windowDimensions.width, windowDimensions.height]);
  
    
  const [distance,setDistance]= useState(0)//sets distance to travel and starting point
  const [scroll,setScroll]=useState(false)//sets action boolean
  const[maxDistance,setMD]=useState(-windowDimensions.height)


const styled = makeStyles({
  app: {
    textAlign: "center",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${LandingImage})`,
    color: "white",
    backgroundSize: "cover",
    marginTop:`${distance}px`,
    width:`${windowDimensions.width}px`,
    height:`${windowDimensions.height}px`
  },
  home:{
    textAlign: "center",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${home})`,
    color: "white",
    padding:"3%",
    backgroundSize: "cover",
    marginTop:`${distance + windowDimensions.height-30}px`,
    width:`${windowDimensions.width}px`,
    height:`${windowDimensions.height}px`,
    
  }
  
  })
  const setState=()=>{
    setScroll(true)
   return activateScroll(distance,setDistance,scroll,maxDistance)
  
  }
const activateScroll=(distance,setDistance,clickState,maxDist)=>{
    const scroll=()=>{
        setTimeout(() =>{
          if(distance>maxDist){
          setDistance(distance-10)
      }},0)}
    return clickState===true?scroll(distance,setDistance,maxDist):null
  }
  activateScroll(distance,setDistance,scroll,maxDistance)
  console.log(distance)
  const classes = styled();
  return (
    <>
    <div className={classes.app}>
      
    <div className="coverInfo">
    <header className="App-header">
       <h1 className="Name"> Daniel Walker</h1>
        <h2 className="title">Full Stack Web Developer</h2>
        <p className="coverDescription">click below to view my portfolio</p>
        </header>
        <TDiv onClick={setState}/>
        </div>
  
      <a className="ReqAtt" href='https://www.freepik.com/vectors/background'>Background vector created by liuzishan - www.freepik.com</a>
      
    </div>
    {scroll===false?<></>:<div className={classes.home}>
      </div>}
    <a href='https://www.freepik.com/vectors/background'>Background vector created by liuzishan - www.freepik.com</a>
    </>
  );
}

export default App;
