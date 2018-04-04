describe('ControlsView', function() {

  describe('#render', function() {

    var controlsView, controlsElement;

    beforeEach(function() {
      // arrange
      controlsView = new ControlsView();

      // act
      controlsElement = controlsView.render();
    })

    it('renders an input to enter the score', function() {
      // assert
      expect(controlsElement).toContainElement('input.score__input');
    });

    it('renders a button to confirm the score', function() {
      // assert
      expect(controlsElement).toContainElement('button.score__button');
    })
  });

})
