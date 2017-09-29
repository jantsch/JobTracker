import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native'
import Swiper from 'react-native-swiper'
import {TutorialScreen} from './common'


class TutorialScreens extends Component{

	 
	render(){
	  return (
	    <Swiper loop={false}>      
        <TutorialScreen mainText='Welcome!'  styles={styles} color={styles.screen1} />   
        <TutorialScreen mainText='Manage the jobs you apply!' color={styles.screen2}  subtitle='Keep a log of the jobs you want to apply and access the status of each one of them.' img='manage'  styles={styles} />
        <TutorialScreen mainText='Find the jobs you want!' color={styles.screen3}  subtitle='Here is everything you need to have to find the job you are looking for: location, requirements and required documents.' img='find' button styles={styles} />
  	  </Swiper>
	 	 );
	}
}
var styles = {
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DE6C73'
  },
  text: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 15
  },
  subtitleStyle:{
    color: '#fff',
    fontSize: 14,
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
    textAlign: 'center'
  },
  imageStyle:{
    width: 150,
    height: 150,
    alignSelf: 'center'
  },
  buttonStyle: {
    marginTop: 50
  },
  screen1:{
      backgroundColor: '#3566DE'
  },
  screen2:{
      backgroundColor: '#58BF77'
  },
   screen3:{
      backgroundColor: '#DE6C73'
  }
}



export default TutorialScreens;