import {makeStyles} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters/extend';

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
  },
  buttonContainer: {
    alignSelf: 'center',
  },
  button: {
    borderRadius: scale(16),
  },
  inputContainer: {
    borderWidth: scale(1),
    borderRadius: scale(16),
    paddingHorizontal: scale(10),
  },
  input: {
    fontSize: scale(16),
    height: scale(56),
    paddingHorizontal: scale(5),
  },
});

export const useThemeStyles = makeStyles(theme => ({
  input: {
    borderColor: theme.colors.text,
  },
  indicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
}));

export default styles;
