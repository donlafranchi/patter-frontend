import React from 'react';
import { View, TouchableOpacity, Text, ScrollView, Image, Button, 
	ActivityIndicator } from 'react-native';
// import { Button } from 'native-base';

import styles from './styles';
import { g_styles } from '../../../styleConsts';
import Modal from "react-native-modal";
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-datepicker';


class HomeScreen extends React.Component {

	constructor() {
		super();

		this.state = {
			isModalVisible: false,
			date: "2019-12-30"
		}

		this.toggleModal = () => {
		    this.setState({ isModalVisible: !this.state.isModalVisible });
	  	};

	    this._onChange = (item) => {
	        // the full item as defined in the list of items is passed to the onChange handler to give full
	        // flexibility on what to do... 
	    }

		this.handleFilter = () => {
			// filter action here

		}

		this.handleMyEvents = () => {
			// my events action here
		}

		this.handleAddEvent = () => {
			// add event action here
		}
	}

	componentDidUpdate() {
	}

	render() {

		var navigate = this.props.navigation.navigate;

		const items = [
            { label: 'Sports', value:'sports' },
            { label: 'Health', value: 'health' },
            { label: 'Culture', value: 'culture' }
        ];

        const locations = [
        	{ label : 'Toronto', value : 'toronto' },
        	{ label : 'Vancouver', value : 'vancouver' },
        	{ label : 'Montreal', value : 'montreal' }
    	];

		var events = [
				{
					'id': '1', 
					'name': 'Quebec City Walking Tour', 
					'desc': 'Explore Niagara Falls your way on a stress-free day trip from Toronto, which also includes wine tasting at a local winery. Explore the falls at your own pace during roughly three hours of free time', 
					'image' : 'https://media-cdn.tripadvisor.com/media/photo-s/1a/65/1e/80/caption.jpg'
				},
				{
					'id': '2', 
					'name': 'Niagara Falls, Canada: Voyage to the Falls Boat Tour in Canada', 
					'desc': 'Get up close to Niagara Falls on this boat tour that cruises from the Canadian side of the border. Feel the power of the massive waterfalls as you motor past American Falls, Bridal Veil Falls', 
					'image' : 'https://media-cdn.tripadvisor.com/media/photo-s/1a/54/3d/3e/caption.jpg'
				},
				{	
					'id': '3', 
					'name': 'Vancouver City Tour Including Capilano Suspension Bridge', 
					'desc': 'In addition to top Vancouver sights such as Stanley Park and Robson Street, this Vancouver sightseeing tour includes a trip to the Capilano Suspension Bridge', 
					'image' : 'https://media-cdn.tripadvisor.com/media/photo-s/1a/57/a1/91/caption.jpg'
				}
	      ];

		return (
			<View>
	            <ScrollView style={ styles.event_list }>
	               {
	                  events.map((event, index) => (
	                     <TouchableOpacity key = {event.id} style = {styles.event} 
	                     	onPress={() => { navigate('detail');}} >
	                     	<View>
		                     	<Image
		                     		source = {{ uri: event.image }} 
		                     		style = {styles.image} />
		                        <Text style={ styles.event_name }>{event.name}</Text>
		                        <Text style={ styles.event_desc }>{event.desc}</Text>
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
						onPress={() => { navigate('profile');}}
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
				            onValueChange={this._onChange}
				            placeholder={{ label : "Select a category" }}
				            items={items}
				            style={ styles.select }
				        />
				        <Text style={ styles.label }>Date</Text>
				        <DatePicker
					        style={styles.dataPicker}
					        date={this.state.date}
					        mode="date"
					        placeholder="select date"
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
					            marginLeft: 36
					          }
					        }}
					        onDateChange={(date) => {this.setState({date: date})}}
					      />
					    <Text style={ styles.label }>Location</Text>
						<RNPickerSelect
				            onValueChange={this._onChange}
				            placeholder={{ label : "Select a location" }}
				            items={locations}
				            style={ styles.select }
				        />
					</View>
					<Button title="Apply" onPress={this.toggleModal} />
		        </Modal>
	         </View>
		)
	}
}

export default HomeScreen;
