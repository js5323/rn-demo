import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import {Provider} from '@ant-design/react-native';

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Home Screen'}}
          />
          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            options={{title: 'Detail Screen'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
