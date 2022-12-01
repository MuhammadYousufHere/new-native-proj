import React from 'react';
import {
  KeyboardAwareScrollView as RNKeyboardAwareScrollView,
  KeyboardAwareScrollViewProps,
} from 'react-native-keyboard-aware-scroll-view';

type IKeyboardAwareScrollViewProps = KeyboardAwareScrollViewProps;

const KeyboardAwareScrollView: React.FC<IKeyboardAwareScrollViewProps> = ({
  children,
  ...rest
}) => {
  return (
    <RNKeyboardAwareScrollView {...rest}>{children}</RNKeyboardAwareScrollView>
  );
};

export default KeyboardAwareScrollView;
