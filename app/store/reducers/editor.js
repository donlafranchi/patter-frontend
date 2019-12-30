import {
	EDITOR_PAGE_LOADED,
	EDITOR_PAGE_UNLOADED
} from '../actionTypes.js';

export default function(state={}, action){
  switch (action.type) {
    case EDITOR_PAGE_LOADED:
    	return {
    		...state,
    		events : action.payload.events,
    		editorPageLoaded : true
    	};
    case EDITOR_PAGE_UNLOADED: 
    	return {};
	default:
		return state;
  }
  return count;
}