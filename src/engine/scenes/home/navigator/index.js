import React, { Component } from 'react';
import { StyleSheet, View, Text, } from 'react-native';

type Props = {

};

class HomeNavigator extends Component {
	props: Props;

	render() {
		return <View style={styles.container}>
			<Text>HomeNavigator</Text>
		</View>;
	}
}

export default HomeNavigator;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
