import React, { Component } from 'react';
import { StyleSheet, View, Text, } from 'react-native';

import { configs } from '../../utils';

type Props = {

};

class UserArea extends Component {
	props: Props;

	render() {
		return <View style={styles.container}>
			<Text>User</Text>
		</View>;
	}
}

export default UserArea;

const styles = StyleSheet.create({
	container: {
		width: configs.panelSize,
		marginTop: configs.navigatorSize,
		alignItems: 'center',
	},
});
