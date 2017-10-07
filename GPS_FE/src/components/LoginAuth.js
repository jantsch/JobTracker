import React, {Component} from 'react'
import { 
		Button,
		FormValidationMessage
		} from 'react-native-elements'
import { View } from 'react-native'
import { 
		Input,
		Spinner,
		DeafultUpperImage
		} from './common'
import { connect} from 'react-redux'
import { onInputChange, loginUser} from './../actions'
import {Actions} from 'react-native-router-flux'



class LoginAuth extends Component{

	
	
	

	onButtonPress(){
		const {email,password} = this.props		
		this.props.loginUser({email,password})			
	}

	renderButton(){	
		if(this.props.loading)
		{
			return (<View style={styles.containerSpinner}><Spinner  size='large'/></View> )
		}
		return (	
			<Button  raised  buttonStyle={styles.buttonStyle} title='Signin'  onPress={this.onButtonPress.bind(this)} /> 	
		)
	}



	render(){
		const {
				containerStyle,
				textStyle,
				bottomContainerStyle 
			  } = styles	
		
		return(
			<View style={containerStyle}>
				<DeafultUpperImage />
				<View style={bottomContainerStyle}>
						<Input onChangeText={(text)=> this.props.onInputChange({prop: 'email', value: text})}> Username </Input>	
						<Input isPassword={true} onChangeText={(text)=> this.props.onInputChange({prop: 'password', value: text})}> Password </Input>						
						<FormValidationMessage>{this.props.error}</FormValidationMessage> 						
						{this.renderButton()}
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
	containerSpinner:{
		paddingTop: 20,
		paddingBottom: 30
	},
	bottomContainerStyle: {			
		justifyContent: 'flex-end',
		paddingBottom: 30
	},
	buttonStyle:{
		backgroundColor: '#7D192D'
	}
	
}

const mapStateToProps = (state) =>{
	const  { email, password, error, loading } = state.auth
	return { email, password, error, loading }
}

export default connect(mapStateToProps,{onInputChange,loginUser})(LoginAuth)