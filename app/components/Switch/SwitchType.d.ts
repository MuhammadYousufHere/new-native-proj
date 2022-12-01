import {SwitchProps} from 'react-native-switch';

export interface ISwitchProps extends SwitchProps {
  isSwitchOn: boolean;
  onToggleSwitch: ((value: boolean) => void | Promise<void>) | undefined;
  theme?: undefined;
}
