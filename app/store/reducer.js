import {combineReducers} from 'redux';
import Home from './reducers/home';
import Detail from './reducers/detail';
import Editor from './reducers/editor';
import Profile from './reducers/profile';

export default combineReducers({
	Home,
	Detail,
	Editor,
	Profile
})
