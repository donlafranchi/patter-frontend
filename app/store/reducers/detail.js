import {
	DETAIL_PAGE_LOADED,
	DETAIL_PAGE_UNLOADED
} from '../actionTypes.js';

export default (state={}, action) => {
  switch (action.type) {
    case DETAIL_PAGE_LOADED:
    	return {
    		...state,
    		events : action.payload.events,
    		detailPageLoaded : true
    	};
    case DETAIL_PAGE_UNLOADED: 
    	return {};
	default:
		return state;
  }
}