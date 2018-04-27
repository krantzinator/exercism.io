var Bob = function() {};

Bob.prototype.hey = function(input) {
  
  if (input === input.toUpperCase() && (input.search(/[A-Z]+/) !== -1)) {
    return 'Whoa, chill out!';
  } else if (input[input.length - 1] === '?') {
    return 'Sure.';
  } else if (input.search(/\S+/) === -1) {
    return 'Fine. Be that way!';
  } else {
    return 'Whatever.';
  }
};

module.exports = Bob;
