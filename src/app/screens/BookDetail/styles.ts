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
    alignItems: 'flex-start'
  },
  textContainer: { flexDirection: 'row', margin: 10, alignItems: 'center' },
  title: { fontSize: 20 },
  image: { width: 250, height: 300 },
  imageContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 10
  }
});
