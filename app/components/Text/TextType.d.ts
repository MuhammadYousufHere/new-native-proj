import {FontFamiliesType, FontWeightType, TextStyle} from '../../types/shared';
import {ColorsType} from '../../theme';
import {TextProps} from 'react-native';

export type asType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'h7'
  | 'h8'
  | 'p1'
  | 'p2'
  | 'p3'
  | 'p4'
  | 'p5'
  | 'p6'
  | 'p7'
  | 'p8'
  | 'p9'
  | 'p10'
  | 'p11'
  | 'p12'
  | 'p13';

export interface EMTextProps extends TextProps {
  as?: asType;
  style?: StyleProp<TextStyle>;
  children?: React.ReactChild;
  color?: ColorsType;
  spacing?: number;
  lineHeight?: number;
  fontFamily?: FontFamiliesType;
  weight?: FontWeightType;
}
