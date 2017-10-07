import React, {Component} from 'react'
import { SocialIcon } from 'react-native-elements'
import { View } from 'react-native'
import { 
		Input,
		Spinner,
		DeafultUpperImage
		} from './common'
import { loginWithProvider } from './../actions'
import { Actions } from 'react-native-router-flux'
import { connect} from 'react-redux'



class SocialLogin extends Component{	
	

	onButtonPress(provider){
		console.log(provider);	
		this.props.loginWithProvider(provider)			
	}

	render(){
		const {
				containerStyle,	
				socialBtnContainer
			  } = styles	
		
		return(
			<View style={containerStyle}>
				<DeafultUpperImage />
				<View style={socialBtnContainer}>
					<SocialIcon
					  title='Sign In With Facebook'
					  button
					  type='facebook'
					  onLongPress={ ()=> this.onButtonPress('facebook')}
					/>
					<SocialIcon
					  title='Sign In With Twitter'
					  button
					  type='twitter'
					  onLongPress={ ()=> this.onButtonPress('twitter')}
					/>
					<SocialIcon
					  title='Sign In With Google+'
					  button
					  type='google-plus-official'
					  onLongPress={ ()=> this.onButtonPress('google')}
					/>
					<SocialIcon
					  title='Sign In With New Credentials'
					  button
					  light	
					  onLongPress={ ()=> Actions.authPage()}			  
					/>
				</View>
			</View>
		)
	}
}

const styles={
	containerStyle:{
		backgroundColor: '#353f40',
		flex: 1
	},	
	socialBtnContainer:{
		justifyContent: 'space-around',
		paddingBottom: 15
	}	
}




export default connect(null,{loginWithProvider}) (SocialLogin)