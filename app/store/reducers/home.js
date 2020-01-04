import {
	HOME_PAGE_LOADED,
	HOME_PAGE_UNLOADED,
	HOME_PAGE_FILTER,
	EVENT_CREATED,
	UPDATE_FIELD
} from '../actionTypes';

export default (state={}, action) => {
	switch (action.type) {
		case HOME_PAGE_LOADED:
		return {
			...state,
			events : action.payload[0].results,
			venues : action.payload[1].results,
			homePageLoaded : true,
			baseUrl : 'http://167.172.124.71/'
		};
	case HOME_PAGE_FILTER:
		return {
			...state,
			events : action.payload.results
		}
		case HOME_PAGE_UNLOADED: 
			return {};
	case EVENT_CREATED:
		return {
			...state,
			events : (state.events || [] ).concat([action.payload])
		}
	case UPDATE_FIELD :
		return {
			...state,
			[action.key] : action.value
		};
	default:
		return state;
	}
};