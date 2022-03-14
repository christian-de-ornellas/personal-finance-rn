import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray,
    padding: 20,
    alignItems: 'center',
    borderRadius: 10,
    margin: 8,
  },

  title: {color: colors.white, fontSize: 16, marginBottom: 20},
  value: {color: colors.white, fontSize: 16, fontWeight: 'bold'},
});

export default styles;
