import React, {Component} from 'react';
import './ServerClusters.css';
import Server from '../server/Server';
import moment from 'moment';
import { connect } from 'react-redux';

class ServerCanvas extends Component {
   
    render() {
        return (
            <div className="serverWrapper">
              <div className="secondWrapper">
                <h1>Server Canvas</h1>  
                 <div className="grid-x">

               {this.props.servers && this.props.servers.map((server,i)=>{

                   const apps = server.apps;

                   if(apps.length === 0)
                    return <Server key={i} runningApp={false} />
                   
                    else{
                        const lastInstance = moment.max(apps.map(app => moment(app.createdAt)))
                        const lastApp = apps.filter(app => moment(app.createdAt).isSame(lastInstance))[0]          
                        return <Server key={i} runningApp={true} title={lastApp.name} code={lastApp.name.substring(0,2)} hasAdded={moment(lastApp.createdAt).fromNow()} />
                   }
                })}
                </div>
            </div>

            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return state;
}

export default connect(mapStateToProps,null)(ServerCanvas);