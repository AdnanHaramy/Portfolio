"use client";
import React, { useState } from 'react';
import Image from 'next/image';
const Slider = ({ images, captions = [], height, width, borderRadius }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const captionLines = captions[currentIndex]
        ? captions[currentIndex].split('\n').map((line, index) => (
            <React.Fragment key={index}>
                {line}
                <br />
            </React.Fragment>
        ))
        : null;
    const imageStyle = {
        borderRadius: borderRadius,
    };
    return (
        <div className="slider">
            <div className="slide-container">
                <Image
                    src={images[currentIndex]}
                    alt={`Student ${currentIndex + 1}`}
                    style={imageStyle}
                    width={width}
                    height={height}
                />
                {captionLines && (
                    <p className="caption">{captionLines}</p>
                )}
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
