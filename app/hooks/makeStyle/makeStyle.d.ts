import {ThemeType} from '../../theme/theme';
import {StyleSheet} from 'react-native';

const makeStyles: <
  T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<T>,
  V,
>(
  styles: T | ((theme: ThemeType, props?: V) => T),
) => (props?: V) => T;
export type MakeStyleType = typeof makeStyles;
