import {View} from 'react-native';
import React from 'react';
import Switch from '../components/Switch/Switch';
import {Text} from '../components/Text';
import EMButton from '../components/Button/Button';
const Home = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{marginTop: 40}}>
      <Text>Hello</Text>
      <EMButton title={'Hi'} size="lg" />
      <Switch isSwitchOn={false} onToggleSwitch={() => console.log('uuu')} />
    </View>
  );
};

export default Home;
