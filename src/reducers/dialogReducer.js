import { CLOSE_DIALOG, ADD_INSTANCE_SUCCESS, ADDING_SERVER, REMOVING_SERVER, SERVER_ADDED, SERVER_REMOVED, NO_MORE_SPACE, REMOVING_LAST_APP_INSTANCE, NOTHING_REMOVE, REMOVE_APP_SUCCESS, LOADING_CLUSTER, CLUSTER_LOADED } from '../actions/dialogAction';


const dialogReducer = (state = {}, action) =>{

    let currState;

    switch(action.type){
         
        case CLOSE_DIALOG:
        
        currState = {...state};
        currState.alert.show = false;
        return currState;

       case ADDING_SERVER:
         currState = {...state};
         currState.progress.show = true;
         currState.progress.title = 'Adding server in progress...';  
         return currState;

         case REMOVING_SERVER:
         currState = {...state};
         currState.progress.show = true;
         currState.progress.title = 'Removing server in progress...';
         
         return currState;
        
        case SERVER_ADDED:
        currState = {...state};
        currState.progress.show = false;
        currState.alert.show = true;
        currState.alert.title = 'Success';
        currState.alert.message = 'Server added successfully!';
        return currState;


        case SERVER_REMOVED:
        currState = {...state};
        currState.progress.show = false;
        currState.alert.show = true;
        currState.alert.title = 'Success';
        currState.alert.message = 'Server removed successfully!';
        return currState;

        case NO_MORE_SPACE:
        currState = {...state};
        currState.alert.show = true;
        currState.alert.title = 'Error';
        currState.alert.message = 'There isn\'t other space available for other apps in this moment. App will be killed.';
        
        return currState;

        case REMOVING_LAST_APP_INSTANCE:
        currState = {...state};
        currState.progress.show = true;
        currState.progress.title = 'Removing last instance of app in progress...';
        return currState;

        case NOTHING_REMOVE:
        currState = {...state};
        currState.progress.show = false;
        currState.alert.show = true;
        currState.alert.title = 'Error';
        currState.alert.message = 'There isn\'t any instance of this app to remove.';     
        return currState;

        case REMOVE_APP_SUCCESS:
        currState = {...state};
        currState.progress.show = false;
        currState.alert.show = true;
        currState.alert.title = 'Success';
        currState.alert.message = 'Last app instance removed successfully!';
        return currState;

    
        case ADD_INSTANCE_SUCCESS:
        currState = {...state};
        currState.progress.show = false;
        currState.alert.show = true;
        currState.alert.title = 'Success';
        currState.alert.message = 'New instance of app started successfully!';
        return currState;

        case LOADING_CLUSTER:
        currState = {...state};
        currState.progress.show = true;
        currState.progress.title = 'Loading cluster...';
        return currState;

        case CLUSTER_LOADED:
        currState = {...state};
        currState.progress.show = false;
        return currState;

        default: 
            return state;
    }
};

export default dialogReducer;