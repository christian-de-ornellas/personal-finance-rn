import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    width: 40,
    height: 40,
    backgroundColor: colors.gray,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeIcon: {
    width: 60,
    height: 60,
    backgroundColor: colors.gray,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeImg: {width: 30, height: 30},
  img: {width: 30, height: 30},
});

export default styles;
