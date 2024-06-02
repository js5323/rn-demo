import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default function DetailScreen({route, navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Detail Screen:</Text>
      <Text style={styles.text2}>
        {route.params.id} {route.params.message}
      </Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({title: 'Updated!'})}
      />
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
