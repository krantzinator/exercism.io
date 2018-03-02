var Pangram = function(string){
  this.input = string;
};

Pangram.prototype.isPangram = function() {
  let newString = this.input.replace(/\s/g, '');
  newString = newString.split('').filter(function(item, i, ar){ return ar.indexOf(item) === i; }).join('');
  console.log(newString);

  return newString.length === 26;
}

module.exports = Pangram;