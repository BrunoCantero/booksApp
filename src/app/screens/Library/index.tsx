import React, { useEffect, useState } from 'react';
import { ScrollView, View, FlatList } from 'react-native';
// import { Book } from '@interfaces/book';
import { getBooks } from '@redux/books/actions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@redux/store';
import { StackNavigationProp } from '@react-navigation/stack';

import BookItem from './components/BookItem';
import styles from './styles';

interface LibraryProps {
  navigation: StackNavigationProp<any, any>;
}

function Library({ navigation }: LibraryProps) {
  // TODO: Complete
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();

  const fetchBooks = async () => dispatch(await getBooks());
  const books = useSelector((store: RootState) => store.book.books);

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchBooks();
    setRefreshing(false);
  };

  useEffect(() => {
    handleRefresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    // TODO: Make a list of BookItems
    <View style={styles.container}>
      <ScrollView>
        <FlatList
          data={books}
          onRefresh={handleRefresh}
          refreshing={refreshing}
          renderItem={({ item }) => (
            <BookItem
              handlePress={() => navigation.navigate('BOOKDETAIL', { item })}
              thumb={item.imageUrl}
              key={item.id}
              title={item.title}
              author={item.author}
            />
          )}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    </View>
  );
}

export default Library;
