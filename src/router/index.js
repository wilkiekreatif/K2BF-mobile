import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Splash, Home } from '../pages';

const Stack = createStackNavigator();

const Router = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Splash' component={Splash} />
			<Stack.Screen name='Profile' component={Home} />
		</Stack.Navigator>
	);
};

export default Router;
