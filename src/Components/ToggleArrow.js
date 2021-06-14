import {useState} from 'react'
import DetailsIcon from '@material-ui/icons/Details';

const TDiv=(props)=>{
  const blue ={
    fontSize:"4rem"
  }
  const red ={
    fontSize:"4rem"
  }
    const [toggle,setToggle] =useState(false)
    
  const toggleF=()=>{
    setTimeout(() =>{
    if(toggle===true){
      setToggle(false)
    }
    else{
      setToggle(true)
    }
  },1000)}
  toggleF()
  
    return(
      <>
     { toggle===true? <DetailsIcon onClick={props.onClick} style={blue} className="blue"/> :<DetailsIcon style={red} onClick={props.onClick} className="red"/>}
      </>
    )
  }
  export default TDiv