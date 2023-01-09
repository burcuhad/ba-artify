import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet} from 'react-native';
import ResultPaintingShowScreen from './src/screens/ResultsPaintingShowScreen';
import TutorialScreen from './src/screens/TutorialScreen';
import QuizScreen from './src/screens/QuizScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import HomeScreen from './src/screens/HomeScreen';

//TODO 


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerRoutes() {
  return (
    <Drawer.Navigator initialRouteName="Home Gallery"> 
      <Drawer.Screen name="Home Gallery" options={{ title: 'Artify' }} component={HomeScreen} />
      <Drawer.Screen name="Quiz" component={QuizScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer style = {styles.container}>
      <Stack.Navigator >
        <Stack.Screen options={{headerShown: false}} name="Drawer2" component={DrawerRoutes} />
        <Stack.Screen name="Tutorial" component={TutorialScreen} />
        <Stack.Screen name="ResultsShow" options={{ title: 'Painting' }} component={ResultPaintingShowScreen} />
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
