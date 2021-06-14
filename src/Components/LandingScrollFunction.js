
  //receive window positions
  export const activateScroll=(distance,setDistance,clickState,maxDist)=>{
      console.log(distance,setDistance,clickState,maxDist)
    const scroll=()=>{
        setTimeout(() =>{
          if(distance>maxDist){
          setDistance(distance-10)
      }},0)}
    return clickState===true?scroll(distance,setDistance,maxDist):null
  }
  export   function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
