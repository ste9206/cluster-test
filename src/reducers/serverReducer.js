import {ADD_SERVER, REMOVE_SERVER, ADD_APP, REMOVE_APP } from '../actions/serverAction';
import uuidv4 from 'uuid/v4';
import moment from 'moment';

const serverReducer = (state = [], action) =>{

    switch(action.type){
         
        case ADD_SERVER:
        const newServer = {
            "key":uuidv4(),
            "apps":[]
        }
        return [...state,newServer];
              
        case REMOVE_SERVER:
        let newState = [...state];
        newState.pop();
        return newState;

        case ADD_APP:
            let prevstate = [...state];
            prevstate.filter(server => server.key === action.payload.key)[0].apps.push({id: uuidv4(), name:action.payload.appName, createdAt: moment().toDate()})
            return prevstate;

        case REMOVE_APP:
        let currState = [...state];
        const apps = currState.filter(server => server.key === action.payload.removeDetails[0].server)[0].apps;
        currState.filter(server => server.key === action.payload.removeDetails[0].server)[0].apps.splice(apps.findIndex((app) => action.payload.removeDetails[0].app === app ),1);    
        
        return currState;

        default: 
            return state;
    }
};

export default serverReducer;