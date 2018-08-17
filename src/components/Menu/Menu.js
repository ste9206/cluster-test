import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addServer, removeServer } from '../../actions/serverAction';
import './Menu.css';
import Apps from '../Apps/Apps';

class Menu extends Component {

    constructor(props){
        super(props);
        this.onPlusClick = this.onPlusClick.bind(this);
        this.onMinusClick = this.onMinusClick.bind(this);
    }

    onPlusClick(e){
        e.preventDefault();
        this.props.addServer();

    }

    onMinusClick(e){
        e.preventDefault();
        this.props.removeServer();

    }

    render() {
        return (
            <div className="menubar">

                <div className="mainWrapper">

                    <a className="plus" href="#" onClick={this.onPlusClick}>

                        <div className="circle">+</div>
                        <h4>Add server</h4>
                    </a>

                    <a className="minus" href="#" onClick={this.onMinusClick}>

                        <div className="circle">-</div>
                        <h4>Destroy</h4>
                    </a>

                </div>
                
                <div className="submenuWrapper">
                 <div className="title">
                  <h6>Available apps</h6>
                 </div>
                
                    <Apps title="Hadoop" color="pink" />
                    <Apps title="Rails" color="purple" /> 
                    <Apps title="Chronos" color="cyan" />
                    <Apps title="Storm" color="aquamarine" />
                    <Apps title="Spark" color="green" />
                    
                </div>

            </div>

        );
    }
}

const mapDispatchToProps = dispatch =>{ 
    return{
        addServer:() => dispatch(addServer()),
        removeServer: () => dispatch(removeServer())
    }
  
}


export default connect(null,mapDispatchToProps)(Menu);