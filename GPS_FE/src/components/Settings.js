import React, { Component } from 'react';
import { 
  Text,
  View
} from 'react-native';
import {Input,Spinner} from './common'
import { Button } from 'react-native-elements'
import MapView from 'react-native-maps';
import MapStyle from './../../config/MapStyleConfig'
import {connect} from 'react-redux'
import { fetchJobs, onSettingsChange } from './../actions'

class Settings extends Component{	

	onButtonPress =() =>{
		this.props.fetchJobs(this.props.region,this.props.keyword)
	}

	renderButton(){	
		if(this.props.loading)
		{
			return (<Spinner size='small'/> )
		}
		return (	
			<Button 
		    	 	raised	
					icon={{name: 'cached'}}
					title='Save' 
					onPress={this.onButtonPress.bind(this)}
		    /> 	
		)
	}

	render(){
		return(	
			<View style={styles.containerStyle}>		
			    <Input 
			   		onChangeText={(text) =>  this.props.onSettingsChange({prop: 'keyword', value: text})} 
			   		value={this.props.keyword}
			   		stylesProp={{color:'black'}}
			   	> 
			   		Jobs 
			   	</Input>
			   <View style={styles.mapViewInputStyle}>
				   <Text>Pick location to search: </Text>
				   <MapView 
					    region={this.props.region}		     	
				     	onRegionChangeComplete={(region) =>  this.props.onSettingsChange({prop: 'region', value: region})}
				     	customMapStyle={MapStyle}
				     	style={{height:290, width:330 }} 
			    	/>
			    </View>
			    {this.renderButton()}
		    	
		    
			</View>				
		)
	}
}


const styles ={
	containerStyle:{
		marginTop: 50,
		flex: 1,
		marginBottom: 70,
	},
	mapViewInputStyle:{
		marginLeft: 15

	}
}

const mapStateToProps = state => {
	  return{
	  	region: state.settings.region,
	  	keyword:  state.settings.keyword,
	  	loading: state.jobs.loading
	  }	
}

export default connect(mapStateToProps,{fetchJobs,onSettingsChange})(Settings)