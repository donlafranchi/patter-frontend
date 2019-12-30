import {combineReducers} from 'redux';
import App from './reducers/app';
import Home from './reducers/home';
import Detail from './reducers/detail';
import Editor from './reducers/editor';
import Profile from './reducers/profile';

export default combineReducers({
	App,
	Home,
	Detail,
	Editor,
	Profile
})
