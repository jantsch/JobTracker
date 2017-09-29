import _ from 'lodash'	   
import {REHYDRATE} from 'redux-persist/constants'

import {	
		SAVE_JOB
	   } from '../actions/types'





export default (state = [],action) => {	

	switch(action.type){

		case REHYDRATE:
			return action.payload.myJobs || [] 

		case SAVE_JOB:
			return  _.uniqBy([action.payload, ...state],'jobkey')
		default:
			return state
	}
}