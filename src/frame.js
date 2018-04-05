(function(exports) {

  function Frame(rolls = []) {
    this.rolls = rolls;
  }

  Frame.prototype.roll = function(numPins) {
    this.rolls.push(numPins);
  }

  Frame.prototype.getScore = function() {
    return this.rolls.reduce((a, b) => a + b, 0);
  }

  Frame.prototype.isComplete = function() {
    return this.rolls.length >= 2;
  }

  exports.Frame = Frame;

})(this);
