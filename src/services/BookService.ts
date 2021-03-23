import { BOOKS_MOCK } from '@constants/mockBooks';

export default {
  getBooks: () => {
    // TODO: Complete => Return a new promise with BOOKS_MOCK and ok: true
    return { ok: true, data: BOOKS_MOCK };
  }
};
