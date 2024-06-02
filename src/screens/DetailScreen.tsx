import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Button, Modal} from '@ant-design/react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

export default function DetailScreen({route, navigation}: props) {
  const handleUpdateTitle = () => {
    Modal.alert('Tips', 'Sure to update title?', [
      {text: 'Cancel', onPress: () => console.log('cancel'), style: 'cancel'},
      {
        text: 'OK',
        onPress: () => {
          navigation.setOptions({title: 'Updated --- ' + Math.random()});
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={{marginBottom: 15}}>
        {route.params.id} {route.params.message}
      </Text>
      <Button
        style={{marginBottom: 15}}
        onPress={() => navigation.navigate('Home')}>
        Go to Home
      </Button>
      <Button style={{marginBottom: 15}} onPress={() => navigation.goBack()}>
        Back
      </Button>
      <Button onPress={() => handleUpdateTitle()}>Update the title</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'rgb(59,108,212)',
    fontSize: 42,
    fontWeight: '100',
    textAlign: 'center',
  },
  text2: {
    marginBottom: 12,
  },
});
