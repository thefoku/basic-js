const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * Исходный текст:       ATTACKATDAWN
   Ключ:                 LEMONLEMONLE
   Зашифрованный текст:  LXFOPVEFRNHR  

   c_{j}=(m_{j}+k_{j})\mod {n}
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    const upperMessage = message.toUpperCase();
    const upperKey = key.toUpperCase();
    const result = [];
    let keyIndex = 0;

    for (let i = 0; i < upperMessage.length; i++) {
      const char = upperMessage[i];

      if (char >= 'A' && char <= 'Z') {
        const messageCharCode = char.charCodeAt(0) - 65;
        const keyCharCode = upperKey[keyIndex % upperKey.length].charCodeAt(0) - 65;
        const encryptedChar = String.fromCharCode(((messageCharCode + keyCharCode) % 26) + 65);
        result.push(encryptedChar);
        keyIndex++;
      } else {
        result.push(char);
      }
    }

    const encryptedMessage = result.join('');
    return this.isDirect ? encryptedMessage : encryptedMessage.split('').reverse().join('');
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    const upperEncryptedMessage = encryptedMessage.toUpperCase();
    const upperKey = key.toUpperCase();
    const result = [];
    let keyIndex = 0;

    for (let i = 0; i < upperEncryptedMessage.length; i++) {
      const char = upperEncryptedMessage[i];

      if (char >= 'A' && char <= 'Z') {
        const encryptedCharCode = char.charCodeAt(0) - 65;
        const keyCharCode = upperKey[keyIndex % upperKey.length].charCodeAt(0) - 65;
        const decryptedChar = String.fromCharCode(((encryptedCharCode - keyCharCode + 26) % 26) + 65);
        result.push(decryptedChar);
        keyIndex++;
      } else {
        result.push(char);
      }
    }

    const decryptedMessage = result.join('');
    return this.isDirect ? decryptedMessage : decryptedMessage.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
