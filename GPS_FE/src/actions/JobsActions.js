import axios from 'axios'
import qs from 'qs'
import reverseGeocode from 'latlng-to-zip' 
import {Actions} from 'react-native-router-flux' 
import {	
		FETCH_ID_JOBS,
		FETCH_ID_JOBS_SUCCESS,
		FETCH_ID_JOBS_FAIL,
		SAVE_JOB
	   } from './types'


const JOB_ID_ROOT_URL = 'http://api.indeed.com/ads/apisearch?' 
const JOB_QUERY_PARAMS = {
	publisher: '4201738803816157',
	format: 'json', 
	v: '2',
	latlong: 1,
	radius: 10
}

const buildJobsIdUrl = (zip,keywords) =>{
	const query = qs.stringify({...JOB_QUERY_PARAMS,l: zip, q: keywords})
	return JOB_ID_ROOT_URL + query
}

export const fetchJobs = (region,keywords) =>  async dispatch =>{	

	dispatch({type: FETCH_ID_JOBS})

	try{
		let zip = await reverseGeocode(region)
		const url = buildJobsIdUrl(zip,keywords)
	 	let {data} =  await axios.get(url)	 	
	 	dispatch({type: FETCH_ID_JOBS_SUCCESS,payload: data})
	 	Actions.jobsScreen({type: 'reset'});
	 	console.log(data);
	} catch(e){
		
		dispatch({type: FETCH_ID_JOBS_FAIL,payload: {error: "Impossible to Fetch Data. Try again."}})
		console.log(e);

	}
}

export const saveJob = (job) => {

	return {
		payload: job,
		type: SAVE_JOB

	}



}
