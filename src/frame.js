(function(exports) {

  function Frame(rolls = [], bonuses = []) {
    this._rolls = rolls;
    this._bonuses = bonuses;
  }

  Frame.prototype.roll = function(numPins) {
    this._validateRoll(numPins);
    this._rolls.push(numPins);
  }

  Frame.prototype.recordBonusRoll = function(numPins) {
    this._bonuses.push(numPins);
  }

  Frame.prototype.getRolls = function() {
    return this._rolls.map((roll) => roll);
  }

  Frame.prototype.getScore = function() {
    return this._totalPinsKnockedDown() + this._totalBonus();
  }

  Frame.prototype.isComplete = function() {
    return this._rolls.length >= 2 || this._totalPinsKnockedDown() == 10;
  }

  Frame.prototype.needsBonus = function() {
    return (this._isHalfStrike() && this._bonuses.length < 1)
        || (this._isStrike() && this._bonuses.length < 2);
  }

  Frame.prototype._isHalfStrike = function() {
    return this._totalPinsKnockedDown() == 10 && this._rolls.length == 2;
  }

  Frame.prototype._isStrike = function() {
    return this._totalPinsKnockedDown() == 10 && this._rolls.length == 1;
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
    return this._rolls.reduce((a, b) => a + b, 0);
  }

  Frame.prototype._totalBonus = function() {
    return this._bonuses.reduce((a, b) => a + b, 0);
  }

  exports.Frame = Frame;

})(this);
