import React, {useEffect} from 'react';
import RootNavigation from './app/navigation/AppRoot';
import {ThemeProvider} from '@rneui/themed';
import RNBootSplash from 'react-native-bootsplash';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {lightTheme} from './app/theme/index';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {theme} from './app/rneTheme';
import {Provider as PaperProvider} from 'react-native-paper';
const App = () => {
  useEffect(() => {
    const init = async () => {
      // analyticsLogAppOpen();
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await RNBootSplash.hide({fade: true});
    });
  }, []);
  return (
    <PaperProvider
      theme={lightTheme}
      settings={{
        icon: props => <AwesomeIcon {...props} />,
      }}>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <RootNavigation />
        </SafeAreaProvider>
      </ThemeProvider>
    </PaperProvider>
  );
};

export default App;
