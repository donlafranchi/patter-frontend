import React from 'react';
import { View, TouchableOpacity, Text, ScrollView, Image, Button, 
	ActivityIndicator } from 'react-native';
import { Icon } from 'native-base';
import { connect } from "react-redux";
import styles from './styles';
import { g_styles } from '../../../styleConsts';


const mapStateProps = state => ({
	...state.home,
	baseUrl : state.home.baseUrl
})

const mapDispatchToProps = dispatch => ({
})


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

		var navigation = this.props.navigation;

		var event = navigation.getParam('event') || [];

		event.vendors = [
				{
					'id' : '1',
					'name' : 'David Green',
					'description' : 'I am looking for good events everyday.',
					'url' : 'https://image.flaticon.com/icons/png/512/145/145848.png'
				},
				{
					'id' : '2',
					'name' : 'Sandra Hanna',
					'description' : 'The views are great and wonderful.',
					'url' : 'https://image.flaticon.com/icons/png/512/206/206881.png'
				},
				{
					'id' : '1',
					'name' : 'Jonathan Stevens',
					'description' : 'Our tour guide for the hard times tour.',
					'url' : 'https://image.flaticon.com/icons/png/512/145/145848.png'
				},
				{
					'id' : '2',
					'name' : 'Marry Gonzales',
					'description' : 'Accessible by ferry with great views.',
					'url' : 'https://image.flaticon.com/icons/png/512/206/206881.png'
				}
			]

		return (
			<View style={ styles.page_container }>
				<View>
					<Icon name="arrow-back" 
						onPress={ () => navigation.navigate('home')}
						style={styles.backIcon} />
				</View>
				<ScrollView style={ styles.container }>
					<View style = { styles.event_detail } >
						<Image
							source = {{ uri: this.props.baseUrl + (event.background || '') }} 
							style = {styles.image} />
						<Text style={ styles.name }>{event.name}</Text>
						<Text style={ styles.desc }>{event.description}</Text>
					</View>
					{	
						event.vendors && event.vendors.map((vendor, index) => (
							<TouchableOpacity key = {vendor.id} style = {styles.item}
									onPress={() => { navigation.navigate('profile', 
									{vendor : vendor})
								}}>
								<Image
									source = {{ uri: vendor.url }} 
									style = {styles.item_img} />
								<View>
									<Text>{vendor.name}</Text>
									<Text>{vendor.description}</Text>
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

export default connect(mapStateProps, mapDispatchToProps)(Detail);

