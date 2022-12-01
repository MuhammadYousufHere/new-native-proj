import makeStyle from '../hooks/makeStyle';
import {Platform} from 'react-native';

const useThemeStyles = makeStyle(theme => ({
  tabBarContainer: {
    backgroundColor: theme.colors.revolver,
    backgroundColorOpacity: 1,
    flex: 1,
    borderTopColor: 'transparent',
    borderTopWidth: 0,
  },
  tabBarStyle: {
    backgroundColor: theme.colors.revolver,
    paddingTop: 15,
    borderTopWidth: 0,
    paddingHorizontal: 20,
    height: 85,
    ...Platform.select({
      android: {
        height: 57,
      },
    }),
  },
  headerTopContainer: {
    paddingTop: 44,
    backgroundColor: theme.colors.revolver,
  },
  headerContainer: {
    paddingVertical: 7,
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    width: '100%',
  },
  backArrow: {
    position: 'absolute',
    top: 7,
    left: 24,
  },
  title: {
    textAlign: 'center',
    color: theme.colors.black,
    fontWeight: '600',
    fontSize: 17,
    lineHeight: 22,
  },
}));

export default useThemeStyles;
