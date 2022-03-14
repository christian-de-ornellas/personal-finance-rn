import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'space-between',
  },
  home: {margin: 20},
  column: {justifyContent: 'center'},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});

export default styles;
