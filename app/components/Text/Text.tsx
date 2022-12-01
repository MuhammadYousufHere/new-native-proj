import React, {FC, memo} from 'react';
import {useAppTheme} from '../../hooks/useAppTheme/useAppTheme';
import {ColorsType} from '../../theme';
import {Text} from 'react-native';
import useStyle from './style';
import {EMTextProps} from './TextType';

const EMText: FC<EMTextProps> = ({
  as = 'p1',
  color,
  spacing,
  lineHeight,
  style,
  fontFamily,
  children,
  ...remProps
}) => {
  const {colors} = useAppTheme();
  const styles = useStyle();
  const uColor: ColorsType = color || colors.primary;

  return (
    <Text
      style={[
        styles.base,
        {letterSpacing: spacing, color: uColor, fontFamily},
        styles[as],
        {lineHeight},
        style,
      ]}
      {...remProps}>
      {children}
    </Text>
  );
};

export default memo(EMText);
