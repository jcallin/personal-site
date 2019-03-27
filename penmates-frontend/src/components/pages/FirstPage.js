import React from "react";
import IdealImage from "react-ideal-image"
import landing from '../../media/landing.jpg'
import Tiles from '../Tiles'

export default () => {
    return (
        <div className='landing-image-container'>
            <IdealImage
                className='landing'
                placeholder={{ lqip: landing.preSrc }}
                width={3500}
                height={2095}
                srcSet={[
                    { width: 1000, src: 'media/landing.jpg' },
                    { width: 1000, src: 'media/landing.webp' },
                ]} />
            <Tiles />
            {/* <h2 className='main-title'>Julian Callin</h2> */}
        </div>
    )
}
