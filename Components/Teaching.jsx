import React from 'react';
import Image from 'next/image';
function Teaching() {
    return (
        <section className="main-section">
            <div className="container">
                <div className="left-container">
                    <h2>Teaching</h2>
                    <p>   With a career spanning multiple facets of education and language, I have had the privilege of wearing various hats in the field. At heart, I'm an English teacher, committed to guiding students on their journey to language mastery.
                        As an IELTS Instructor, I've honed my expertise in test preparation, equipping individuals with the skills and confidence to excel in this globally recognized English proficiency assessment.
                        My role as a Teacher Trainer has allowed me to extend my passion for education to the next generation of teachers. I believe that by empowering educators, we enhance the quality of education for students worldwide.
                        Being a Translator, I've facilitated cross-cultural communication by breaking down language barriers. My proficiency in multiple languages has been an asset in fostering understanding and cooperation.
                        Currently, I serve as an Education Coordinator, where I oversee and enhance educational programs, ensuring they meet the highest standards of quality and effectiveness.
                        My journey in education and language has been marked by a deep commitment to communication, cultural exchange, and the transformative power of learning. Let's connect and explore how my experience can benefit your language and education needs.</p>
                </div>
                <div className="right-container">
                    <div className="image-container">
                        <Image src="/maher2.png"
                            alt="Maher Photo Giving a Lecture"
                            layout=""
                            width={280}
                            height={180} />
                    </div>
                    <div className="image-container">
                        <Image src="/maher3.png"
                            alt="Maher Photo in a ceremony"
                            layout=""
                            width={280}
                            height={180} />
                    </div>
                </div>

            </div>
        </section>
    );
}
export default Teaching;
