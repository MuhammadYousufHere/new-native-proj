import {View} from 'react-native';
import React from 'react';
import Switch from '../components/Switch/Switch';
import {Text} from '../components/Text';
import {BottomSheet} from '../components/BottomSheet';

const Home = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{marginTop: 40}}>
      <Text>Hello</Text>
      <BottomSheet />
      <Switch isSwitchOn={false} onToggleSwitch={() => console.log('uuu')} />
    </View>
  );
};

export default Home;
