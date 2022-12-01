import makeStyle from '../../hooks/makeStyle';

const styles = makeStyle(theme => ({
  handleIndicatorColor: {
    display: 'none',
  },
  backgroundColor: {
    backgroundColor: theme.colors.steelGray,
    borderRadius: 0,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  crossContainerStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 26,
    justifyContent: 'center',
  },
  crossTouchableStyle: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  containerStyle: {
    backgroundColor: theme.colors.black_opacity_33,
  },
  containerBg: {
    backgroundColor: 'rgba(217, 217, 217,0.3)',
  },
  touchOpacityStyle: {position: 'absolute', left: 181, bottom: 26},
}));

export default styles;
