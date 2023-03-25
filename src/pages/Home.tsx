import React from "react";
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Typed from '../typed/index';
import './homeStyle.scss'

export interface IHomeProps {
  headline?: string
  typed?: string[]
}
// justifyContent:'center', alignItems:'center', display:'flex', position:'absolute', width:'100%', height:'100%'
const Home: React.FunctionComponent<IHomeProps> = (props: IHomeProps) => {
  return (
    <div id="home" className="intro background">
    <div style={{position:'absolute', top:'0', left:'0', height:'100%', justifyContent:'center', alignItems:'center', display:'flex'}}>
        <div style={{position:'relative', overflow:'hidden', textAlign:'center', display:'flex',
    alignItems:'center', justifyContent:'center', height:'100%'}}>
            <video playsInline={true} autoPlay={true} muted loop style={{width:'100%'}}>
                    <source src="https://ik.imagekit.io/jfpi8d5c5/portfolio/Media2.mp4?updatedAt=1679000245129" type="video/mp4" />
                        Your browser does not support the video tag.
            </video>
        </div>
    </div>
    <div className="intro-content display-table" style={{position:'relative', color:'red'}}>
        <div className="table-cell">
            <Container>
                <h1 className="intro-title mb-4" style={{color:'red'}}>{'SnapShot'}</h1>
                <p className="intro-subtitle">
                    <span className="text-slider-items"></span>
                    <strong className="text-slider">
                    <Typed
                        strings={['Welcome to Snapshot', 'please login or sign up']}
                        typeSpeed={80}
                        backDelay={1100}
                        backSpeed={30}
                        loop
                        />
                    </strong>
                </p>
            </Container>
        </div>
    </div>
</div>
  );
}
 
export default Home;