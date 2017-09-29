import {
		SETTINGS_CHANGE
	} from '../actions/types'


const INITIAL_STATE ={
	region: {
			longitude: -122.4194,
			latitude: 37.7749,
			longitudeDelta: 0.04,
			latitudeDelta: 0.09
		},
	keywords: ''
}


export default (state=INITIAL_STATE,action) => {	
	switch(action.type){
		case SETTINGS_CHANGE:
			return {...state,[action.payload.prop]: action.payload.value}		
		default:
			return state

	}

}