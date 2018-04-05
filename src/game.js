(function(exports) {

  function Game(frames = []) {
    this.frames = frames;
  }

  Game.prototype.roll = function(numPins) {
    this._getActiveFrame().roll(numPins);
  }

  Game.prototype._getActiveFrame = function() {
    return this.frames.find((frame) => !frame.isComplete)
  }

  Game.prototype.getFrames = function() {
    return this.frames.map((frame) => frame);
  }

  exports.Game = Game;

})(this);
