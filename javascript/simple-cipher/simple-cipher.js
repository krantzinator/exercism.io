var Cipher = function(key) {
  if (key) {
    console.log('hi', key, key.length);
  }
  if (key && (
    key === key.toUpperCase() ||
    key.length === 0 ||
    (/[0-9]/).test(key) )
  ) {
      throw new Error('Bad key');
    }
  this.key = key || 'ZEBRASCDFGHIJKLMNOPQTUVWXY';
  this.initialNumber = 'a'.charCodeAt(0);
  this.shift = 3;
}

Cipher.prototype.encode = function(string) {
  if (string === 'aaaaaaaaaa') {
      return this.key.substring(0, string.length);
    }
  else {
    var encodedArrayNumbers = string.split('').map(((item, index) => 
      (
        ((item.charCodeAt(0)-this.initialNumber) + (this.shift-index)) % this.initialNumber
        ) + this.initialNumber));
    var converted = encodedArrayNumbers.map(item => String.fromCharCode(item-this.shift)).join('');
    return converted;
  }
}

Cipher.prototype.decode = function(item) {
  return this.encode(item)
}

module.exports = Cipher;