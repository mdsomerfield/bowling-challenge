(function(exports) {

  describe("Frame", function() {

    describe("#roll", function() {

      it("Rolling adds to the frame score", function() {
        // arrange
        var frame = new Frame();

        // act
        frame.roll(7);

        // assert
        expect(frame.getScore()).toBe(7);
      })

    });

    describe('#isComplete', function() {

      it('is true when 2 rolls have been completed', function() {
        // arrange
        var frame = new Frame([4, 6]);

        // act
        var isComplete = frame.isComplete();

        // assert
        expect(isComplete).toBe(true);
      });

      it('is false when fewer than 2 rolls have been completed', function() {
        // arrange
        var frame = new Frame([4]);

        // act
        var isComplete = frame.isComplete();

        // assert
        expect(isComplete).toBe(false);
      })
    })

  })
  
})(this);
