import React, { useState } from "react";
import { ReactComponent as RedCross } from '../Modal/cross.svg'
import "./Modal.css";
export default function Modal() {
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };
    if (modal === true) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }
    return (
        <>
            <h1>My Projects </h1>
            <div className="parent" >
                <div className="projectContainer" onClick={toggleModal}>
                    Open
                </div>
                <div className="projectContainer" onClick={toggleModal}>
                    Open
                </div>
                <div className="projectContainer" onClick={toggleModal}>
                    Open
                </div>
                <div className="projectContainer" onClick={toggleModal}>
                    Open
                </div>
                <div className="projectContainer" onClick={toggleModal}>
                    Open
                </div>
                <div className="projectContainer" onClick={toggleModal}>
                    Open
                </div>
                <div className="projectContainer" onClick={toggleModal}>
                    Open
                </div>
                <div className="projectContainer" onClick={toggleModal}>
                    Open
                </div>
                <div className="projectContainer" onClick={toggleModal}>
                    Open
                </div>
            </div>
            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <img className='modal-img' src="https://images01.nicepage.com/page/50/53/website-design-preview-50537.jpg" alt="" />
                        <h1>Pizza Store </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, vero perspiciatis. Similique, quibusdam debitis quo aliquam amet ad veniam est!</p>
                        <a href="https://www.google.com" target="_blank" rel="noreferrer" >
                            <button className="github-button" >Github</button>
                        </a>
                        <a href="https://www.google.com" target="_blank" rel="noreferrer" >
                            <button className="live-demo" >Live Demo</button>
                        </a>
                        <button className="close-modal" onClick={toggleModal}>
                            <RedCross />
                        </button>
                    </div>
                </div>
            )}

        </>
    );
}
