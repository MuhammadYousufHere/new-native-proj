import makeStyle from '../../hooks/makeStyle';

const styles = makeStyle(() => ({
  containerStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    opacity: 0.7,
    textAlign: 'center',
    marginTop: 9,
  },
  dotStyle: {
    width: 3,
    height: 3,
    marginTop: 6,
  },
}));

export default styles;
