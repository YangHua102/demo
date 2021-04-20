import * as Actions from '../actions/types'

const userState={
    userData:[
        {
            "name":"user1",
            "password":"user1",
            "email":'Max.Mustermann@demo.test',
            "token":"P_2021001"

        },
        {
            "name":"user2",
            "password":"user2",
            "email":'anna.Mustermann@demo.test',
            "token":"P_2021002"

        },
        {
            "name":"company1",
            "password":"company1",
            "email":'company_1@demo.test',
            "token":"C_2021001"

        },
        {
            "name":"company2",
            "password":"company2",
            "email":'company_2@demo.test',
            "token":"C_2021002"

        },
    ],
    userName:'',
    token:'',
    error:''
}

export default function loginStateStore(state=userState, action){
    if(state === 'undefined'){
        return userState
    }
    let reducer;

    switch(action.type){
        case Actions.LOGIN_REQUEST: reducer=Object.assign({},state,{
            userName:action.payload.name,
            token:action.payload.token
        }); break;
        case Actions.LOGIN_FAILED:{
            reducer=Object.assign({},state,{
                error:action.payload
            });break;
        }
        case Actions.LOGOUT: reducer='undefined';break;
        default:reducer=state;break;
    }
    return reducer;
}