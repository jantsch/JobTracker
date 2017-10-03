import React,{Component} from 'react'
import {Scene,Router,Actions} from 'react-native-router-flux'
import {View,Text,Image} from 'react-native'
import _ from 'lodash'
import LoginAuth from './components/LoginAuth'
import MyJobs from './components/MyJobs'
import Jobs from './components/Jobs'
import Settings from './components/Settings'
import TutorialScreens from './components/TutorialScreens'
import { connect} from 'react-redux'
import { checkLoginUser} from './actions'
import {LoadingScreen} from './components/common'
import SplashScreen from 'react-native-splash-screen'
import registerNotifications from './services/PushNotifications'
// Simple component to render something in place of icon
const TabView = ({ selected, title }) => {
  
  tabIcon = () => {
	  	const {imageStyle} = styles
	  	
	  	switch(title)
	  	{	  		
	  		case 'Jobs':
	  			return (
			  		<Image  
			  		  	style={imageStyle}   
			  		  	source={require('./../img/jobs.png')}  
	  				/>
	  			)
	  		case 'My Jobs':
	  			return (
			  		<Image  
			  		  	style={imageStyle}   
			  		  	source={require('./../img/saved-jobs.png')}  
	  				/>
	  			)	  		
	  	}
  }


  return (
  	<View>
  		{this.tabIcon()}	  	
	    <Text style={{color: selected ? '#7D192D' :'white'}}>
	    	{title}
	    </Text>
    </View>
  );
}


class RouterComponent extends Component{

	componentWillMount(){
		this.props.checkLoginUser()
		registerNotifications()
	}

	render(){	
		 if (_.isNull(this.props.token)) {	
		 	SplashScreen.hide() 	
		    return (
		        <LoadingScreen />
		    )
		 }
		 else{
			const {navBar,tabBarStyle, titleNavBarStyle } = styles			
			return (
				<Router navigationBarStyle={navBar} titleStyle={titleNavBarStyle} >	
					<Scene key="root">		
						<Scene key="auth">							
							<Scene 
								key="tutorialScreen"
								component={TutorialScreens}								
								hideNavBar={true}
								initial={!this.props.token}								
							/>	
							<Scene 
								key="authPage"
								component={LoginAuth}								
								hideNavBar={true}							
							/>					
						</Scene>
						<Scene key="TabBar" tabs={true} hideNavBar tabBarStyle={tabBarStyle} initial={this.props.token}	>
						    <Scene 
							    key="jobs" 
							    title="Jobs" 
							    icon={TabView} 	
							    onRight={ ()=> Actions.settingsScreen() }
	           					rightButtonImage={require('./../img/settings.png')}			  
						   >
	                        <Scene key="jobsScreen"  title="JobTracker"  initial component={Jobs}/>
					        <Scene key="settingsScreen"  title="Settings"   rightButtonImage={null} component={Settings}/>
					    </Scene>						  					    	
					    <Scene 
							    key="myJobs" 
							    title="My Jobs" 
							    icon={TabView} 				  
							   >
						      <Scene key="myJobsScreen"  title="JobTracker"  component={MyJobs}/>
						    </Scene>
						</Scene>
					</Scene>
				</Router>
				)
		}			
	}
}

const styles ={
	tabBarStyle: {                  
            backgroundColor: '#353f40',
            opacity        : 1,
            height: 60
        },
     navBar: {
   		  backgroundColor: '#353f40',
   		  borderBottomWidth: 0 
	},
	titleNavBarStyle: {
		 color : "#FFF"
	},
	imageStyle:{
		width: 30,
	 	height: 30,
		alignSelf: 'center'
	}
}
const mapStateToProps = state =>{
	return {
		token: state.auth.token
	}

}
export default connect(mapStateToProps,{checkLoginUser})(RouterComponent)