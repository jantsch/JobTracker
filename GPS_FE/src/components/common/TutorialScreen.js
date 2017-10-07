import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native'
import {Actions} from 'react-native-router-flux'
import {Button} from 'react-native-elements'



const TutorialScreen = ({styles,color,mainText,subtitle,img,button}) =>{

    
    renderImage =() =>{      
      if(img == "manage")
       return <Image style={styles.imageStyle} source={require("./../../../img/manage.png" )}  />  
      if(img == "find")
       return <Image style={styles.imageStyle} source={require("./../../../img/find.png")}  /> 
    }
    renderButton =() =>{      
      if(button)
       return (  
        <View style={styles.buttonStyle}>
          <Button  raised title='Continue'  onPress={()=> Actions.socialLogin()} />
        </View>    
      )  
    }

	  return (	   
		  <View style={[styles.containerStyle,color]}>   
        {this.renderImage()} 
		    <Text style={styles.text}>{mainText}</Text>
        <Text style={styles.subtitleStyle}>{subtitle}</Text>
          {this.renderButton()} 
		  </View>
	 	)
	
}


export  {TutorialScreen};