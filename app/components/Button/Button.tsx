import React from 'react';
import {Size} from '../../types/enums';
import {ButtonProps} from '@rneui/base';
import {Button} from '@rneui/themed';
import {scale, verticalScale} from 'react-native-size-matters/extend';
import styles from '../styles';

export const EMButton = ({size, children, ...props}: ButtonProps) => {
  let width = scale(60);
  let height = verticalScale(56);
  const getSize = (isWidth: boolean) => {
    switch (size) {
      case Size.Small:
        width = scale(142);
        height = verticalScale(36);
        break;
      case Size.Medium:
        width = scale(242);
        height = verticalScale(46);
        break;
      case Size.Large:
        width = scale(342);
        height = verticalScale(56);
        break;
      default:
        break;
    }

    if (isWidth) {
      return {width};
    } else {
      return {height};
    }
  };

  return (
    <Button
      {...props}
      containerStyle={[
        styles.buttonContainer,
        props.containerStyle,
        getSize(true),
      ]}
      buttonStyle={[styles.button, props.buttonStyle, getSize(false)]}>
      {children}
    </Button>
  );
};

export default EMButton;
