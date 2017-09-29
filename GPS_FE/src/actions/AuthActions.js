import {	
		INPUT_CHANGE,	
		LOGIN_USER_SUCCESS,
		LOGIN_USER_FAIL,
		LOGIN_USER,
		CHECK_USER_SUCCESS,
		CHECK_USER_FAIL		
	   } from './types'


import {AsyncStorage} from 'react-native'
import axios from 'axios'
import {Actions} from 'react-native-router-flux'
import Secrets from 'react-native-config'



export const onInputChange = ({prop,value})=>{	
	return {
		type: INPUT_CHANGE,
		payload: {prop,value}
	}
}

export const checkLoginUser = () =>{

	//AsyncStorage.removeItem('token')
	return (dispatch) =>{

		AsyncStorage.getItem('token').then((token)=>{				
				if(token)
					dispatch({type: CHECK_USER_SUCCESS,	payload: {token}})		
				else
					dispatch({type: CHECK_USER_FAIL})
		})
	}



}

export const loginUser = ({email,password})=>{

	return (dispatch) =>{
		console.log(Secrets.SERVER_URL)
		if( !email  || !password)
			dispatch({type: LOGIN_USER_FAIL, payload: { error : 'Fill the fields'}})
		else
		{			
			dispatch({type: LOGIN_USER,	payload: {email,password}})			
			axios.post(Secrets.SERVER_URL +'/api/auth/login', {
		   		username: email, password: password
		 	},{
			  timeout: 500
			})
		  	.then((response)=> {
		  		  
			   let active_token = response.data.token
			   loginSuccess(dispatch,active_token)
			   
			})
		  	.catch((error)=> {
		  		// Try to Register 		  		
		  		registerUser(dispatch,email,password)	
		  	});		
		}
	}
}

const loginSuccess = (dispatch, token) =>{
	AsyncStorage.setItem('token',token)
	dispatch({type: LOGIN_USER_SUCCESS,	payload: {token}})
	Actions.TabBar({type: 'reset'})

}
const registerUser = (dispatch,email,password)=>{

		axios.post(Secrets.SERVER_URL +'/api/auth/register', {
		   		username: email, password: password
		})
		.then((response)=> {	
				  
			   let active_token = response.data.token
			   loginSuccess(dispatch,active_token)
		})
		.catch((error)=> {
		  		// Register Fail 		  		
		  		dispatch({type: LOGIN_USER_FAIL, payload: {error: 'Error to Login/Register'}})
		    	console.log(error);
		  	});		
}


	




/*
export const  Login = () => async dispatch =>{
		let token = await AsyncStorage.getItem('active_token')
		if(token){
			//Dispatch an action FB is done
			dispatch({type: LOGIN_SUCCESS, payload: token})
		}else{
			// Start up Login Process
			doFacebookLogin(dispatch)
		}
	}


const doFacebookLogin = async dispatch=>{
	let {token,type} = await Facebook.logInWithReadPermissionsAsync('315921242213376',{
		permissions: ['public_profile']
	})
	if(type==='cancel'){
			return dispatch({type: FB_LOGIN_FAIL})
	}

	await AsyncStorage.setItem('active_token', token)

	dispatch({type: FB_LOGIN_SUCCESS,payload: token})
	
}
*/