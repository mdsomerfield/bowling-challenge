(function(exports) {

  var gameBuilder = exports.gameBuilder;

  describe("Game", function() {

    describe("#roll", function() {

      var game, activeFrame1, activeFrame2;

      beforeEach(function() {
        // arrange
        var inactiveFrame = { isComplete: () => true }
        activeFrame1 = { isComplete: () => false, roll: () => false };
        activeFrame2 = { isComplete: () => false, roll: () => false };

        game = gameBuilder.build([ inactiveFrame, activeFrame1, activeFrame2 ]);
        spyOn(activeFrame1, 'roll');
        spyOn(activeFrame2, 'roll');

        // act
        game.roll(4);
      });

      it("applies the roll to the first active frame", function() {
        // assert
        expect(activeFrame1.roll).toHaveBeenCalledWith(4);
      });

      it("does not apply the roll to subsequent active frame", function() {
        // assert
        expect(activeFrame2.roll).not.toHaveBeenCalled();
      });
    });

    describe("#getFrame", function() {
      it('returns a list of frames', function() {
        // arrange
        var game = gameBuilder.build([{}, {}, {}]);

        // act
        var frames = game.getFrames();

        // assert
        expect(frames.length).toBe(3);
      })
    });

  });


})(this);
