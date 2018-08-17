import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Apps.css';
import { addApp, removeApp } from '../../actions/serverAction';

class Apps extends Component{

    constructor(props){
        super(props);

        this.onMinusClick = this.onMinusClick.bind(this);
        this.onPlusClick = this.onPlusClick.bind(this);
    }

    onMinusClick(e){    
        e.preventDefault();
        this.props.removeApplication(this.props.title);
    }

    onPlusClick(e){
        e.preventDefault();
        
        this.props.addApplication(this.props.title);
    }

    render(){

        const nameType = `minicolor ${this.props.color}`;
        const colorButton = `circle-mini plus ${this.props.color}`;

        return (
            <div className="content">
                    <div className={nameType}></div>
                    <div className="inliner">
                   
                      <h4 className="content-title">{this.props.title}</h4>  
                      <div className="circle-mini minus" onClick={this.onMinusClick}>-</div>
                      <div className={colorButton} onClick={this.onPlusClick}>+</div>

                    </div>
                    </div>
                
        );
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        addApplication:(title) => dispatch(addApp(title)),
        removeApplication: (title) => dispatch(removeApp(title))
    };
};

export default connect(null, mapDispatchToProps)(Apps);