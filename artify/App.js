import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ResultPaintingShowScreen from './src/screens/ResultsPaintingShowScreen';
import TutorialScreen from './src/screens/TutorialScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style = {styles.container}>
      <Stack.Navigator initialRouteName="Home Gallery">
        <Stack.Screen name="Home Gallery" component={HomeScreen} />
        <Stack.Screen name="Tutorial" component={TutorialScreen} />
        <Stack.Screen name="ResultsShow" component={ResultPaintingShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
