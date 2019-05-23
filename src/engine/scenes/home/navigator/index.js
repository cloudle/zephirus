import React, { Component } from 'react';
import { StyleSheet, View, Text, } from 'react-native';

import { iStyles, configs, colors } from '../../../utils';

type Props = {

};

class HomeNavigator extends Component {
	props: Props;

	render() {
		return <View style={styles.container}>
			<View style={iStyles.horizontalContentContainer}>
				<View style={styles.brandingContainer}>
					<Text>Branding!</Text>
				</View>
				<View style={styles.navigationContainer}>
					<Text>HomeNavigator</Text>
				</View>
			</View>
		</View>;
	}
}

export default HomeNavigator;

const styles = StyleSheet.create({
	container: {
		height: configs.navigatorSize,
		backgroundColor: colors.main,
	},
	brandingContainer: {
		width: configs.panelSize,
		justifyContent: 'center',
	},
	navigationContainer: {
		flex: 1,
		justifyContent: 'center',
	},
});
