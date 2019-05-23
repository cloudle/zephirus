import { StyleSheet } from 'react-native';

const contentContainer = {
	flex: 1,
	maxWidth: 1280,
	width: '100%',
	marginHorizontal: 'auto',
};

export const iStyles = StyleSheet.create({
	contentContainer,
	horizontalContentContainer: {
		...contentContainer,
		flexDirection: 'row',
	},
});
