import {StyleSheet} from 'react-native';

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
    paddingHorizontal: 40
  },
  total: {
      fontSize: 28,
      color: '#FBFBFB',
  },
  totalDesc: {
    fontSize: 16,
    color: '#FBFBFB',
  }
});
