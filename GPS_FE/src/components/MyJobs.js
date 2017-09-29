import React, { Component } from 'react';
import { 
  Text,
  View,
  ListView,
  Linking
} from 'react-native';
import {List, ListItem,Avatar} from 'react-native-elements'
import { connect} from 'react-redux'



class MyJobs extends Component{


	

	componentWillMount(){		
		// Used when you return to the component
		this.createDataSource(this.props)
	}
	componentWillReceiveProps(nextProps){
		// Used first time.
		this.createDataSource(nextProps)
	}


	createDataSource({myJobs}){
		const ds = new ListView.DataSource({
			rowHasChanged: (r1,r2) => r1 !==r2
		})
		this.dataSource = ds.cloneWithRows(myJobs)
	}
	


	renderSavedJob(job, sectionID){		
		const {company,jobtitle,url,jobkey} = job
		return (
			 <ListItem
			      avatar={<Avatar
			                rounded
			                source={job.avatar_url && {uri: job.avatar_url}}
			                title={company[0]}
			              />}
			      key={jobkey}
			      title={jobtitle}
			      subtitle={company}
			      rightTitle='Apply'
			      onPressRightIcon ={() => Linking.openURL(url)}
			    />
		)
	}
	render(){		
		return(			
			<List style={styles.listStyle}>
			      <ListView
			        renderRow={this.renderSavedJob}
			        dataSource={this.dataSource}
			      />
			</List>	
		)
	}
}


const styles ={
	listStyle:{
		marginTop:50
	}
}

const mapStateToProps = state =>{
	return {
		myJobs : state.myJobs
	}


}
export default connect(mapStateToProps,null)(MyJobs)