import {createTheme} from '@rneui/themed';
import {verticalScale} from 'react-native-size-matters';

export const theme = createTheme({
  lightColors: {
    primary: '#3D2073',
    secondary: '#ECEFFF',
    background: '#FAF9FF',
    background1: '#0000001a',
    white: '#FFFFFF',
    error: '#E93325',
    disabled: '#BEB2F6',
    link: '#F58B65',
    info: '#7F7F88',
    text: '#9CA3AF',
    blur: 'rgba(255,255,255,0.5)',
    searchBg: 'white',
    black: '#000000',
    black1: '#322220',
    black2: '#080938',
    black3: '#04021D',
    grey0: '#F2F3F5',
    grey1: '#9B9AA5',
    grey2: '#50565A',
    grey3: '#BDBCBC',
    borderColor: '#B3B3B3',
    shadow: '#5356ed',
    secShade: '#FFD4BA',
    lightSec: '#FAF6F5',
  },
  darkColors: {
    primary: '#3D2073',
    secondary: '#ECEFFF',
    background: '#FAF9FF',
    background1: '#0000001a',
    white: '#FFFFFF',
    error: '#E93325',
    disabled: '#BEB2F6',
    link: '#F58B65',
    info: '#7F7F88',
    text: '#9CA3AF',
    blur: 'rgba(255,255,255,0.5)',
    searchBg: 'white',
    black: '#000000',
    black1: '#322220',
    black2: '#080938',
    black3: '#04021D',
    grey0: '#F2F3F5',
    grey1: '#9B9AA5',
    grey2: '#50565A',
    grey3: '#BDBCBC',
    borderColor: '#B3B3B3',
    shadow: '#5356ed',
    secShade: '#FFD4BA',
    lightSec: '#FAF6F5',
  },
  components: {
    Button: {
      raised: true,
    },
    SearchBar: {
      inputContainerStyle: {height: verticalScale(25)},
      containerStyle: {
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 18,
      },
    },
  },
});
