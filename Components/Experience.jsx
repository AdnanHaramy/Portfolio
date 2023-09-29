import React from 'react';
import Image from 'next/image';
function Experience() {
    return (
        <section className="experience">
            <div className="experience-holder">
                <h2 className="experience-header" >Experience</h2>
            </div>
            <div className="experience-container">
                <div className="experience-item">
                    <div className="experience-logo">
                        <Image src="/ukh.svg" alt="University Logo 1" width={120} height={120} />
                    </div>
                    <div className="experience-text">
                        <h3>University of Kurdistan Hewlêr</h3>
                        <p>A Lecturer in English Language  <br />
                            Feb 2023 - Present  <br />
                        </p>
                    </div>
                </div>
                <div className="experience-item">
                    <div className="experience-logo">
                        <Image src="/adra.svg" alt="University Logo 1" width={120} height={120} />
                    </div>
                    <div className="experience-text">
                        <h3>ADRA Syria</h3>
                        <p>Education Coordinator <br />
                            Sep 2018 - Feb 2020 <br />
                            Education OfficerEducation Officer <br />
                            Sep 2017 - Sep 2018 </p>
                    </div>
                </div>
                <div className="experience-item">
                    <div className="experience-logo">
                        <Image src="/aston.svg" alt="University Logo 2" width={120} height={120} />
                    </div>
                    <div className="experience-text">
                        <h3>Aston American University</h3>
                        <p>IELTS Instructor <br />
                            Apr 2021 - Present <br />
                            United States</p>
                    </div>
                </div>
                <div className="experience-item">
                    <div className="experience-logo">
                        <Image src="/projects.svg" alt="University Logo 3" width={120} height={120} />
                    </div>
                    <div className="experience-text">
                        <h3>Projects Learning Center</h3>
                        <p>Head Of  English Department <br />
                            Feb 2015 - Sep 2018 <br />
                            IELTS Instructor <br />
                            June 2015 - Sep 2018</p>
                    </div>
                </div>
                <div className="experience-item">
                    <div className="experience-logo">
                        <Image src="/new-horizons.svg" alt="University Logo 4" width={120} height={120} />
                    </div>
                    <div className="experience-text">
                        <h3>New Horizons Learning Center</h3>
                        <p>Head Of Department <br />
                            Jan 2015 - Sep 2017 <br />
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Experience;
