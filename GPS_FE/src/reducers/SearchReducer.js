import {		
		SEARCH_USERS,
		SEARCH_USERS_SUCCESS,
		SEARCH_USERS_FAIL		
	} from '../actions/types'


const INITIAL_STATE ={
	search_text: '',	
	loading : false,
	users: []
}




export default (state=INITIAL_STATE,action) => {
	

	switch(action.type){

		case SEARCH_USERS:
			return { email: action.payload,loading: true,users: [] }		
		case SEARCH_USERS_SUCCESS:
			return {...state, loading: false, users: action.payload}
		case SEARCH_USERS_FAIL:
			return {...state, error: 'Search Failed.', loading: false}
		default:
			return state

	}

}