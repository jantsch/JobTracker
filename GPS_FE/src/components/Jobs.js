import React, { Component } from 'react';
import { View,Text} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { SearchBar, Card, Button } from 'react-native-elements'
import { saveJob}  from './../actions'
import { connect} from 'react-redux'
import { Swipe} from './common/'
import MapView from 'react-native-maps';
import MapStyle from './../../config/MapStyleConfig'

class Jobs extends Component{

  onSearchTextChange(text){
    this.props.searchBoxChanged(text)
  }

 
  renderCard(job){
     const InitialRegion ={
      latitude: job.latitude,
      longitude: job.longitude,
      longitudeDelta:  0.02,
      latitudeDelta: 0.045
    }
      return (
        <Card  title={job.jobtitle}>
          <View style={{height:220}}>
            <MapView
              scrollEnabled ={false}
              style={{flex:1}}
              cacheEnabled={true}
              initialRegion={InitialRegion}
              customMapStyle={MapStyle}
            >
             <MapView.Marker
              coordinate={job}
              title={job.company}
              description={job.jobtitle}
            />
            </MapView>
          </View>
          <View style={styles.detailWrapper}>
              <Text>{job.company}</Text>
              <Text>{job.formattedRelativeTime}</Text>
          </View>
          <Text>
              {job.snippet.replace(/<b>/g, '').replace(/<\/b/g,'')} 
          </Text>
        </Card>
      )

  }

  renderNoMoreCards(){
    return (
      <Card title="No more jobs">
        <Button title="Refresh Settings" onPress={()=> Actions.settingsScreen()}/>
      </Card>
    )

  }

  render(){
    return (
      <View>
          <View>
             <SearchBar
                onChangeText={this.onSearchTextChange.bind(this)}
                placeholder='Type Here...' 
                value={this.props.search_text}
             />
          </View>
          <View>
            <Swipe 
               data={this.props.jobs}
               renderCard={this.renderCard}
               renderNoMoreCards = {this.renderNoMoreCards}
               keyProp="jobKey"
               onSwipeRight ={job => this.props.saveJob(job) }

            />
          </View>
      </View>
      );
    }
  }

const styles ={
  detailWrapper:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  }
}

const mapStatetoProps = state =>{
  const {results} = state.jobs.data
  return {jobs: results}
}

export default connect(mapStatetoProps,{saveJob})(Jobs);