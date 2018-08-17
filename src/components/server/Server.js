import React, {Component} from 'react';
import './Server.css';

class Server extends Component {

    render() {
        return (
            <div className="cell small-12 medium-3 custom">
            {
                !this.props.runningApp ? (
                    <div className="canvas"></div>
                )
                :
                (
                    <div className={`server-running ${this.props.title.toLowerCase()}`}>
                        <h3>{this.props.code}</h3>
                        <h4>{this.props.title}</h4>
                        <h6>{this.props.hasAdded}</h6>
                    </div>
                )
            }        
            </div>
        );
    }
}
export default Server;