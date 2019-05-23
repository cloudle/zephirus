import React, { Component, Fragment } from 'react';
import { StyleSheet, View, Text, } from 'react-native';

import AdminTool from './tool';
import { Style, Element } from '../../../typeDefinition';

type Props = {
	style?: Style,
	children?: Element,
};

class Admin extends Component {
	props: Props;

	render() {
		const { children } = this.props;

		return <Fragment>
			{children}
			<AdminTool/>
		</Fragment>;
	}
}

export default Admin;

const styles = StyleSheet.create({
	container: {

	},
});
