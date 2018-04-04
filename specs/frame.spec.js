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

  })

})
