(function () {

    describe('gameTrackerService', function () {
        beforeEach(module('PlayLikeTal'));

        var gameTracker, gameTalWhite, gameTalBlack;
        beforeEach(inject(function (gameTrackerService) {
            gameTracker = gameTrackerService;
            gameTalBlack = {
                event: 'Fool\'s Mate',
                site: 'Moon',
                date: 1969,
                round: '1',
                white: 'NN',
                black: 'Mikhail Tal',
                result: {'white':'0','black':'1'},
                eco: 'A00',
                moves:[
                    ['f3', 'e5'], ['g4', 'Qh4#']
                ]
            };
            gameTalWhite = {
                event: 'Scholar\'s Mate',
                site: 'Moon',
                date: 1969,
                round: null,
                white: 'Mikhail Tal',
                black: 'NN',
                result: {'white':'1','black':'0'},
                eco: 'A00',
                moves:[
                    ['e4', 'e5'],
                    ['Qh5', 'Nc6'],
                    ['Bc4', 'Nf6'],
                    ['Qxf7#']
                ]
            };
        }));

        it('should set the current game', function () {
            gameTracker.setCurrentGame(gameTalBlack);
            var gtGame = gameTracker.getCurrentGame();

            expect(gtGame).not.toEqual(null);
            expect(gtGame.event).toEqual(gameTalBlack.event);
        });

       describe('#isTalWhite()', function () {
           it('should say yes when tal is white', function () {
               gameTracker.setCurrentGame(gameTalWhite);
               expect(gameTracker.isTalWhite()).toBe(true);
           });

           it('should say no when tal is black', function () {
               gameTracker.setCurrentGame(gameTalBlack);
               expect(gameTracker.isTalWhite()).toBe(false);
           });
       });

       describe('#peekNextMove()', function () {
           it('should not pop the first move on call', function () {
               var next;
               gameTracker.setCurrentGame(gameTalBlack);
               next = gameTracker.peekNextMove();
               expect(next).toEqual('f3');

               next = gameTracker.peekNextMove();
               expect(next).toEqual('f3');
           });

           it('should return null if no moves left', function () {
               var copy = angular.copy(gameTalBlack),
                    next;
               copy.moves = [];

               gameTracker.setCurrentGame(copy);
               next = gameTracker.peekNextMove();
               expect(next).toEqual(null);
           });
       });

       describe('#getNextMove()', function () {
           it('should return the next move', function () {
               var next;
               gameTracker.setCurrentGame(gameTalBlack);
               next = gameTracker.getNextMove();
               expect(next).toEqual('f3');

               next = gameTracker.getNextMove();
               expect(next).toEqual('e5');

               next = gameTracker.getNextMove();
               expect(next).toEqual('g4');
           });
       });

       describe('#isPlayerMove()', function () {
           it('should say yes on first move when tal is white', function () {
               gameTracker.setCurrentGame(gameTalWhite);
               expect(gameTracker.isPlayerMove()).toBe(true);
           });

           it('should say no on first move when tal is black', function () {
               gameTracker.setCurrentGame(gameTalBlack);
               expect(gameTracker.isPlayerMove()).toBe(false);
           });

           it('should say no after first move when tal is white', function () {
               gameTracker.setCurrentGame(gameTalWhite);
               gameTracker.getNextMove();
               expect(gameTracker.isPlayerMove()).toBe(false);
           });

           it('should say yes after first move when tal is black', function () {
               gameTracker.setCurrentGame(gameTalBlack);
               gameTracker.getNextMove();
               expect(gameTracker.isPlayerMove()).toBe(true);
           });
       });

    });
}());
