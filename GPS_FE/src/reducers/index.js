import {combineReducers} from 'redux'
import AuthReducer from './AuthReducer'
import SearchReducer from './SearchReducer'
import JobsReducer from './JobsReducer'
import MyJobsReducer from './MyJobsReducer'
import SettingsReducer from './SettingsReducer'

export default combineReducers({
	auth: AuthReducer,
	search: SearchReducer,
	jobs: JobsReducer,
	myJobs: MyJobsReducer,
	settings: SettingsReducer
})