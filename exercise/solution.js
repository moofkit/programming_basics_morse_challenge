import MORSE_CODE from './helper';

// BEGIN
let morseDecode = (code) => {
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
