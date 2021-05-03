import React from 'react';
import { View, Text, Image } from 'react-native';
import placeholder from '@assets/img_book_placeholder.png';

import styles from './styles';

interface Props {
  route: any;
}

const BookDetail = ({ route }: Props) => {
  const { item } = route.params;
  const { title, author, genre, publisher, year, imageUrl } = item;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={imageUrl ? { uri: imageUrl } : placeholder}
        />
      </View>
      <View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{`Title: `}</Text>
          <Text>{title}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{`Author: `}</Text>
          <Text>{author}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{`Genre: `}</Text>
          <Text>{genre}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{`Publisher: `}</Text>
          <Text>{publisher}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{`Year: `}</Text>
          <Text>{year}</Text>
        </View>
      </View>
    </View>
  );
};

export default BookDetail;
