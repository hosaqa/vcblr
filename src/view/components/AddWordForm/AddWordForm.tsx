import React, { useState, useCallback } from 'react';
import { inject, observer } from 'mobx-react';
import Form from '../../UI/Form';
import Button from '../../UI/Button';
import TextField from '../../UI/TextField';
import './AddWordForm.css';
import { wordsStoreKey, IWordsStore } from '../../../stores/WordsStore';

interface IAddWordForm {
  wordsStore?: IWordsStore;
}

const AddWordForm: React.FC<IAddWordForm> = ({ wordsStore }) => {
  console.log(wordsStore);
  const { addWord, wordIsExists } = wordsStore!;

  const initialState = {
    wordEng: '',
    wordEngIsExists: false,
    wordRu: '',
    wordRuIsExists: false,
    contextEng: '',
    contextRu: '',
  };

  const [state, setState] = useState(initialState);

  const {
    wordEng,
    wordEngIsExists,
    wordRu,
    wordRuIsExists,
    contextEng,
    contextRu,
  } = state;

  const resetState = () => setState(initialState);

  const inputOnChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = event.target;

      const lang = event.target.getAttribute('data-lang')!;

      const existKey = lang === 'eng' ? 'wordEngIsExists' : 'wordRuIsExists';

      setState({
        ...state,
        [name]: value,
        [existKey]: wordIsExists(lang, value),
      });
    },
    [state]
  );

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      addWord({
        eng: wordEng,
        ru: wordRu,
        contextRu,
        contextEng,
      });

      resetState();
    },
    [state]
  );

  const submitIsForbidden =
    !wordEng.length || !wordRu.length || wordEngIsExists || wordRuIsExists;

  return (
    <Form className="AddWordForm" onSubmit={handleSubmit}>
      <h1>Add your word</h1>
      <div className="Form__row">
        <label htmlFor="AddWordForm_eng">Word Eng</label>
        <TextField
          name="wordEng"
          className="AddWordForm__item"
          data-lang="eng"
          value={wordEng}
          onChange={inputOnChange}
          autoComplete="off"
        />
        {wordEngIsExists && (
          <small className="error-text">
            This word already exists in the database
          </small>
        )}
      </div>
      <div className="Form__row">
        <label htmlFor="AddWordForm_ru">Word Ru</label>
        <TextField
          name="wordRu"
          className="AddWordForm__item"
          data-lang="ru"
          value={wordRu}
          onChange={inputOnChange}
          autoComplete="off"
        />
        {wordRuIsExists && (
          <small className="error-text">
            This word already exists in the database
          </small>
        )}
      </div>
      <div className="Form__row">
        <label htmlFor="AddWordForm_eng-context">Context Eng</label>
        <TextField
          name="contextEng"
          className="AddWordForm__item"
          value={contextEng}
          onChange={inputOnChange}
          autoComplete="off"
        />
      </div>
      <div className="Form__row">
        <label htmlFor="AddWordForm_ru-context">Context Ru</label>
        <TextField
          name="contextRu"
          className="AddWordForm__item"
          value={contextRu}
          onChange={inputOnChange}
          autoComplete="off"
        />
      </div>
      <div className="Form__row">
        <Button
          disabled={submitIsForbidden}
          type="submit"
          className="AddWordForm__item"
        >
          Add word
        </Button>
      </div>
    </Form>
  );
};

export default inject(wordsStoreKey)(observer(AddWordForm));
