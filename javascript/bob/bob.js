var Bob = function() {};

Bob.prototype.hey = function(input) {

  var regexers = [
    {regexp: /^\s*$/, result: "Fine. Be that way!"},
    {regexp: /.*\!.*\..*\s{2}.*\?/, result: "Sure."},
    {regexp: /[A-Z\s]+[^a-z]+[!?]$/, result: "Whoa, chill out!"},
    {regexp: /^[A-Z\s]*[A-Z]+$/, result: "Whoa, chill out!"},
    {regexp: /\?$/, result: "Sure."},
    {regexp: /./, result: "Whatever."}
  ];

  function findResponse(phrase) {
    return (phrase.regexp).test(input);
  }

  return regexers.find(findResponse).result;

};

module.exports = Bob;
