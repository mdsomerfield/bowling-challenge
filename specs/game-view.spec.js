(function(exports) {

  var GameView = exports.GameView;

  describe('GameView', function() {

    describe('render', function() {

      it('Renders a component with all the game frames as children', function() {
        // arrange
        var frameViews = [
          { getScore: () => 0, render: () => null },
          { getScore: () => 0, render: () => null }
        ];
        var game = { getFrames: () => frameViews };
        var gameView = new GameView(game);

        // act
        var viewElement = gameView.render();

        // assert
        expect(viewElement.children('.frame__container').length).toEqual(2);
      });

    });

  });

})(this);
