(function(exports) {

  function Game(frames = []) {
    this.frames = frames;
  }

  Game.prototype.roll = function(numPins) {
    this._getFramesNeedingBonus().forEach((frame) => frame.recordBonusRoll(numPins));
    this._getActiveFrame() && this._getActiveFrame().roll(numPins);
  }

  Game.prototype._getActiveFrame = function() {
    return this.frames.find((frame) => !frame.isComplete());
  }

  Game.prototype._getFramesNeedingBonus = function() {
    return this.frames.filter((frame) => frame.needsBonus());
  }

  Game.prototype.getFrames = function() {
    return this.frames.map((frame) => frame);
  }

  Game.prototype.getScore = function() {
    return this.frames
      .map((frame) => frame.getScore())
      .reduce((a, b) => a + b, 0);
  }

  exports.gameBuilder = {

    build: (frames) => new Game(frames),

    build10FrameGame: () => {
      var frames = [];
      for (var index = 0; index < 10; index++) {
        frames.push(new Frame());
      }
      return new Game(frames);
    }

  }

})(this);
