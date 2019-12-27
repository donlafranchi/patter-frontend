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
					'name': 'event1', 
					'desc': 'event1 info', 
					'image' : 'https://blog.hubspot.com/hubfs/Sales_Blog/best-real-estate-websites.jpg'
				},
				{
					'id': '2', 
					'name': 'event2', 
					'desc': 'event2 info', 
					'image' : 'https://www.incimages.com/uploaded_files/image/970x450/getty_827615404_341774.jpg'
				},
				{	
					'id': '3', 
					'name': 'event3', 
					'desc': 'event3 info', 
					'image' : 'https://informa-mea-res.cloudinary.com/image/upload/training/course-images/certificate-in-real-estate-process-for-development-investment-repdi-course.jpg'
				}
	      ];

		return (
			<View>
	            <ScrollView style={ styles.event_list }>
	               {
	                  events.map((event, index) => (
	                     <TouchableOpacity key = {event.id} style = {styles.event} 
	                     	onPress={() => { navigate('detail');}}>
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
						color = "Green"
			      	/>
			      	<Button
						onPress = {this.handleMyEvents}
						title = "My Events"
						color = "Blue"
			      	/>
			      	<Button
						onPress = {this.handleAddEvent}
						title = "Add Event"
						color = "Yellow"
			      	/>
		      	</View>
	         </View>
		)
	}
}

export default HomeScreen;
