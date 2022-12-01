import makeStyle from '../hooks/makeStyle';

const styles = makeStyle(_theme => ({
  safeAreaView: {
    flex: 1,
  },
  container: {
    paddingBottom: 0,
    flex: 1,
  },
}));

export default styles;
