
import Secrets from 'react-native-config'

import { 
		 google,
		 facebook,
		 twitter 
	   } from 'react-native-simple-auth';

const config =  { 
  facebook: {
    appId: '315921242213376',
    callback: 'fb315921242213376'
  },
  google: {
    appId: '1023223252180-gsqv9bffq6vq80pua308oasshb8iqr7v.apps.googleusercontent.com',
    callback: 'com.jobtracker:/oauth2redirect'
  },
  twitter: {
  	appId: 'LB9mAEn0S75oG6EPT2IkMk7KN',
	appSecret: '9LigmPRSu7yI81u8SEX0CHDYF64uQLlthwidWDwfjVjsJUTanz',
	callback: 'com.jobtracker://authorize',
  }
}



const SocialLoginAPI = Provider =>{

	switch(Provider)
	{
		case 'facebook': 
			return facebook({appId: '315921242213376', callback: 'fb315921242213376://authorize',})
		case 'twitter':
			return twitter({appId: 'LB9mAEn0S75oG6EPT2IkMk7KN',appSecret: '9LigmPRSu7yI81u8SEX0CHDYF64uQLlthwidWDwfjVjsJUTanz',callback: 'com.jobtracker://authorize',})
		case 'google':
			return google({appId: '1023223252180-gsqv9bffq6vq80pua308oasshb8iqr7v.apps.googleusercontent.com',callback: 'com.jobtracker:/oauth2redirect',})
	}
}

export default SocialLoginAPI

