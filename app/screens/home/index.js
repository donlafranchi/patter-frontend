import React from 'react';
import { View, TouchableOpacity, Text, ScrollView, Image, 
	ActivityIndicator } from 'react-native';
import { Button } from 'native-base';

import styles from './styles';
import { g_styles } from '../../../styleConsts';

class HomeScreen extends React.Component {

	constructor() {
		super();
	}

	componentDidUpdate() {
	}

	render() {

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
	                     <View key = {event.id} style = {styles.event}>
	                     	<Image
	                     		source = {{ uri: event.image }} 
	                     		style = {styles.image} />
	                        <Text>{event.name}</Text>
	                        <Text>{event.desc}</Text>
	                     </View>
	                  ))
	               }
	            </ScrollView>
	         </View>
		)
	}
}

export default HomeScreen;
