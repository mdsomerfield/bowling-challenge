describe('ControlsView', function() {

  describe('#render', function() {

    var controlsView, controlsElement;

    beforeEach(function() {
      // arrange
      controlsView = new ControlsView();

      // act
      controlsElement = controlsView.render();
    });

    it('renders an input to enter the score', function() {
      // assert
      expect(controlsElement).toContainElement('input.score__input');
    });

    it('renders a button to confirm the score', function() {
      // assert
      expect(controlsElement).toContainElement('button.score__button');
    })
  });

  describe('event: .score__button:click', function() {

    it('triggers the scoreSubmitted callback', function() {
      // arrange
      var scoreSubmittedObserver = { trigger: function(inputVal) { }}
      spyOn(scoreSubmittedObserver, 'trigger');
      var controlsView = new ControlsView(function(val) {
        scoreSubmittedObserver.trigger(val)
      });
      var controlsElement = controlsView.render();
      controlsElement.find('.score__input').val('6');

      // act
      controlsElement.find('.score__button').trigger('click');

      // assert
      expect(scoreSubmittedObserver.trigger).toHaveBeenCalledWith('6');
    });

  });

})
