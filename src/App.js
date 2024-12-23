import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import './gesture-handler';
import Splash from './pages/splash';
import Home from './pages/home';
import Router from './router';

export default function App() {
	return (
		<NavigationContainer>
			{/* <Splash />
			<Home /> */}
			<Router />
			{/* <Text>Hello World</Text> */}
			{/* <StatusBar style='auto' /> */}
		</NavigationContainer>
	);
}
