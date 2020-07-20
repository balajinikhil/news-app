
import {combineReducers} from 'redux'

const topHeadLinesReducer = (news=[], action )=>{

    switch (action.type){
        case 'TOP_HEADLINES':
            return action.payload;
        case 'SEARCH':
            return action.payload; 
            
        default:
            return news
    }

}


const sourcesReducer = (source = [], action)=>{
    switch(action.type){
        case 'SOURCES':
            return action.payload
        default :
            return source
    }
}


export default combineReducers({
    top:topHeadLinesReducer,
    source: sourcesReducer
})