(function(exports) {

  var frameViewBuilder = exports.frameViewBuilder;

  describe("FrameView", function() {

    describe("#render", function() {

      var html;

      beforeEach(function() {
        // arrange
        var frame = { getScore: () => 7, getRolls: () => [2, 5] };
        var frameView = frameViewBuilder.build(frame);

        // act
        html = frameView.render();
      });

      it("Returns an html representation of a single frame with an overall score", function() {
        // assert
        expect(html.find('.frame__score')).toContainText('7');
      })

      it("Returns an html representation of a single frame with individual roll amounts", function() {
        // assert
        expect(html.find('.roll__score')[0]).toContainText('2');
        expect(html.find('.roll__score')[1]).toContainText('5');
      })

    });

    describe('#update', function() {

      it("Updates the score in the html element", function() {
        //arrange
        var frame = { getScore: () => 2, getRolls: () => [2] };
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
