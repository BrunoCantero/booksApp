import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
// import { Book } from '@interfaces/book';
import placeholder from '@assets/img_book_placeholder.png';

import styles from './styles';

interface Props {
  // TODO: Complete
  thumb: string;
  title: string;
  author: string;
  handlePress: () => void;
}

function BookItem({ thumb, title, author, handlePress }: Props) {
  return (
    <TouchableOpacity onPress={handlePress} style={styles.item}>
      <View>
        <Image
          style={styles.image}
          source={thumb ? { uri: thumb } : placeholder}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.bookTitle}>{title}</Text>
        <Text style={styles.bookSubtitle}>{author}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default BookItem;
