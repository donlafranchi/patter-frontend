import React from 'react';
import { View, TouchableOpacity, Text, ScrollView, Image, Button, 
	ActivityIndicator } from 'react-native';
// import { Button } from 'native-base';

import styles from './styles';
import { g_styles } from '../../../styleConsts';

class Detail extends React.Component {

	constructor() {
		super();

		this.handleRemindMe = () => {
			// remind action here
		}
	}

	componentDidUpdate() {
	}

	render() {

		var navigate = this.props.navigation.navigate;

		var event = {
			'id': '1', 
			'name': 'Quebec City Walking Tour', 
			'desc': 'Explore Niagara Falls your way on a stress-free day trip from Toronto, which also includes wine tasting at a local winery. Explore the falls at your own pace during roughly three hours of free time', 
			'image' : 'https://media-cdn.tripadvisor.com/media/photo-s/1a/65/1e/80/caption.jpg',
			'vendors' : [
				{
					'id' : '1',
					'fullname' : 'David Green',
					'desc' : 'I am looking for good events everyday',
					'image' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUsGHRGXsU-6or1SNOW4gaLcnem87x-zWO77XcmnCzFZEBhQo8&s'
				},
				{
					'id' : '2',
					'fullname' : 'Sabeli Joe',
					'desc' : 'Quality Assurance',
					'image' : 'https://image.flaticon.com/icons/png/512/206/206881.png'
				}
			]
		}

		return (
			<View>
                <ScrollView style={ styles.container }>
	                <View style = { styles.event_detail } >
		                <Image
		             		source = {{ uri: event.image }} 
		             		style = {styles.image} />
		                <Text style={ styles.name }>{event.name}</Text>
		                <Text style={ styles.desc }>{event.desc}</Text>
	                </View>
                	{
	                  event.vendors.map((vendor, index) => (
	                  	<TouchableOpacity key = {vendor.id} style = {styles.item}
		                     	onPress={() => { navigate('profile');}}>
							<Image
			             		source = {{ uri: vendor.image }} 
			             		style = {styles.item_img} />
		             		<View>
								<Text>{vendor.fullname}</Text>
								<Text>{vendor.desc}</Text>
							</View>
                     	</TouchableOpacity>
	                  ))
	               }
	            </ScrollView>
	            <View style = {styles.btn_group}>
		            <Button
				         onPress = {this.handleRemindMe}
				         title = "Remind Me of Event"
				         color = "#ffffff"
			      	/>
		      	</View>
	         </View>
		)
	}
}

export default Detail;
