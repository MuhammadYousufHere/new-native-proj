import React, {FC, memo} from 'react';
import {useAppTheme} from '../../hooks/useAppTheme';
import {Switch} from 'react-native-switch';
import useStyle from './styles';
import {ISwitchProps} from './SwitchType';

const EMSwitch: FC<ISwitchProps> = ({
  isSwitchOn,
  onToggleSwitch,
  ...remProps
}) => {
  const theme = useAppTheme();
  const styles = useStyle();
  return (
    <Switch
      value={isSwitchOn}
      onValueChange={onToggleSwitch}
      disabled={false}
      circleSize={8}
      barHeight={14}
      circleBorderWidth={0}
      backgroundActive={theme.colors.primary}
      backgroundInactive={theme.colors.error}
      circleActiveColor={theme.colors.primary}
      circleInActiveColor={theme.colors.background}
      innerCircleStyle={styles.innerCircleStyle}
      renderActiveText={false}
      renderInActiveText={false}
      switchWidthMultiplier={3.5}
      switchBorderRadius={0}
      {...remProps}
    />
  );
};

export default memo(EMSwitch);
