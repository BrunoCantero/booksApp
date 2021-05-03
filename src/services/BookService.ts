import { BOOKS_MOCK } from '@constants/mockBooks';

export default {
  getBooks: () => {
    // TODO: Complete => Return a new promise with BOOKS_MOCK and ok: true
    return new Promise<any>((resolve, reject) => {
      try {
        const books = BOOKS_MOCK;
        if (books) resolve({ ok: true, data: books });
      } catch (error) {
        reject(error);
      }
    });
    // return { ok: true, data: BOOKS_MOCK };
  }
};
