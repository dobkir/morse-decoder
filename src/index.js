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
    ' ': ' ',
};

function decode(expr) {
    const encryptedСharacter = expr.match(/.{1,10}/g)
    let decipheredString = ''

    encryptedСharacter.forEach(element => {
        let decipheredСharacter = element.
            replace(/\*\*\*\*\*\*\*\*\*\*/ig, ' ').
            replace(/00/ig, '').
            replace(/10/ig, '.').
            replace(/11/ig, '-')

        decipheredСharacter = MORSE_TABLE[decipheredСharacter]
        decipheredString += decipheredСharacter
    })
    return decipheredString
}

module.exports = {
    decode
}