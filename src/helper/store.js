import rootReducer from '../reducers/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import uuidv4 from 'uuid/v4';

const initialState = {
    servers:[
        {
            "key":uuidv4(),
            "apps":[]
        },
        {
            "key":uuidv4(),
            "apps":[]
        },
        {
            "key":uuidv4(),
            "apps":[]
        },
        {
            "key":uuidv4(),
            "apps":[]
        }
    ],
    dialogs:{
        progress:{
            show:false,
            title:''
        },
        alert:{
            show:false,
            title:'',
            message:''
        }
    }
};


export const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
          thunk
        )
  ); 