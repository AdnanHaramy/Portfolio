import React from 'react';
import Image from 'next/image';
function Introduction() {
    return (
        <section className="Introduction" >
            <div className="Introduction-content">
                <div className="Introduction-image">
                    <Image
                        priority={true}
                        src='/maher.png'
                        alt="Maher Haramy photo"
                        width={270}
                        height={270}
                        style={{ borderRadius: '50%' }} />
                </div>
                <div className="Introduction-text">
                    <h2 className="Introduction-header" >MAHER HARAMY</h2>
                    <p className="Introduction-paragragh" >
                        English Teacher & Instructor
                    </p>
                    <p className="Introduction-paragragh">
                        “Tell me and I forget. <br /> Teach me and I remember. Involve me and I learn. ”
                    </p>
                </div>
            </div>
        </section>
    );
}
export default Introduction;
