import { observable, action, computed } from 'mobx';

export const wordsStoreKey = 'wordsStore';

type lang = 'eng' | 'ru';

interface IWord {
  eng: string;
  ru: string;
  contextEng: string;
  contextRu: string;
  dateAdded?: Date;
}

export interface IWordsStore {
  wordsList: Array<IWord>;
  addWord(word: IWord): void;
  wordIsExists(lang: string, word: string): boolean;
}

const getWordsFromLC = () => JSON.parse(localStorage.getItem('words') || '[]');

class WordsStore implements IWordsStore {
  @observable wordsList: IWord[] = getWordsFromLC();

  @action.bound
  public wordIsExists(lang: lang, word: string): boolean {
    const isExists = !!this.wordsList.find(wordItem => wordItem[lang] === word);

    return isExists;
  }

  @action.bound
  public addWord(word: IWord): void {
    this.wordsList.push({
      ...word,
      dateAdded: word.dateAdded ? word.dateAdded : new Date(),
    });

    localStorage.setItem('words', JSON.stringify(this.wordsList));
  }
}

export default WordsStore;
