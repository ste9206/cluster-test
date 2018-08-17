import React, {Component} from 'react';
import Menu from './Menu/Menu';
import ServerClusters from './ServerClusters/ServerClusters';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';
import { closeDialog } from '../actions/dialogAction';
import { loadCluster } from '../actions/serverAction';
import { connect } from 'react-redux';


import './AppContainer.css';

class AppContainer extends Component {

    constructor(props){
        super(props);

        this.props.load();
    }
    render() {
        return (
            <div className="rootWrapper">
                <Menu/>
                <ServerClusters/>
                <Dialog
                    open={this.props.dialogs.progress.show}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">

                    <DialogTitle id="alert-dialog-title">{this.props.dialogs.progress.title}</DialogTitle>
                    <div className="center-progress">
                        <DialogContent>
                            <CircularProgress size={50}/>
                        </DialogContent>
                    </div>
                </Dialog>
                <Dialog
                    open={this.props.dialogs.alert.show}
                    onClose={this.props.closeDialog}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title">{this.props.dialogs.alert.title}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {this.props.dialogs.alert.message}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.closeDialog} color="primary" autoFocus>
                            Ok
                        </Button>
                    </DialogActions>
                </Dialog>

            </div>
        );
    }
}

const mapStateToProps = state =>{
    return state;
};

const mapDispatchToProps = dispatch =>{
    return{
        closeDialog:(e)=>{
            e.preventDefault();
            dispatch(closeDialog());
        },
        load:() => dispatch(loadCluster())
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(AppContainer);