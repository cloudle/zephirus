import React, { Component } from 'react';
import { StyleSheet, View, Text, } from 'react-native';

import { configs } from '../../../utils';

type Props = {

};

class SideMenu extends Component {
	props: Props;

	render() {
		return <View style={styles.container}>
			<Text style={styles.groupHeader}>CONTENT TYPES</Text>
			<Text>Users</Text>
			<Text style={styles.groupHeader}>PLUGINS</Text>
			<Text>Content Manager</Text>
			<Text>Content Type Builder</Text>
			<Text>File Manager</Text>
			<Text>Roles & Permission Manager</Text>
			<Text style={styles.groupHeader}>GENERALS</Text>
			<Text>Configurations</Text>
		</View>;
	}
}

export default SideMenu;

const styles = StyleSheet.create({
	container: {
		width: configs.panelSize,
	},
	groupHeader: {
		marginTop: 15, marginBottom: 8,
		fontWeight: '600',
	},
});
