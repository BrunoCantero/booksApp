// import { BookState } from '@interfaces/book';
import { ReduxAction } from '@interfaces/redux';

// import { actions } from './actions';

const initialState = {
  // TODO: Complete
  books: []
};

const reducer = (state = initialState, action: ReduxAction) => {
  switch (action.type) {
    // TODO: Complete switch with book actios
    case 'GET_BOOKS':
      return {
        ...state,
        books: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
