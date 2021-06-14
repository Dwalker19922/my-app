import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import ComputerIcon from '@material-ui/icons/Computer';
import InfoIcon from '@material-ui/icons/Info';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useState } from "react"
import { getWindowDimensions, activateScroll } from "../Components/LandingScrollFunction";
export default function HomePg(props) {
    const [slider, setSlider] = useState(false)
    const [distance,setDistance] =useState(4)
    const window = props.window
    const maxDist = -5
    console.log(props)
    const timerBack = ()=>{
        if(distance>maxDist&&slider===true){

        setTimeout(() =>{
        setDistance(distance-1)

    },50)}

}
const timerFWD = ()=>{
    if(distance>=maxDist&&slider===false&&distance<0){

    setTimeout(() =>{
    setDistance(distance+1)

},50)}

}
    const controlSlider = (e) => {
        if(slider===true) {
            setSlider(false)
            timerFWD()
        }
        else {
            setSlider(true)
            
        }
    }
    timerBack()
    timerFWD()
 
    console.log(distance,slider,maxDist)
    const styled = makeStyles({
        sidebar: {
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'green',
            height:slider===true?window.height - 200:"40vh",
            width: slider==true? "20%" :"20%" ,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            borderRadius:"20%",
            

        },
        main: {
            width: `${window.width}px`
        },
        container: {
            display: 'flex',
            flexDirection: 'row',
            width: `${distance+105}vw`,
        },
        toggle:{
            display: slider===true?"block":"none"
        }
    })

    const classes = styled()
    return (
        <div className={props.classes.home}>
            <div className={classes.container}>
                <div className={classes.main}>
                    <p>My name is Daniel Walker</p>
                    <a href='https://www.freepik.com/vectors/background'>Basckground vector created by liuzishan - www.freepik.com</a>
                </div>
                <div className={classes.sidebar}>
                    {slider == true ? <ArrowForwardIosIcon onClick={controlSlider} /> : <ArrowBackIosIcon onClick={controlSlider} />}
                    <HomeIcon className={classes.toggle} />
                    <ComputerIcon className={classes.toggle} />
                    <InfoIcon className={classes.toggle} />

                </div>
            </div>


        </div>
    )
}