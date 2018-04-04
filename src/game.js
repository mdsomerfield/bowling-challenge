function Game(frames = []) {
  this.frames = frames;
}

Game.prototype.roll = function(numPins) {
  this._getActiveFrame().roll(numPins);
}

Game.prototype._getActiveFrame = function() {
  return this.frames.find((frame) => frame.active)
}
