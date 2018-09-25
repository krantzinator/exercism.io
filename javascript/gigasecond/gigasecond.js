var Gigasecond = function(startDate) {
  this.startDate = startDate.getTime();
};

// A gigasecond is one billion (10**9) seconds.

Gigasecond.prototype.date = function() {
  const gigasecond = Math.pow(10,9);
  const milisecondsToSeconds = 1000;

  // const futureDate = new Date(new Date(this.startDate).setSeconds(this.startDate.getSeconds() + gigasecond));
  var resultDate = this.startDate + (gigasecond * milisecondsToSeconds);
  // return futureDate;
  return new Date(resultDate);
};

module.exports = Gigasecond;
