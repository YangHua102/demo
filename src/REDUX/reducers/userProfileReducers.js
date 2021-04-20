import * as Actions from '../actions/types'

const profileState={
    profileData:[],
    profile:{},
    languages:{},
    error:''
}

export default function profileStore(state=profileState,action){
    if(state === 'undefined'){
        return profileState
    }
    let reducer;
    switch (action.type) {
        case Actions.GET_PROFILE:
            reducer=Object.assign({},state,{
                profile:action.payload.user,
                languages:action.payload.languages
            })
            break;
    
        default:reducer=state;
            break;
    }
    return reducer;
}