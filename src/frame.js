(function(exports) {

  function Frame(rolls = [], bonuses = []) {
    this.rolls = rolls;
    this.bonuses = bonuses;
  }

  Frame.prototype.roll = function(numPins) {
    this._validateRoll(numPins);
    this.rolls.push(numPins);
  }

  Frame.prototype.recordBonusRoll = function(numPins) {
    this.bonuses.push(numPins);
  }

  Frame.prototype.getRolls = function() {
    return this.rolls.map((roll) => roll);
  }

  Frame.prototype.getScore = function() {
    return this._totalPinsKnockedDown() + this._totalBonus();
  }

  Frame.prototype.isComplete = function() {
    return this.rolls.length >= 2;
  }

  Frame.prototype._validateRoll = function(roll) {
    if (this._totalPinsKnockedDown() + roll > 10) {
      throw "Invalid action - not enough pins left";
    }
    if (this.isComplete()) {
      throw "Invalid action - too many rolls";
    }
  }

  Frame.prototype._totalPinsKnockedDown = function() {
    return this.rolls.reduce((a, b) => a + b, 0);
  }

  Frame.prototype._totalBonus = function() {
    return this.bonuses.reduce((a, b) => a + b, 0);
  }

  exports.Frame = Frame;

})(this);
