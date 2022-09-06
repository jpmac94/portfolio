import React from 'react';
import '../../styles/NotFound/NotFound.css'
import Header from '../Header/Header';

const NotFound = () => {
    return ( 
        <>
        <Header className='header-notFount'/>
       <div className="scene">
           
           <h1 className="notfound">404</h1>
           <img src="https://github.com/JulioCodesSM/CodeSnippets/blob/main/ImageAnimationSequence_2.0/stars.png?raw=true" alt="stars" className="stars" />
           <img src="https://github.com/JulioCodesSM/CodeSnippets/blob/main/ImageAnimationSequence_2.0/space_ship.png?raw=true" alt="ship" className="ship" />
           <img src="https://github.com/JulioCodesSM/CodeSnippets/blob/main/ImageAnimationSequence_2.0/astronaut.png?raw=true" alt="astronaut" className="astronaut" />
           <img src="https://github.com/JulioCodesSM/CodeSnippets/blob/main/ImageAnimationSequence_2.0/comet.png?raw=true" alt="comet" className="comet"/>
           <img src="https://github.com/JulioCodesSM/CodeSnippets/blob/main/ImageAnimationSequence_2.0/moon.png?raw=true" alt="moon" className="moon"/>
           
       </div>
       </>
     );
}
 
export default NotFound;