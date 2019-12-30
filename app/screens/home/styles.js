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
		padding : 15
   	},
   	event_desc : {
   		color: '#2a4944',
		alignSelf: 'flex-start',
		fontSize : 14,
		padding : 15
   	},
   	image : {
		width : '100%',
		height : 150
   	},
   	btn_group : {
		flexDirection : 'row',
		justifyContent : 'space-between',
		alignItems : 'center',
		padding : 10,
		backgroundColor : primary_color
   	},
   	modal_container : {
		justifyContent: 'space-between',
        alignItems: 'center',
        marginTop : 100,
        marginBottom : 100,
        marginLeft : 30,
        marginLeft : 30,
        height : 200,
   		flex : 1,
   		padding : 20, 
   		backgroundColor : '#ffffff',
   		borderRadius : 6
   	},
   	modal_header : {
   		fontSize : 20,
   		alignItems : 'center',
   		padding : 20,
   		marginBottom : 40,
   		fontWeight : 'bold'
   	},
   	select : {
   		fontSize : 18,
   		margin : 20,
   		alignItems : 'center'
   	},
   	dataPicker : {
   		fontSize : 18,
   	},
   	label : {
   		marginBottom : 10,
   		marginTop : 20,
      fontSize : 18,
   		fontWeight : '500'
   	}
})

export default styles;
