var Words = function() {};

Words.prototype.count = function(phrase) {
  var phrase_array = phrase.trim().split(/\s+/);
  var result = {};

  phrase_array.forEach(function(word) {
    word_to_find = word.toLowerCase();
    var word_count = 0;
    // don't need to double-loop
    for (var i = 0; i < phrase_array.length; i++) {
      if (phrase_array[i].toLowerCase() === word_to_find) {
        word_count += 1;
      }
    }
    result[word_to_find] = word_count;
  });
  return result;
};

module.exports = Words;
