import React, { useState } from 'react';
import './Card.css';
import ElonMusk from '../assets/ElonMusk.jpg';

function Card() {

    const [name, setName] = useState ('Your Name');
    const [job, setJob] = useState ('Job Name');
    const [about, setAbout] = useState ('The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox.')
    
    return (
        <div className='Card'>
            <div className='upper-container'>
                <div className='image-container'>
                    <img src={require('../assets/ElonMusk.jpg')} alt='' height='100px' width='100px'/>             
                </div>
            </div>
            <div className='lower-container'>
                <h3> {name} </h3>
                <h4> {job} </h4>
                <p> {about} </p>
                <button>View More</button>
            </div>
        </div>
    )
};

export default Card