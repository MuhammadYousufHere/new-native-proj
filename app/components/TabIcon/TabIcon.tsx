import React from 'react';
import {Text} from '../Text';
import {useAppTheme} from '../../hooks/useAppTheme/useAppTheme';
import {View} from 'react-native';
import useStyle from './styles';
import {ITabIcon} from './TabIconType';

const TabIcon: React.FC<ITabIcon> = ({title, isFocused, Icon}) => {
  const theme = useAppTheme();
  const style = useStyle();

  return (
    <View style={style.containerStyle}>
      <Icon />
      {!isFocused && (
        <Text
          as="p12"
          lineHeight={9.32}
          color={theme.colors.primary}
          style={style.textStyle}>
          {title}
        </Text>
      )}
    </View>
  );
};

export default TabIcon;
