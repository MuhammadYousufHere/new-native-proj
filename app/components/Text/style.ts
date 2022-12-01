import FONT_SIZE from '../../constants/fontsSize';
import makeStyles from '../../hooks/makeStyle';

const styles = makeStyles(theme => ({
  base: {
    letterSpacing: 0.1,
    fontFamily: theme.fontFamily.Roboto_Regular_400,
  },
  h1: {...FONT_SIZE.FONT_H1},
  h2: {...FONT_SIZE.FONT_H2},
  h3: {...FONT_SIZE.FONT_H3},
  h4: {...FONT_SIZE.FONT_H4},
  h5: {...FONT_SIZE.FONT_H5},
  h6: {...FONT_SIZE.FONT_H6},
  h7: {...FONT_SIZE.FONT_H7},
  h8: {...FONT_SIZE.FONT_H8},
  p1: {...FONT_SIZE.FONT_P1},
  p2: {...FONT_SIZE.FONT_P2},
  p3: {...FONT_SIZE.FONT_P3},
  p4: {...FONT_SIZE.FONT_P4},
  p5: {...FONT_SIZE.FONT_P5},
  p6: {...FONT_SIZE.FONT_P6},
  p7: {...FONT_SIZE.FONT_P7},
  p8: {...FONT_SIZE.FONT_P8},
  p9: {...FONT_SIZE.FONT_P9},
  p10: {...FONT_SIZE.FONT_P10},
  p11: {...FONT_SIZE.FONT_P11},
  p12: {...FONT_SIZE.FONT_P12},
  p13: {...FONT_SIZE.FONT_P13},
}));

export default styles;
