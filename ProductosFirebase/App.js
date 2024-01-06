import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from './app/screens/HomeScreen';
import { Contacts } from './app/screens/ContactsScreen';
import { Productos } from './app/screens/Productos';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name='HomeNav' component={Home} />
  </Stack.Navigator>
);

const ContactsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name='ContactsNav' component={Contacts} />
  </Stack.Navigator>
);

const ProductosStack = () => (
  <Stack.Navigator>
    <Stack.Screen name='ProductosNav' component={Productos} />
  </Stack.Navigator>
);

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeStack} />
    <Tab.Screen name="Contacts" component={ContactsStack} />
    <Tab.Screen name="Productos" component={ProductosStack} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Menu" component={TabNavigator} />
        <Drawer.Screen name="Contacts" component={ContactsStack} />
        <Drawer.Screen name="Productos" component={ProductosStack} />
      </Drawer.Navigator>
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
