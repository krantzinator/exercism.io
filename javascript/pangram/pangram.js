var Pangram = function(string){
  this.input = string;
};

Pangram.prototype.isPangram = function() {
  let newString = this.input.replace(/[^a-zA-Z]*/g, '').toLowerCase();
  newString = newString.split('').filter(function(item, i, ar){ return ar.indexOf(item) === i; }).join('');
  console.log(newString);

  return newString.length === 26;
}

module.exports = Pangram;