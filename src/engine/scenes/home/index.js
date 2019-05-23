import React, { Component } from 'react';
import { StyleSheet, View, Text, } from 'react-native';

import Navigator from './navigator';
import User from './user';
import SideMenu from './sideMenu';
import { iStyles, configs, colors } from '../../utils';

type Props = {

};

class AdminHome extends Component {
	props: Props;

	render() {
		return <View style={styles.container}>
			<Navigator/>
			<View style={styles.headingWrapper}>
				<View style={iStyles.horizontalContentContainer}>
					<User/>
				</View>
			</View>
			<View style={styles.contentWrapper}>
				<View style={iStyles.horizontalContentContainer}>
					<SideMenu/>
					<View style={styles.innerContentContainer}>
						<Text>content</Text>
					</View>
				</View>
			</View>
		</View>;
	}
}

export default AdminHome;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	headingWrapper: {
		height: configs.headingSize,
		backgroundColor: colors.main,
	},
	headingContainer: {
		flexDirection: 'row',
		maxWidth: 1280,
		width: '100%',
		marginHorizontal: 'auto',
	},
	contentWrapper: {
		flex: 1,
	},
	contentContainer: {
		flexDirection: 'row',
		maxWidth: 1280,
		width: '100%',
		marginHorizontal: 'auto',
	},
	innerContentContainer: {
		flex: 1,
		marginTop: -(configs.headingSize - configs.navigatorSize),
	},
});
