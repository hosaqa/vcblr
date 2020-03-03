import WordsStore, { wordsStoreKey } from './WordsStore';

export default {
  [wordsStoreKey]: new WordsStore(),
};
