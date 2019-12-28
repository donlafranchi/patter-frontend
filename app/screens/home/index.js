import React from 'react';
import { View, TouchableOpacity, Text, ScrollView, Image, Button, 
	ActivityIndicator } from 'react-native';
// import { Button } from 'native-base';

import styles from './styles';
import { g_styles } from '../../../styleConsts';

class HomeScreen extends React.Component {

	constructor() {
		super();

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
						onPress = {this.handleFilter}
						title = "Filter Events"
						color = "#ffffff"
			      	/>
			      	<Button
						onPress = {this.handleMyEvents}
						title = "My Events"
						color = "#ffffff"
			      	/>
			      	<Button
						onPress = {this.handleAddEvent}
						title = "Add Event"
						color = "#ffffff"
			      	/>
		      	</View>
	         </View>
		)
	}
}

export default HomeScreen;
