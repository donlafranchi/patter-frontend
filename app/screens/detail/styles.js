import { StyleSheet } from 'react-native';

import { primary_color, gray_color, g_padding } from '../../../styleConsts';

const styles = StyleSheet.create ({
    eventDetail: {
    	alignItems: 'center',
    	padding: 10,
    	margin: 2,
    	borderColor: '#2a4944',
		borderWidth: 1
    },
    vendor: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 30,
		margin: 2,
		borderColor: '#2a4944',
		borderWidth: 1,
		backgroundColor: '#d2f7f1'
	},
	image : {
		width : 200,
		height : 200
	}
})

export default styles;
