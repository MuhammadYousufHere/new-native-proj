import {ThemeType} from '../../theme/theme.d';
import {useTheme} from 'react-native-paper';

export const useAppTheme = () => useTheme<ThemeType>();
