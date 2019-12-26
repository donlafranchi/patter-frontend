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
					'image' : 'https://patter.com/img/event1.png'
				},
				{
					'id': '2', 
					'name': 'event2', 
					'desc': 'event2 info', 
					'image' : 'https://patter.com/img/event2.png'
				},
				{	
					'id': '3', 
					'name': 'event3', 
					'desc': 'event3 info', 
					'image' : 'https://patter.com/img/event3.png'
				}
	      ];

		return (
			<View>
	            <ScrollView>
	               {
	                  events.map((event, index) => (
	                     <TouchableOpacity key = {event.id} style = {styles.event} 
	                     	onPress={() => { navigate('detail');}}>
	                     	<View>
		                     	<Image
		                     		source = {{ uri: event.image }} 
		                     		style = {styles.image} />
		                        <Text>{event.name}</Text>
		                        <Text>{event.desc}</Text>
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
