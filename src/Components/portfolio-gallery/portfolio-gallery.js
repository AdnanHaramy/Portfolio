import React from 'react';
import PopUp from '../pop-up/pop-up';
import '../portfolio-gallery/portfolio-gallery.css'
class PortfolioGallery extends React.Component {
    state = {
        popup: false
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    {
                        this.state.popup ? <div className="popUpMessage">
                            Lorem ipsum dolor sit amet.
                            <button onClick={() => {
                                this.setState({ popup: false })
                            }} >close me </button>
                        </div> : null
                    }
                </div>
                <div className="projectsGrid">
                    <div onClick={() => {
                        this.setState({ popup: true })
                    }} className="projectContainer">
                    </div>
                    <div onClick={() => {
                        this.setState({ popup: true })
                    }} className="projectContainer">
                    </div>
                    <div onClick={() => {
                        this.setState({ popup: true })
                    }} className="projectContainer">
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default PortfolioGallery;