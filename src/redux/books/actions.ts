// import { BookState } from '@interfaces/book';
import BookService from '@services/BookService';

export const actions = {
  // TODO: Complete redux book actions
  GET_BOOKS: 'GET_BOOKS'
} as const;

export const getBooks = () => {
  // TODO: Complete getBooks action
  return async (dispatch: any) => {
    try {
      const response = await BookService.getBooks();
      if (response.ok) {
        dispatch({
          type: actions.GET_BOOKS,
          payload: response.data
        });
      }
    } catch (error) {
      throw new Error(error);
    }
  };
};
