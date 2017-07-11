describe('App Module', () => {
  var scope,
    controller;
    beforeEach(function () {
        angular.mock.module('app');
    });

  describe('appController', () => {
    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        controller = $controller('appController', {
            '$scope': scope
        });
      }),

    );
    /*
    the following 3 tests ensure that errors are displayed when a user
    incorrectly submits whether it's a string or out of range.
    */
    it('will return an error if a string is passed', () => {
      scope.submit('hello');
      expect(scope.error).not.toBe('');
      });
    });

    it('will return an error if the number is above 1', () => {
      scope.submit(2);
      expect(scope.error).not.toBe('');
    });

    it('will return an error if the number is below 0', () => {
      scope.submit(-2);
      expect(scope.error).not.toBe('');
    });

    /*
    when valid input is ensures no error is thrown and the the number
    is pushed to the percents array
    */

    it('will not error and will increase percents array length', () => {
      scope.submit(.54);
      expect(scope.error).toBe('');
      expect(scope.percents.length).toBe(1);
    });
    /*
    this will test the random buttons function and because it continues the test
    above the percents array will have a length of 2
    */
    it('will generate a random number and add it to the percents array', () => {
      scope.random();
      expect(scope.percents.length).toBe(2);
    });

    //last test will test clearing the previous 2 additions to the percents array
    it('will clear the percents array when called', () => {
      // add item to array just to be sure
      scope.submit(.54)
      expect(scope.percents.length).not.toBe(0);
      scope.clear();
      expect(scope.percents.length).toBe(0);
    });
});
