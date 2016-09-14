var Gigasecond = function(startDate) {
  this.startDate = startDate;
};

// A gigasecond is one billion (10**9) seconds.

Gigasecond.prototype.date = function() {
  var resultDate = this.startDate.getTime() + (Math.pow(10, 9) * 1000);
  return new Date(resultDate);
};

module.exports = Gigasecond;
