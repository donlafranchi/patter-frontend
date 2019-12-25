import React from 'react';
import { View, TouchableOpacity, Text, ScrollView, Image, 
	ActivityIndicator } from 'react-native';
import { Button } from 'native-base';

import styles from './styles';
import { g_styles } from '../../../styleConsts';

class Profile extends React.Component {

	constructor() {
		super();

		this.handleFollow = () => {
			// follow action here
		}
	}

	componentDidUpdate() {
	}

	render() {

		var profile = {
			'fullname' : 'David Green',
			'desc' : 'user info',
			'image' : 'https://patter.com/img/event1.png',
			'events' : [
				{
					'id': '1', 
					'name': 'event1', 
					'desc': 'event1 info', 
					'image' :'https://patter.com/img/event1.png'
				},{
					'id': '2', 
					'name': 'event2', 
					'desc': 'event2 info', 
					'image' : 'https://patter.com/img/event2.png'
				}
	      ]
		}

		return (
			<View>
				<View>
	                <Image
	             		source = {{uri: profile.image}} 
	             		style = {styles.image} />
	                <Text>{profile.fullname}</Text>
	                <Text>{profile.desc}</Text>
                </View>
                <ScrollView>
                	{
	                  profile.events.map((event, index) => (
	                     <View key = {event.id} style = {styles.event}>
	                        <Text>{event.name}</Text>
	                        <Text>{event.desc}</Text>
	                     </View>
	                  ))
	               }
	            </ScrollView>
	            <Button
					onPress = {this.handleFollow}
					title = "Follow Person"
					color = "Green"
		      	/>
	         </View>
		)
	}
}

export default Profile;
