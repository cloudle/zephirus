import React, { Component } from 'react';
import { StyleSheet, View, Text, } from 'react-native';

import { configs } from '../../../utils';

type Props = {

};

class SideMenu extends Component {
	props: Props;

	render() {
		return <View style={styles.container}>
			<Text>SideMenu</Text>
		</View>;
	}
}

export default SideMenu;

const styles = StyleSheet.create({
	container: {
		width: configs.panelSize,
	},
});
