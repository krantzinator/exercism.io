var DnaTranscriber = function() { };

DnaTranscriber.prototype.toRna = function(string) {
  var strand = "";
  var stringLength = string.length;
  var obj = {C: 'G', G: 'C', A: 'U', T: 'A', U: 'A'};
  for (var i = 0; i < stringLength; i++) {
    strand += obj[string[i]]
    }
  return strand;
};

module.exports = DnaTranscriber;
