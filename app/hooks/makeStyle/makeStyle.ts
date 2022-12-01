import {useMemo} from 'react';
import {useAppTheme} from '../../hooks/useAppTheme/useAppTheme';
import {StyleSheet} from 'react-native';
import {MakeStyleType} from './makeStyle.d';

export const makeStyles: MakeStyleType = styles => () => {
  const theme = useAppTheme();
  return useMemo(() => {
    const css = typeof styles === 'function' ? styles(theme) : styles;
    return StyleSheet.create(css);
  }, [theme]);
};
export default makeStyles;
