(function(exports) {

  var GameView = exports.GameView;

  describe('GameView', function() {

    describe('render', function() {

      var viewElement;

      beforeEach(function() {
        // arrange
        var frames = [ _buildFrameMock(), _buildFrameMock() ];
        var game = { getFrames: () => frames, getScore: () => 24 };
        var gameView = new GameView(game);

        // act
        viewElement = gameView.render();
      })

      it('Renders a component with all the game frames as children', function() {
        // assert
        expect(viewElement
          .find('.frames__container')
          .children('.frame__container').length).toEqual(2);
      });

      it('Renders the overall game score', function() {
        // assert
        expect(viewElement.find('.game-score__container').text()).toBe('24')
      });

    });

    describe('update', function() {

      var viewElement, frameViewMocks;

      beforeEach(function() {
        // arrange
        frameViewMocks = [ _buildFrameViewMock(), _buildFrameViewMock() ];
        spyOn(frameViewBuilder, 'build')
          .and.returnValues(frameViewMocks[0], frameViewMocks[1]);

        var frames = [ _buildFrameMock(), _buildFrameMock() ];
        var game = { getFrames: () => frames, getScore: () => 36 };
        var gameView = new GameView(game);
        viewElement = gameView.render();
        game.getScore = () => 40;

        // act
        gameView.update();
      });

      it('Updates all the child frames', function() {
        // assert
        frameViewMocks.forEach((frameView) => expect(frameView.update).toHaveBeenCalled());

      });

      it('Updates the overall score', function() {
        expect(viewElement.find('.game-score__container').text()).toBe('40')
      });

    });

  });

  function _buildFrameMock() {
    return {
      getScore: () => 0,
      getRolls: () => [],
      render: () => null
    };
  }

  function _buildFrameViewMock() {
    var mock = {
      render: () => null,
      update: () => null
    };
    spyOn(mock, 'update');
    return mock;
  }

})(this);
