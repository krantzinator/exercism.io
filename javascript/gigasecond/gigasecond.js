var Gigasecond = function(startDate) {
  this.startDate = startDate.getTime();
};

// A gigasecond is one billion (10**9) seconds.

Gigasecond.prototype.date = function() {
  var gigasecond = Math.pow(10,9);
  var milisecondsToSeconds = 1000;

  var resultDate = this.startDate + (gigasecond * milisecondsToSeconds);

  return new Date(resultDate);
};

module.exports = Gigasecond;
