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

    describe('update', function() {

      it('Updates all the child frames', function() {
        // arrange
        var frameViewMocks = [
          { render: () => null, update: () => null },
          { render: () => null, update: () => null }
        ];
        spyOn(frameViewMocks[0], 'update');
        spyOn(frameViewMocks[1], 'update');
        spyOn(frameViewBuilder, 'build')
          .and.returnValues(frameViewMocks[0], frameViewMocks[1]);

        var frameViews = [
          { getScore: () => 0, render: () => null },
          { getScore: () => 0, render: () => null }
        ]
        var game = { getFrames: () => frameViews };
        var gameView = new GameView(game);
        gameView.render();

        // act
        gameView.update();

        // assert
        frameViewMocks.forEach((frameView) => expect(frameView.update).toHaveBeenCalled());

      });

    });

  });

})(this);
