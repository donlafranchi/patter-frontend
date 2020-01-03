import { StyleSheet } from 'react-native';

import { primary_color, gray_color, g_padding } from '../../../styleConsts';

const styles = StyleSheet.create ({
	container : {
		height : '93%'
	},
    event_detail: {
    	alignItems: 'center',
    	padding: 0,
    	marginBottom: 20,
    	// borderColor: '#2a4944',
		// borderWidth: 1
    },
    name : {
   		// color: '#2a4944',
		alignSelf: 'flex-start',
		fontSize : 16,
		padding : 20,
		marginTop : 10
   	},
   	desc : {
   		// color: '#2a4944',
		alignSelf: 'flex-start',
		fontSize : 14,
		padding : 20
   	},
	image : {
		width : 370,
		height : 200
   	},
    item: {
		flexDirection: 'row',
		// justifyContent: 'space-between',
		alignItems: 'center',
		padding: 20,
		margin: 2,
		borderColor: '#2a4944',
		borderWidth: 1,
		// backgroundColor: '#d2f7f1'
	},
	item_img : {
		width : 40,
		height : 40,
		borderRadius : 25,
		marginRight : 20
	},
	btn_group : {
		flexDirection : 'row',
		justifyContent : 'space-around',
		alignItems : 'center',
		padding : 10,
		backgroundColor : primary_color
   	}
})

export default styles;
