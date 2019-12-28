import { StyleSheet } from 'react-native';

import { primary_color, gray_color, g_padding, height, width } from '../../../styleConsts';

const styles = StyleSheet.create ({
	event_list : {
		height : '90%'
	},
   	event: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		// padding: 10,
		margin: 3,
		borderColor: '#2a4944',
		borderWidth: 1,
		// backgroundColor: '#d2f7f1'
	},
   	event_name : {
   		color: '#2a4944',
		alignSelf: 'flex-start',
		fontSize : 16,
		padding : 20
   	},
   	event_desc : {
   		color: '#2a4944',
		alignSelf: 'flex-start',
		fontSize : 14,
		padding : 20
   	},
   	image : {
		width : 366,
		height : 150
   	},
   	btn_group : {
		flexDirection : 'row',
		justifyContent : 'space-between',
		alignItems : 'center',
		padding : 10,
		backgroundColor : primary_color
   	}
})

export default styles;
