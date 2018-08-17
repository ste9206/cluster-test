import moment from 'moment';
import { ADDING_SERVER, ADD_INSTANCE_SUCCESS, REMOVING_SERVER, NOTHING_REMOVE, SERVER_ADDED, SERVER_REMOVED, NO_MORE_SPACE, LOADING_CLUSTER, CLUSTER_LOADED, REMOVING_LAST_APP_INSTANCE, REMOVE_APP_SUCCESS } from '../actions/dialogAction';
export const ADD_SERVER = 'ADD_SERVER';
export const REMOVE_SERVER = 'REMOVE_SERVER';
export const ADD_APP = 'ADD_APP';
export const REMOVE_APP = 'REMOVE_APP';

export const addServer = () => dispatch => {

    dispatch({ type: ADDING_SERVER });

    setTimeout(()=>{
        dispatch({ type:ADD_SERVER  });
        dispatch({ type:SERVER_ADDED });
    },1500);
    
};

export const removeServer = () => (dispatch,getState) => {

    dispatch({type: REMOVING_SERVER});

    setTimeout(()=>{
        const servers = Array.from(getState().servers);
        const apps = Array.from(servers[servers.length-1].apps);
      
        dispatch({ type:REMOVE_SERVER  });
        dispatch({ type: SERVER_REMOVED });
    
        apps.forEach(app => dispatch(addApp(app.name)));

    },1500);
   
};

export const addApp = (appName) => (dispatch, getState) =>{

     
        const zeroApps = Array.from(getState().servers)
        .filter(server => server.apps.length === 0);

        const oneApps = Array.from(getState().servers)
        .filter(server => server.apps.length === 1);

        const key =  zeroApps.length !== 0 ? zeroApps[0].key : (
            oneApps.length !== 0 ? oneApps[0].key : null
        );

        if(key == null){
            dispatch({ type:NO_MORE_SPACE }); 
        }
        else{
            dispatch({
                type:ADD_APP,
                payload:{ 
                    key, 
                    appName 
                }
            }); 
            dispatch({type:ADD_INSTANCE_SUCCESS}); 
        }
};


export const removeApp = (appName) => (dispatch, getState) =>{

    dispatch({ type: REMOVING_LAST_APP_INSTANCE});

    setTimeout(()=>{
        const dateArray = [];

        getState().servers.forEach(server => server.apps.forEach(app => {
            
            if(app.name === appName){
                dateArray.push({app, server: server.key });
            }
        }));
       
        const lastInstance = moment.max(dateArray.map(d => moment(d.app.createdAt)));
        const removeDetails = dateArray.filter(da => moment(da.app.createdAt).isSame(lastInstance));
    
        if(removeDetails.length === 0) {
            dispatch({ type: NOTHING_REMOVE});
        }
        else{
            dispatch({
                type:REMOVE_APP,
                payload:{
                  removeDetails
                }    
            });
            dispatch({type:REMOVE_APP_SUCCESS});
        }
    },1500);    
};

export const loadCluster = () => dispatch => {

    dispatch({ type: LOADING_CLUSTER});

    setTimeout(()=>{
        dispatch({type: CLUSTER_LOADED});
    },1300);
};