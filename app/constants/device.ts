/** @format */
import {Dimensions, Platform} from 'react-native';
export const IS_ANDROID = Platform.OS === 'android';
export const IS_IOS = Platform.OS === 'ios';
export const KEYBOARD_AVOIDING_VIEW_BEHAVIOR = IS_IOS ? 'padding' : null;
export const KEYBOARD_VERTICAL_OFFSET = IS_IOS ? 48 : 70;
export const NAVIGATION_BAR_HEIGHT = 48;
export const SCREEN_HEIGHT = Dimensions.get('screen').height;
export const SCREEN_WIDTH = Dimensions.get('screen').width;
export const APP_STATES = {
  ACTIVE: 'active',
  BACKGROUND: 'background',
};
