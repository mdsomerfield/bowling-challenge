describe("Game", function() {

  describe("#roll", function() {

    it("applies the roll to the active frame", function() {
      // arrange
      var inactiveFrame = { active: false }
      var activeFrame = { active: true, roll: () => false };
      var game = new Game([ inactiveFrame, activeFrame ]);
      spyOn(activeFrame, 'roll');
      
      // act
      game.roll(4);

      // assert
      expect(activeFrame.roll).toHaveBeenCalledWith(4);
    });

  });

});
