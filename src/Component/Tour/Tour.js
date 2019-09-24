import React, { Component } from 'react'
 import './Tour.scss';
export default class Tour extends Component {
    state={
        showInfo:false
    }
    handleInfo=()=>
    {
       this.setState({ showInfo:!this.state.showInfo})
    }
    render() {
        const{city,img,info,name} =this.props.tour
        const {removeTour} =this.props;
        console.log(img)
        return (
            <article className="tour">
                <div className="img-container">
                    <img src={img} alt=""/>
                    <span className="close-btn" onClick={()=>{removeTour(id);}}>
                        <i className="fa fa-window-close"/>
                        </span>
                    </div>
                    <div className="tour-info">
                        <h3>{city}</h3>
                        <h4>{name}</h4>
                        <h5>
                            info{""}
                            <span onClick={this.handleInfo}>
                                <i className="fa fa-window-close"/>
                                </span>
                        </h5>
                        {this.state.showInfo &&
                        <p>{info} </p>}
                    </div>
                    
            </article>
        )
    }
}
