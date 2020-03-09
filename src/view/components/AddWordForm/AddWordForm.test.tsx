import React from 'react';
import { shallow } from 'enzyme';
import AddWordForm from './AddWordForm';

const WordsStore = {
  wordList: [
    {
      eng: 'stockpile',
      ru: 'запас оружия',
      contextRu: 'Это наш личный запас оружия на леднековый период',
      contextEng: 'This is our private stokpile for the Ice age.',
      dateAdded: '2020-02-12T21:20:16.688Z',
    },
  ],
  addWord: jest.fn(),
  wordIsExists: jest.fn(),
};

describe('AddWordForm', () => {
  const props = {
    wordsStore: WordsStore,
  };

  const initialState = {
    wordEng: '',
    wordEngIsExists: false,
    wordRu: '',
    wordRuIsExists: false,
    contextEng: '',
    contextRu: '',
  };

  describe('AddWordForm initial rendering', () => {
    const addWordForm = shallow(<AddWordForm {...props} />);

    it('renders properly', () => {
      expect(addWordForm).toMatchSnapshot();
    });
  });
});
