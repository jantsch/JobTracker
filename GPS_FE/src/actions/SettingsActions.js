import axios from 'axios'
import {Actions} from 'react-native-router-flux' 
import {	
		SETTINGS_CHANGE	
	   } from './types'


export const onSettingsChange = ({prop,value}) => {
	return {		
		type: SETTINGS_CHANGE,
		payload: {prop,value}

	}
}
