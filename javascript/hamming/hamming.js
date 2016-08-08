var Hamming = function() {};

Hamming.prototype.compute = function(firstStrand, secondStrand) {
  var num = 0;
  if (firstStrand.length === secondStrand.length) {
      for (var i = 0; i < firstStrand.length; i++) {
        if (firstStrand[i] != secondStrand[i]) {
        num += 1;
      }
    }
  } else {
    throw new Error('DNA strands must be of equal length.');
  }
  return num;
};

module.exports = Hamming;
