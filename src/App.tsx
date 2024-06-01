/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  useColorScheme,
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Header from './components/Header/Header';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [count, setCount] = useState(0);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.red,
  };

  const getRandomNum = () => Math.ceil((Math.random() * 1000) % 255);
  const handlePress = () => {
    appStyle.text.color = `rgba(${getRandomNum()}, ${getRandomNum()}, ${getRandomNum()}, 0.5)`;
    setCount(count + 1);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Header />
      <ScrollView style={appStyle.container}>
        <View style={appStyle.textWrap}>
          <Text style={appStyle.text}>count: {count}</Text>
          <Text style={appStyle.text}>count: {count}</Text>
          <Text style={appStyle.text}>count: {count}</Text>
          <Text style={appStyle.text}>count: {count}</Text>
          <Text style={appStyle.text}>count: {count}</Text>
          <Text style={appStyle.text}>count: {count}</Text>
          <Text style={appStyle.text}>count: {count}</Text>
          <Text style={appStyle.text}>count: {count}</Text>
          <Text style={appStyle.text}>count: {count}</Text>
          <Text style={appStyle.text}>count: {count}</Text>
        </View>
        <Button title="Increase" onPress={handlePress} />
      </ScrollView>
    </SafeAreaView>
  );
}

const appStyle = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#ccc',
    height: Dimensions.get('window').height - 60,
  },
  text: {
    fontSize: 50,
    color: 'teal',
  },
  textWrap: {
    paddingTop: '10%',
    paddingBottom: '5%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
