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

      it("Does not allow more than 10 pins to be knocked down", function() {
        // arrange
        var frame = new Frame([9]);

        // act
        var action = () => frame.roll(2);

        // assert
        expect(action).toThrow("Invalid action - not enough pins left");
      });

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
