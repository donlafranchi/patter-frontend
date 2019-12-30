import {
	HOME_PAGE_LOADED,
	HOME_PAGE_UNLOADED
} from '../actionTypes.js';

export default function(state={}, action){
  switch (action.type) {
    case HOME_PAGE_LOADED:
		return {
			...state,
			events : action.payload.events,
			homePageLoaded : true
		};
    case HOME_PAGE_UNLOADED: 
    	return {};
	default:
		return state;
  }
  return count;
}