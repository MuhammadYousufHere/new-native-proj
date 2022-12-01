import {TextStyle as NativeTextStyle} from 'react-native';
// Define all generic types here.

/** A high-level generic object. */
export type GenericObject<T = unknown> = {[key: string]: T};

/** A high-level error object. */
export interface ErrorObject {
  message: string;
  description: string;
}

/** Generic type to allow null. */
export type Nullable<T> = T | null;

/** Function with single parameter returning void */
export type FunctionWithParam<T> = (p: T) => void;

/** Function with single parameter returning void */
export type FunctionWithNoParam = () => void;

/** Type to get value property of object */
export type ValueOf<T> = T[keyof T];
// ** Type of font weight being used
export type FontWeightType =
  | 'extra-light'
  | 'extra-light-italic'
  | 'thin'
  | 'light-italic'
  | 'regular'
  | 'medium'
  | 'medium-italic'
  | 'semi-bold'
  | 'semi-bold-italic'
  | 'bold'
  | 'bold-italic'
  | 'extra-bold'
  | 'extra-bold-italic';

export type FontFamiliesType =
  | 'PlusJakartaSans-ExtraLight'
  | 'PlusJakartaSans-ExtraLightItalic'
  | 'PlusJakartaSans-Light'
  | 'PlusJakartaSans-LightItalic'
  | 'PlusJakartaSans-Regular'
  | 'PlusJakartaSans-Medium'
  | 'PlusJakartaSans-MediumItalic'
  | 'PlusJakartaSans-SemiBold'
  | 'PlusJakartaSans-SemiBoldItalic'
  | 'PlusJakartaSans-Bold'
  | 'PlusJakartaSans-BoldItalic'
  | 'PlusJakartaSans-ExtraBold'
  | 'PlusJakartaSans-ExtraBoldItalic'
  | 'Barcelony'
  | 'BebasNeue-Regular'
  | 'Roboto-Thin'
  | 'Roboto-ThinItalic'
  | 'Roboto-Light'
  | 'Roboto-LightItalic'
  | 'Roboto-Regular'
  | 'Roboto-Italic'
  | 'Roboto-Medium'
  | 'Roboto-MediumItalic'
  | 'Roboto-Bold'
  | 'Roboto-BoldItalic'
  | 'Roboto-Black'
  | 'Roboto-BlackItalic';
export interface TextStyle extends NativeTextStyle {
  fontFamily?: FontFamiliesType;
}
