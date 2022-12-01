import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path, Defs } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SvgComponent = (props: SvgProps) => (
  <Svg width={28} height={28} fill="none" {...props}>
    <G filter="url(#a)">
      <Circle cx={14} cy={14} r={14} fill="#fff" />
    </G>
    <Path d="m10 11 8 8M10 19l8-8" stroke="#2E273B" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    <Defs></Defs>
  </Svg>
);

export default SvgComponent;
