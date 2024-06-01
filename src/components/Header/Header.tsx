import {View, Text} from 'react-native';
import React from 'react';
import style from './style';

export default function Header() {
  return (
    <View style={style.headerWrap}>
      <Text style={style.headerWrapText}>Header</Text>
    </View>
  );
}
