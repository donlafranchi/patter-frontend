import {
	PROFILE_PAGE_LOADED,
	PROFILE_PAGE_UNLOADED
} from '../actionTypes.js';

export default (state={}, action) => {
	switch (action.type) {
		case PROFILE_PAGE_LOADED:
			return {
				...state,
				events : action.payload.events,
				profilePageLoaded : true
			};
		case PROFILE_PAGE_UNLOADED: 
			return {};
	default:
		return state;
	}
}