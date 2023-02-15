import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet} from 'react-native';
import ResultPaintingShowScreen from './src/screens/ResultsPaintingShowScreen';
import TutorialScreen from './src/screens/TutorialScreen';
import QuizHomeScreen from './src/screens/QuizHomeScreen';
import QuizQuestionScreen from './src/screens/QuizQuestionScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import HomeScreen from './src/screens/HomeScreen';
import CameraScreen from './src/screens/CameraScreen'
import QuizResultScreen from './src/screens/QuizResultScreen';
import ProfileShowSingleScreen from './src/screens/ProfileShowSingleScreen';

//TODO 1. make useEffect work with each render 2. delete should happen after user input by warning
// after pressing post and going to profile it doesn't show
// delete works second time, force useeffect?

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerRoutes() {
  return (
    <Drawer.Navigator initialRouteName="HomeGallery"> 
      <Drawer.Screen name="HomeGallery" options={{ title: 'Artify' }} component={HomeScreen} />
      <Drawer.Screen name="QuizHome" component={QuizHomeScreen} options = {{ title: 'Quiz' }}/>
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer style = {styles.container}>
      <Stack.Navigator >
        <Stack.Screen options={{headerShown: false}} name="Drawer2" component={DrawerRoutes} />
        <Stack.Screen name="Tutorial" component={TutorialScreen} options = {{ title: ' ' }}/>
        <Stack.Screen name="ResultsShow" options={{ title: ' ' }} component={ResultPaintingShowScreen} />
        <Stack.Screen name='CameraScreen' component={CameraScreen} options = {{ title: ' ', headerShown: false}}/>
        <Stack.Screen name='Profile' component={ProfileScreen} options = {{ headerShown: false}} />
        <Stack.Screen name='ProfileShowSingle' component={ProfileShowSingleScreen} options = {{ headerShown: false}} />
        <Stack.Screen name='QuizQuestion' component={QuizQuestionScreen} options = {{ headerShown: false} }/>
        <Stack.Screen name='QuizResult' component={QuizResultScreen} options = {{ headerShown: false} }/>
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
