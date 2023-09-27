import React from 'react';
import Slider from './Slider';
function Testimonials() {
    const images = ['/student1.jpg', '/student2.jpg', '/student3.jpeg'];
    const captions = [
        '❝ Mr. Maher teaching ignites\n a passion for learning in students.❞',
        '❝ Mr. Maher classes inspire\n students to excel in their studies. ❞',
        '❝ Mr. Maher teaching methods\n captivate and empower students. ❞',
    ];
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
                    <Slider
                        images={images}
                        captions={captions}
                        height={200}
                        width={200}
                    />
                </div>
            </div>
        </section>
    );
}
export default Testimonials;
