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

})
