import {
	HOME_PAGE_LOADED,
	HOME_PAGE_UNLOADED,
	HOME_PAGE_FILTER,
	UPDATE_FIELD
} from '../actionTypes';

export default (state={}, action) => {
  switch (action.type) {
    case HOME_PAGE_LOADED:
		return {
			...state,
			events : action.payload[0].results,
			venues : action.payload[1].results,
			homePageLoaded : true
		};
	case HOME_PAGE_FILTER:
		return {
			...state,
			events : action.payload.results
		}
    case HOME_PAGE_UNLOADED: 
    	return {};
	case UPDATE_FIELD :
		return {
			...state,
			[action.key] : action.value
		};
	default:
		return state;
  }
};