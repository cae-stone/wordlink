import { WordModel } from "../../models/word";

export function shuffle(array: WordModel[]) : WordModel[] {
    let currentIndex = array.length;
    while (currentIndex != 0) {
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array
  }

  
export function reduceWordList(allWords : WordModel[], selectedArr : string[]){
    const found = allWords.filter((word) => {return !selectedArr.includes(word.name)})
    return found
}

export function checkForMatch(found : WordModel[]) : boolean {
    const result = found.filter((word) => {return word.desc == found[0].desc})
    return result.length == 4
}

export function filterAllWords(allWords :  WordModel[], selectedArr : string[]) : WordModel[] {
    const selectedWords = allWords.filter((word) => {return selectedArr.includes(word.name)})
    return selectedWords
}

export function makeDescriptionString(words : WordModel[]) : string {
    return words[0].desc + ' - ' + words[0].name + ', ' + words[1].name + ', ' + words[2].name + ', ' + words[3].name 
}