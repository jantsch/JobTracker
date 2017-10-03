import {AsyncStorage} from 'react-native'
import PushNotification  from  'react-native-push-notification';
import Secrets from 'react-native-config'
import axios from 'axios'




export default async () =>{
	let previousToken = await AsyncStorage.getItem('pushtoken')
	console.log(previousToken);
	if(previousToken)
	{
		console.log("Entrei");
		return
	}
	else
	{
		console.log("Entrei2");
		PushNotification.configure({

		    // (optional) Called when Token is generated (iOS and Android)
		    onRegister: function(token) {
		        console.log( 'TOKEN:', token );
		        
		        //Save in Server and Save with AsyncStorage
		    },

		    // (required) Called when a remote or local notification is opened or received
		    onNotification: function(notification) {
		        console.log( 'NOTIFICATION:', notification );
		    },

		    // ANDROID ONLY: GCM Sender ID (optional - not required for local notifications, but is need to receive remote push notifications)
		    senderID: Secrets.SENDER_ID_PUSH,

		    // IOS ONLY (optional): default: all - Permissions to register.
		    permissions: {
		        alert: true,
		        badge: true,
		        sound: true
		    },

		    // Should the initial notification be popped automatically
		    // default: true
		    popInitialNotification: true,

		    /**
		      * (optional) default: true
		      * - Specified if permissions (ios) and token (android and ios) will requested or not,
		      * - if not, you must call PushNotificationsHandler.requestPermissions() later
		      */
		    requestPermissions: true,
		});
	}



}