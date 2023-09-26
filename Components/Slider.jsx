"use client";
import React, { useState } from 'react';
import Image from 'next/image';
const Slider = ({ images, captions }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const captionLines = captions[currentIndex].split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br />
        </React.Fragment>
    ));
    return (
        <div className="slider">
            <div className="slide-container">
                <Image src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slide" width={200} height={200} />
                <p className="caption">{captionLines}</p>
            </div>
            <div className="dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};
export default Slider;
