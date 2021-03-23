import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
// import { Book } from '@interfaces/book';
import placeholder from '@assets/img_book_placeholder.png';

// import styles from './styles';

interface Props {
  // TODO: Complete
}

function BookItem() {
  return (
    <TouchableOpacity>
      <Image source={placeholder} />
      <View>
        <Text>COMPLETE</Text>
      </View>
    </TouchableOpacity>
  );
}

export default BookItem;
