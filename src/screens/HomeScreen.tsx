import { Button, Toast } from '@ant-design/react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet,  View} from 'react-native';

type props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({navigation}: props) {
  const goDetail = () => {

    const key = Toast.loading('go to detail...')

    setTimeout(() => {
      navigation.navigate('Detail', {
        id: new Date().toDateString(),
        message: 'anything you want here',
      })

      Toast.remove(key)
    }, 2000);
  }

  return (
    <View style={styles.container}>
      
      <Button onPress={goDetail} type={'primary'} >
        Go to detail page
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});
