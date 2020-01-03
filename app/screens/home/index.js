import React from 'react';
import { View, TouchableOpacity, Text, ScrollView, Image, Button, 
	ActivityIndicator } from 'react-native';
// import { Button } from 'native-base';

import styles from './styles';
import { g_styles } from '../../../styleConsts';
import Modal from "react-native-modal";
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-datepicker';
import { connect } from "react-redux";
import {
	HOME_PAGE_LOADED,
	HOME_PAGE_UNLOADED,
	HOME_PAGE_FILTER,
	UPDATE_FIELD
} from '../../store/actionTypes';
import apis from '../../apis';


const mapStateProps = state => ({
	...state.home,
	homePageLoaded : state.home.homePageLoaded,
	events : state.home.events,
	venues : state.home.venues
})

const mapDispatchToProps = dispatch => ({
	onLoad: (payload) => 
		dispatch({type : HOME_PAGE_LOADED, payload}),
	onFilter: (payload) => 
		dispatch({type : HOME_PAGE_FILTER, payload}),
	onUnload: (payload) => 
		dispatch({type : HOME_PAGE_UNLOADED }),
	onUpdateField : (key, value) => 
		dispatch({type : UPDATE_FIELD, key, value})
})

class HomeScreen extends React.Component {

	constructor() {
		super();

		this.state = {
			isModalVisible: false,
			date: "2019-12-30",
			category : '',
			location : ''
		}

		this.toggleModal = () =>  {
			this.setState({ isModalVisible: !this.state.isModalVisible });
		}

	    this.onChangeCategory = (item) => {
	    	this.setState({ category : item });
	    }

	    this.onChangeLocation = (item) => {
	    	this.setState({ location : item });
	    }

		this.handleFilter = () => {
			var params = {
				date : this.state.date,
				category : this.state.category,
				location : this.state.location
			}
			this.props.onFilter(apis.Events.filter(params));
			this.setState({ isModalVisible: !this.state.isModalVisible });
		}

		this.handleMyEvents = () => {
			// my events action here
		}

		this.handleAddEvent = () => {
			// add event action here
		}
	}

	componentDidMount() {
		this.props.onLoad(Promise.all([apis.Events.all(), apis.Venue.all()]));
	}

	render() {

		var navigate = this.props.navigation.navigate;

		const items = [
            { label: 'Artsy', value:'artsy' },
            { label: 'Boozey', value: 'boozey' },
            { label: 'Charity', value: 'charty' },
            { label: 'Craftsy', value: 'craftsy' },
            { label: 'Foody', value: 'foody' },
            { label: 'Musicy', value: 'musicy' },
            { label: 'Petsy', value: 'petsy' }
        ];

        var locations = [];

        this.props.venues && this.props.venues.map(venue => {
        	locations.push({
        		label : venue.name,
        		value : venue.id
        	})
        })

		var events = this.props.events || [];

		return (
			<View>
	            <ScrollView style={ styles.event_list }>
	               {
	                  events.map((event, index) => (
	                     <TouchableOpacity key = {event.id} style = {styles.event} 
	                     	onPress={() => 
	                     		{ 
	                     			navigate(
	                     				'detail', {	event: event }
                 					)
	                     		}
	                     	} >
	                     	<View>
		                     	<Image
		                     		source = {{ uri: event.url }} 
		                     		style = {styles.image} />
		                        <Text style={ styles.event_name }>{event.name}</Text>
		                        <Text style={ styles.event_desc }>{event.description}</Text>
	                        </View>
	                     </TouchableOpacity>
	                  ))
	               }
	            </ScrollView>
	            <View style = {styles.btn_group}>
		            <Button
						onPress={this.toggleModal}
						title = "Filter Events"
						color = "#ffffff"
			      	/>
			      	<Button
						onPress={() => { navigate('home'); } }
						title = "My Events"
						color = "#ffffff"
			      	/>
			      	<Button
						onPress={() => { navigate('editor');}}
						title = "Add Event"
						color = "#ffffff"
			      	/>
		      	</View>
		        <Modal isVisible={this.state.isModalVisible}
		        	style = { styles.modal_container }>
					<View >
						<Text style={ styles.modal_header }>Filter Events</Text>
						<Text style={ styles.label }>Category</Text>
						<RNPickerSelect
				            onValueChange={this.onChangeCategory}
				            placeholder={{ label : "Select a category" }}
				            items={items}
				            style={ styles.select }
				        />
				        <Text style={ styles.label }>Date</Text>
				        <DatePicker
					        date={this.state.date}
					        mode="date"
					        placeholder="Select date"
					        format="YYYY-MM-DD"
					        minDate="2016-05-01"
					        maxDate="2016-06-01"
					        confirmBtnText="Confirm"
					        cancelBtnText="Cancel"
					        customStyles={{
					          dateIcon: {
					            position: 'absolute',
					            left: 0,
					            top: 4,
					            marginLeft: 0
					          },
					          dateInput: {
					            marginLeft: 36,
					            fontSize : 18
					          }
					        }}
					        onDateChange={(date) => {this.setState({date: date})}}
					      />
					    <Text style={ styles.label }>Location</Text>
						<RNPickerSelect
				            onValueChange={this.onChangeLocation}
				            placeholder={{ label : "Select a location" }}
				            items={locations}
				            style={ styles.select }
				        />
					</View>
					<Button title="Apply" onPress={this.handleFilter} />
		        </Modal>
	         </View>
		)
	}
}

export default connect(mapStateProps, mapDispatchToProps)(HomeScreen);
