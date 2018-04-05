(function(exports) {

  var frameViewBuilder = exports.frameViewBuilder;

  describe("FrameView", function() {

    describe("#render", function() {

      it("Returns an html representation of a single frame", function() {
        // arrange
        var frame = { getScore: () => 7 };
        var frameView = frameViewBuilder.build(frame);

        // act
        var html = frameView.render();

        // assert
        expect(html.find('.frame__score')).toContainText('7');
      })

    });

    describe('#update', function() {

      it("Updates the score in the html element", function() {
        //arrange
        var frame = { getScore: () => 2 };
        var frameView = frameViewBuilder.build(frame);
        var frameViewElement = frameView.render();
        frame.getScore = () => 9;

        //act
        frameView.update();

        //assert
        expect(frameViewElement.find('.frame__score')).toContainText(9);
      })

    })

  })

})(this);
