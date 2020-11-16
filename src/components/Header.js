import React from 'react';
import TrollFace from '../Trollface.png';

const Header  = () => {
    return (
        <header>
            <img src={TrollFace} alt="Problem?"/>
            <p>Meme Generator</p>
        </header>
    )
}

export default Header;
