import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Container, Header, Content, List, ListItem, Text,
	Left, Icon } from 'native-base';
import { LinearGradient } from 'expo';
import { connect } from "react-redux";

// import appActions from '../../store/app/action';

import TopBar from '../topbar';

import { primary_color, dark_primary_color } from '../../../styleConsts';
import styles from './styles';

class SideBar extends React.Component {
	render() {
		const { Resource, navigate } = this.props;

		let static_menus = ['info', 'faq', 'about'];
		// let menu_items = Resource.menu || {}, menu = [];
		// for(let key in menu_items) {
		// 	menu.push({
		// 		key: key,
		// 		...menu_items[key]
		// 	})
		// }
		// menu.sort((a, b) => (a.order > b.order));
		let menu = [
			{
				'key' : 'home',
				'text' : 'Home'
			},
			{
				'key' : 'profile',
				'text' : 'Profile'
			}
		];

		return (
			<Container>
				<View colors={[primary_color, dark_primary_color]} style={{ height: '100%' }} >
					<TopBar menuPress={this.props.menuPress} />
					<Content style={{ height: '100%' }}>
						<List>
							{menu.map(menu_item => {
								return (
									<ListItem style={styles.listitem} key={menu_item.key} >
										<TouchableOpacity style={styles.listitem_button}
												onPress={() => {
													if(static_menus.indexOf(menu_item.key) !== -1)
														navigate('static', {
															key: menu_item.key
														})
													else 
														navigate(menu_item.key);
													this.props.menuPress();
												}} >
											<Text style={styles.listitem_wrapper} >
												{menu_item.text}
											</Text>
										</TouchableOpacity>
									</ListItem>
								)
							})}
						</List>
					</Content>
				</View>
			</Container>
		);
	}
}

export default SideBar;
