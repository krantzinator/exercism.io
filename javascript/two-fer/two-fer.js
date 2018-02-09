var TwoFer = function () {};

TwoFer.prototype.twoFer = function (who) {
  const name = who ? who : "you";

  return `One for ${name}, one for me.`;
};

module.exports = TwoFer;
