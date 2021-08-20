const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  const matcher = new RegExp(/(10)|(11)/, 'g');
  let splitted = [];
  let converted = [];
  let input = expr;
  //split in by 10

  for (let i = 0; i < expr.length; i += 10) {
    splitted.push(input.substring(i, 10 + i));
  }

  for (currentEncodedCharcater of splitted) {
    if (currentEncodedCharcater === '**********') {
      converted.push(' ');
    } else {
      let matched;
      matched = currentEncodedCharcater.replace(/(10)/g, '.');
      matched = matched.replace(/(11)/g, '-');
      matched = matched.replace(/0/g, '');
      matched = MORSE_TABLE[matched];
      converted.push(matched);
    }
  }

  return converted.join('');
}
module.exports = {
  decode,
};
