import React from 'react';
import Slider from './Slider';
function Testimonials() {
    const images = ['/maher.png', '/maher.png', '/maher.png'];
    const captions = ['Caption 1', 'Caption 2', 'Caption 3'];
    return (
        <section className="testimonials">
            <div className="testimonials-container">
                <div className="testimonials-left">
                    <h2> ━━━ Testimonials</h2>
                    <p>
                        Happy Students
                    </p>
                </div>
                <div className="testimonials-right">
                    <Slider images={images} captions={captions} />
                </div>
            </div>
        </section>
    );
}
export default Testimonials;

