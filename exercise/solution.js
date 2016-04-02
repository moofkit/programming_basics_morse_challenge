import MORSE_CODE from './helper';

// BEGIN (write your solution here)
let morseDecode = (code) => {
  // let splitWord = (word) => {
  //   return word.split(' ');
  // };

  // let splitString = (str) => {
  //   return str.split('   ');
  // }

  // code = code.trim();

  // if (code.length == 0){
  //   return '';
  // }

  // let result = '';

  // let wordsArr = splitString(code);
  // for(let word in wordsArr){
  //   let letArr = splitWord(wordsArr[word]);
  //   for(let letter in letArr) {
  //     result += MORSE_CODE[letArr[letter]];
  //   };

  //   result += ' ';
  // }
  // return result.slice(0, -1);

  let decodeLetter = (code) => {
    return MORSE_CODE[code];
  };

  let decodeWord = (word) => {
    return word.split(' ').map(decodeLetter).join('');
  };

  return code.trim().split('   ').map(decodeWord).join(' ');
};
// END

export default morseDecode;
