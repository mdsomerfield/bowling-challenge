describe("FrameView", function() {

  describe("#render", function() {

    it("Returns an html representation of a single frame", function() {
      // arrange
      var frame = new Frame();
      frame.roll(7);
      var frameView = new FrameView(frame);

      // act
      var html = frameView.render();

      // assert
      expect(html.find('.frame__score')).toContainText('7');
    })

  });

  describe('#update', function() {

    it("Updates the score in the html element", function() {
      //arrange
      var frame = new Frame();
      var frameView = new FrameView(frame);
      var frameViewElement = frameView.render();
      frame.roll(9);

      //act
      frameView.update();

      //assert
      expect(frameViewElement.find('.frame__score')).toContainText(9);
    })

  })

})
