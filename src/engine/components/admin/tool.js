import React, { Component } from 'react';
import { StyleSheet, View, Text, } from 'react-native';

type Props = {

};

class AdminTool extends Component {
	props: Props;

	render() {
		return <View style={styles.container}>
			<Text>AdminTool</Text>
		</View>;
	}
}

export default AdminTool;

const styles = StyleSheet.create({
	container: {
		position: 'fixed',
		top: 0, left: 0, right: 0,
		height: 60,
		backgroundColor: 'rgba(0, 0, 0, 0.9)',
	},
});
