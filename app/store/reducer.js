import {combineReducers} from 'redux';
import home from './reducers/home';
import detail from './reducers/detail';
import editor from './reducers/editor';
import profile from './reducers/profile';

export default combineReducers({
	home,
	detail,
	editor,
	profile
})
