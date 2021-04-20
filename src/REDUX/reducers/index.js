import {combineReducers} from 'redux';

import loginStore from './userLoginReducers'
import chatStore from './userChatReducers'
import profileStore from './userProfileReducers'

const reducers=combineReducers({
    loginStore,
    chatStore,
    profileStore
});

export default reducers;