import { useState } from 'react';
import alien from './alien-128.png';
import ufo from './ufo-color.png';
import ia from './ia-128.png';
import './Logo.css';
import Tilt from 'react-parallax-tilt';

export default function Logo() {
    const scale = 1.1;

    return (
        <Tilt className='Tilt' scale={scale} transitionSpeed={2500}>
            <img src={alien} alt="logo" />
        </Tilt>
    )
}