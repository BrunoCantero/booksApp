import { StyleSheet } from 'react-native';
import { colors } from '@constants/colors';

const { skyBlueDefault } = colors;

export default StyleSheet.create({
  // TODO: Complete
  container: {
    backgroundColor: skyBlueDefault,
    height: '100%',
    position: 'absolute',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center'
  }
});
