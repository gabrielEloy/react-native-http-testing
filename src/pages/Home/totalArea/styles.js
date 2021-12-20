import {StyleSheet} from 'react-native';
import {COLORS} from '../../../themes/main';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 40,
    justifyContent: 'space-between',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 40,
  },
  total: {
    fontSize: 28,
    color: COLORS.light,
  },
  totalDesc: {
    fontSize: 16,
    color: COLORS.gray,
  },
});
