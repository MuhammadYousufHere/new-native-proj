import React, {PropsWithChildren} from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {WithSafeAreaViewProps} from './SafeAreaViewType';
import useStyle from './styles';
const WithSafeAreaView: React.FC<
  PropsWithChildren<WithSafeAreaViewProps>
> = props => {
  const insets = useSafeAreaInsets();
  const extStyles = useStyle();
  const {children, styles} = props;
  return (
    <View style={[extStyles.container, {paddingTop: insets.top}, styles]}>
      {children}
    </View>
  );
};
export default WithSafeAreaView;
