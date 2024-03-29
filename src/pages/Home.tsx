import React from "react";
import { Container } from 'react-bootstrap';
import Typed from '../typed/index';
import './homeStyle.scss';

export interface IHomeProps {
  headline?: string
  typed?: string[]
}
// justifyContent:'center', alignItems:'center', display:'flex', position:'absolute', width:'100%', height:'100%'
const Home: React.FunctionComponent<IHomeProps> = (props: IHomeProps) => {
  return (
    <div id="home" className="intro background">
     <video playsInline={true} autoPlay={true} muted loop style={{position:'fixed', right:'0', bottom:'0', minHeight:'100%', minWidth:'100%'}}>
                    <source src="https://ik.imagekit.io/jfpi8d5c5/capstone/homevideo.mp4?updatedAt=1680126684572" type="video/mp4" />
                        Your browser does not support the video tag.
    </video>
    <div className="intro-content display-table" style={{position:'relative', color:'red'}}>
        <div className="table-cell">
            <Container>
                <h1 className="intro-title mb-4" style={{color:'white', fontSize:'100px'}}>{'SnapShot'}</h1>
                <p className="intro-subtitle">
                    <span className="text-slider-items"></span>
                    <strong className="text-slider">
                    <Typed style={{fontSize:'40px', color:'white'}}
                        strings={['Welcome to SnapShot', ' Please login or sign up']}
                        typeSpeed={70}
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