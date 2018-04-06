(function(exports) {

  var gameBuilder = exports.gameBuilder;

  function _buildMockFrame(isComplete, isExpectingBonus) {
    var mock = {
      isComplete: () => isComplete,
      needsBonus: () => isExpectingBonus,
      roll: () => null,
      recordBonusRoll: () => null
    }
    spyOn(mock, 'roll');
    spyOn(mock, 'recordBonusRoll');
    return mock;
  }

  describe("Game", function() {

    describe("#roll", function() {

      var game, inactiveFrame1, inactiveFrame2, activeFrame1, activeFrame2;

      describe("when there are active frames", function() {

        beforeEach(function() {
          // arrange
          inactiveFrame1 = _buildMockFrame(true, false);
          inactiveFrame2 = _buildMockFrame(true, true);
          activeFrame1 = _buildMockFrame(false, false);
          activeFrame2 = _buildMockFrame(false, false);

          game = gameBuilder.build([ inactiveFrame1, inactiveFrame2, activeFrame1, activeFrame2 ]);

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

        it("applies bonuses to any frames which need a bonus", function() {
          // assert
          expect(inactiveFrame2.recordBonusRoll).toHaveBeenCalledWith(4);
        })

        it("does not apply bonuses to any frame which does not need a bonus", function() {
          // assert
          expect(inactiveFrame1.recordBonusRoll).not.toHaveBeenCalled();
        })

      })

      describe("when there are no active frames, but some frames need bonus", function() {

        var frames, pendingBonusFrame;

        beforeEach(function() {
          // arrange
          inactiveFrame1 = _buildMockFrame(true, false);
          inactiveFrame2 = _buildMockFrame(true, false);
          pendingBonusFrame = _buildMockFrame(true, true);
          frames = [ inactiveFrame1, inactiveFrame2, pendingBonusFrame ];

          game = gameBuilder.build(frames);

          // act
          game.roll(4);
        });

        it("does not apply the roll to any frames", function() {
          // assert
          frames.forEach((frame) => expect(frame.roll).not.toHaveBeenCalled())
        })

        it("does apply the roll to any frames which need a bonus", function() {
          // assert
          expect(pendingBonusFrame.recordBonusRoll).toHaveBeenCalled();
        });
      })
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
