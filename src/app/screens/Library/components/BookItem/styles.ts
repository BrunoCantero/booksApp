import { StyleSheet } from 'react-native';
import { colors } from '@constants/colors';

const { white } = colors;

export default StyleSheet.create({
  item: {
    backgroundColor: white,
    width: 350,
    margin: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  image: { margin: 15, width: 50, height: 80 },
  bookTitle: { fontSize: 15, paddingVertical: 5, fontWeight: 'bold' },
  bookSubtitle: { fontSize: 12 },
  textContainer: { flex: 1, justifyContent: 'space-between' }
});
