angular.module('PlayLikeTal.Constants', []);
angular.module('PlayLikeTal.Filters', []);
angular.module('PlayLikeTal.Controllers', []);
angular.module('PlayLikeTal.Directives', []);
angular.module('PlayLikeTal.Services', []);
angular.module('templates', []);

angular
.module('PlayLikeTal', [
    'infinite-scroll',
    'ngRoute',
    'ngMaterial',
    'templates',
    'PlayLikeTal.Constants',
    'PlayLikeTal.Filters',
    'PlayLikeTal.Controllers',
    'PlayLikeTal.Directives',
    'PlayLikeTal.Services'
])
.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'templates/introduction.html',
    })
    .when('/game/:id', {
        templateUrl: 'templates/game.html',
        resolve: {
            game: function (gameTrackerService, $routeParams, $route) {
                var id = $route.current.params.id;
                gameTrackerService.loadGame(id);
            }
        }
    });
});

angular.module('PlayLikeTal.Constants')

// Player name
.constant('PLAY_LIKE', {
    name: 'Mikhail Tal'
})

.constant('ECO', {
  A00: {
    name: "Uncommon Opening",
    moves: '1 g4, a3, h3, etc.1 g4, a3, h3, etc.'
  },
  A01: {
    name: "Nimzovich-Larsen Attack",
    moves: '1 b31 b3'
  },
  A02: {
    name: "Bird's Opening",
    moves: '1 f41 f4'
  },
  A03: {
    name: "Bird's Opening",
    moves: '1 f4 d51 f4 d5'
  },
  A04: {
    name: "Reti Opening",
    moves: '1 Nf31 Nf3'
  },
  A05: {
    name: "Reti Opening",
    moves: '1 Nf3 Nf61 Nf3 Nf6'
  },
  A06: {
    name: "Reti Opening",
    moves: '1 Nf3 d51 Nf3 d5'
  },
  A07: {
    name: "King's Indian Attack",
    moves: '1 Nf3 d5 2 g31 Nf3 d5 2 g3'
  },
  A08: {
    name: "King's Indian Attack",
    moves: '1 Nf3 d5 2 g3 c5 3 Bg21 Nf3 d5 2 g3 c5 3 Bg2'
  },
  A09: {
    name: "Reti Opening",
    moves: '1 Nf3 d5 2 c41 Nf3 d5 2 c4'
  },
  A10: {
    name: "English",
    moves: '1 c41 c4'
  },
  A11: {
    name: "English, Caro-Kann Defensive System",
    moves: '1 c4 c61 c4 c6'
  },
  A12: {
    name: "English with b3",
    moves: '1 c4 c6 2 Nf3 d5 3 b31 c4 c6 2 Nf3 d5 3 b3'
  },
  A13: {
    name: "English",
    moves: '1 c4 e61 c4 e6'
  },
  A14: {
    name: "English",
    moves: '1 c4 e6 2 Nf3 d5 3 g3 Nf6 4 Bg2 Be7 5 O-O1 c4 e6 2 Nf3 d5 3 g3 Nf6 4 Bg2 Be7 5 O-O'
  },
  A15: {
    name: "English",
    moves: '1 c4 Nf61 c4 Nf6'
  },
  A16: {
    name: "English",
    moves: '1 c4 Nf6 2 Nc31 c4 Nf6 2 Nc3'
  },
  A17: {
    name: "English",
    moves: '1 c4 Nf6 2 Nc3 e61 c4 Nf6 2 Nc3 e6'
  },
  A18: {
    name: "English, Mikenas-Carls",
    moves: '1 c4 Nf6 2 Nc3 e6 3 e41 c4 Nf6 2 Nc3 e6 3 e4'
  },
  A19: {
    name: "English, Mikenas-Carls, Sicilian Variation",
    moves: '1 c4 Nf6 2 Nc3 e6 3 e4 c51 c4 Nf6 2 Nc3 e6 3 e4 c5'
  },
  A20: {
    name: "English",
    moves: '1 c4 e51 c4 e5'
  },
  A21: {
    name: "English",
    moves: '1 c4 e5 2 Nc31 c4 e5 2 Nc3'
  },
  A22: {
    name: "English",
    moves: '1 c4 e5 2 Nc3 Nf61 c4 e5 2 Nc3 Nf6'
  },
  A23: {
    name: "English, Bremen System, Keres Variation",
    moves: '1 c4 e5 2 Nc3 Nf6 3 g3 c61 c4 e5 2 Nc3 Nf6 3 g3 c6'
  },
  A24: {
    name: "English, Bremen System with ...g6",
    moves: '1 c4 e5 2 Nc3 Nf6 3 g3 g61 c4 e5 2 Nc3 Nf6 3 g3 g6'
  },
  A25: {
    name: "English",
    moves: '1 c4 e5 2 Nc3 Nc61 c4 e5 2 Nc3 Nc6'
  },
  A26: {
    name: "English",
    moves: '1 c4 e5 2 Nc3 Nc6 3 g3 g6 4 Bg2 Bg7 5 d3 d61 c4 e5 2 Nc3 Nc6 3 g3 g6 4 Bg2 Bg7 5 d3 d6'
  },
  A27: {
    name: "English, Three Knights System",
    moves: '1 c4 e5 2 Nc3 Nc6 3 Nf31 c4 e5 2 Nc3 Nc6 3 Nf3'
  },
  A28: {
    name: "English",
    moves: '1 c4 e5 2 Nc3 Nc6 3 Nf3 Nf61 c4 e5 2 Nc3 Nc6 3 Nf3 Nf6'
  },
  A29: {
    name: "English, Four Knights, Kingside Fianchetto",
    moves: '1 c4 e5 2 Nc3 Nc6 3 Nf3 Nf6 4 g31 c4 e5 2 Nc3 Nc6 3 Nf3 Nf6 4 g3'
  },
  A30: {
    name: "English, Symmetrical",
    moves: '1 c4 c51 c4 c5'
  },
  A31: {
    name: "English, Symmetrical, Benoni Formation",
    moves: '1 c4 c5 2 Nf3 Nf6 3 d41 c4 c5 2 Nf3 Nf6 3 d4'
  },
  A32: {
    name: "English, Symmetrical Variation",
    moves: '1 c4 c5 2 Nf3 Nf6 3 d4 cxd4 4 Nxd4 e61 c4 c5 2 Nf3 Nf6 3 d4 cxd4 4 Nxd4 e6'
  },
  A33: {
    name: "English, Symmetrical",
    moves: '1 c4 c5 2 Nf3 Nf6 3 d4 cxd4 4 Nxd4 e6 5 Nc3 Nc61 c4 c5 2 Nf3 Nf6 3 d4 cxd4 4 Nxd4 e6 5 Nc3 Nc6'
  },
  A34: {
    name: "English, Symmetrical",
    moves: '1 c4 c5 2 Nc31 c4 c5 2 Nc3'
  },
  A35: {
    name: "English, Symmetrical",
    moves: '1 c4 c5 2 Nc3 Nc61 c4 c5 2 Nc3 Nc6'
  },
  A36: {
    name: "English",
    moves: '1 c4 c5 2 Nc3 Nc6 3 g31 c4 c5 2 Nc3 Nc6 3 g3'
  },
  A37: {
    name: "English, Symmetrical",
    moves: '1 c4 c5 2 Nc3 Nc6 3 g3 g6 4 Bg2 Bg7 5 Nf31 c4 c5 2 Nc3 Nc6 3 g3 g6 4 Bg2 Bg7 5 Nf3'
  },
  A38: {
    name: "English, Symmetrical",
    moves: '1 c4 c5 2 Nc3 Nc6 3 g3 g6 4 Bg2 Bg7 5 Nf3 Nf61 c4 c5 2 Nc3 Nc6 3 g3 g6 4 Bg2 Bg7 5 Nf3 Nf6'
  },
  A39: {
    name: "English, Symmetrical, Main line with d4",
    moves: '1 c4 c5 2 Nc3 Nc6 3 g3 g6 4 Bg2 Bg7 5 Nf3 Nf6 6 O-O O-O 7 d41 c4 c5 2 Nc3 Nc6 3 g3 g6 4 Bg2 Bg7 5 Nf3 Nf6 6 O-O O-O 7 d4'
  },
  A40: {
    name: "Queen's Pawn Game",
    moves: '1 d41 d4'
  },
  A41: {
    name: "Queen's Pawn Game (with ...d6)",
    moves: '1 d4 d61 d4 d6'
  },
  A42: {
    name: "Modern Defense, Averbakh System",
    moves: '1 d4 d6 2 c4 g6 3 Nc3 Bg7 4 e41 d4 d6 2 c4 g6 3 Nc3 Bg7 4 e4'
  },
  A43: {
    name: "Old Benoni",
    moves: '1 d4 c51 d4 c5'
  },
  A44: {
    name: "Old Benoni Defense",
    moves: '1 d4 c5 2 d5 e51 d4 c5 2 d5 e5'
  },
  A45: {
    name: "Queen's Pawn Game",
    moves: '1 d4 Nf61 d4 Nf6'
  },
  A46: {
    name: "Queen's Pawn Game",
    moves: '1 d4 Nf6 2 Nf31 d4 Nf6 2 Nf3'
  },
  A47: {
    name: "Queen's Indian",
    moves: '1 d4 Nf6 2 Nf3 b61 d4 Nf6 2 Nf3 b6'
  },
  A48: {
    name: "King's Indian",
    moves: '1 d4 Nf6 2 Nf3 g61 d4 Nf6 2 Nf3 g6'
  },
  A49: {
    name: "King's Indian, Fianchetto without c4",
    moves: '1 d4 Nf6 2 Nf3 g6 3 g31 d4 Nf6 2 Nf3 g6 3 g3'
  },
  A50: {
    name: "Queen's Pawn Game",
    moves: '1 d4 Nf6 2 c41 d4 Nf6 2 c4'
  },
  A51: {
    name: "Budapest Gambit",
    moves: '1 d4 Nf6 2 c4 e51 d4 Nf6 2 c4 e5'
  },
  A52: {
    name: "Budapest Gambit",
    moves: '1 d4 Nf6 2 c4 e5 3 dxe5 Ng41 d4 Nf6 2 c4 e5 3 dxe5 Ng4'
  },
  A53: {
    name: "Old Indian",
    moves: '1 d4 Nf6 2 c4 d61 d4 Nf6 2 c4 d6'
  },
  A54: {
    name: "Old Indian, Ukrainian Variation, 4.Nf3",
    moves: '1 d4 Nf6 2 c4 d6 3 Nc3 e5 4 Nf31 d4 Nf6 2 c4 d6 3 Nc3 e5 4 Nf3'
  },
  A55: {
    name: "Old Indian, Main line",
    moves: '1 d4 Nf6 2 c4 d6 3 Nc3 e5 4 Nf3 Nbd7 5 e41 d4 Nf6 2 c4 d6 3 Nc3 e5 4 Nf3 Nbd7 5 e4'
  },
  A56: {
    name: "Benoni Defense",
    moves: '1 d4 Nf6 2 c4 c51 d4 Nf6 2 c4 c5'
  },
  A57: {
    name: "Benko Gambit",
    moves: '1 d4 Nf6 2 c4 c5 3 d5 b51 d4 Nf6 2 c4 c5 3 d5 b5'
  },
  A58: {
    name: "Benko Gambit",
    moves: '1 d4 Nf6 2 c4 c5 3 d5 b5 4 cxb5 a6 5 bxa61 d4 Nf6 2 c4 c5 3 d5 b5 4 cxb5 a6 5 bxa6'
  },
  A59: {
    name: "Benko Gambit",
    moves: '1 d4 Nf6 2 c4 c5 3 d5 b5 4 cxb5 a6 5 bxa6 Bxa6 6 Nc3 d6 7 e41 d4 Nf6 2 c4 c5 3 d5 b5 4 cxb5 a6 5 bxa6 Bxa6 6 Nc3 d6 7 e4'
  },
  A60: {
    name: "Benoni Defense",
    moves: '1 d4 Nf6 2 c4 c5 3 d5 e61 d4 Nf6 2 c4 c5 3 d5 e6'
  },
  A61: {
    name: "Benoni",
    moves: '1 d4 Nf6 2 c4 c5 3 d5 e6 4 Nc3 exd5 5 cxd5 d6 6 Nf3 g61 d4 Nf6 2 c4 c5 3 d5 e6 4 Nc3 exd5 5 cxd5 d6 6 Nf3 g6'
  },
  A62: {
    name: "Benoni, Fianchetto Variation",
    moves: '1 d4 Nf6 2 c4 c5 3 d5 e6 4 Nc3 exd5 5 cxd5 d6 6 Nf3 g6 7 g3 Bg7 8 Bg2 O-O1 d4 Nf6 2 c4 c5 3 d5 e6 4 Nc3 exd5 5 cxd5 d6 6 Nf3 g6 7 g3 Bg7 8 Bg2 O-O'
  },
  A63: {
    name: "Benoni, Fianchetto, 9...Nbd7",
    moves: '1 d4 Nf6 2 c4 c5 3 d5 e6 4 Nc3 exd5 5 cxd5 d6 6 Nf3 g6 7 g3 Bg7 8 Bg2 O-O 91 d4 Nf6 2 c4 c5 3 d5 e6 4 Nc3 exd5 5 cxd5 d6 6 Nf3 g6 7 g3 Bg7 8 Bg2 O-O 9'
  },
  A64: {
    name: "Benoni, Fianchetto, 11...Re8",
    moves: '1 d4 Nf6 2 c4 c5 3 d5 e6 4 Nc3 exd5 5 cxd5 d6 6 Nf3 g6 7 g3 Bg7 8 Bg2 O-O 91 d4 Nf6 2 c4 c5 3 d5 e6 4 Nc3 exd5 5 cxd5 d6 6 Nf3 g6 7 g3 Bg7 8 Bg2 O-O 9'
  },
  A65: {
    name: "Benoni, 6.e4",
    moves: '1 d4 Nf6 2 c4 c5 3 d5 e6 4 Nc3 exd5 5 cxd5 d6 6 e41 d4 Nf6 2 c4 c5 3 d5 e6 4 Nc3 exd5 5 cxd5 d6 6 e4'
  },
  A66: {
    name: "Benoni",
    moves: '1 d4 Nf6 2 c4 c5 3 d5 e6 4 Nc3 exd5 5 cxd5 d6 6 e4 g6 7 f41 d4 Nf6 2 c4 c5 3 d5 e6 4 Nc3 exd5 5 cxd5 d6 6 e4 g6 7 f4'
  },
  A67: {
    name: "Benoni, Taimanov Variation",
    moves: '1 d4 Nf6 2 c4 c5 3 d5 e6 4 Nc3 exd5 5 cxd5 d6 6 e4 g6 7 f4 Bg7 8 Bb5+1 d4 Nf6 2 c4 c5 3 d5 e6 4 Nc3 exd5 5 cxd5 d6 6 e4 g6 7 f4 Bg7 8 Bb5+'
  },
  A68: {
    name: "Benoni, Four Pawns Attack",
    moves: '1 d4 Nf6 2 c4 c5 3 d5 e6 4 Nc3 exd5 5 cxd5 d6 6 e4 g6 7 f4 Bg7 8 Nf3 O-O1 d4 Nf6 2 c4 c5 3 d5 e6 4 Nc3 exd5 5 cxd5 d6 6 e4 g6 7 f4 Bg7 8 Nf3 O-O'
  },
  A69: {
    name: "Benoni, Four Pawns Attack, Main line",
    moves: '1 d4 Nf6 2 c4 c5 3 d5 e6 4 Nc3 exd5 5 cxd5 d6 6 e4 g6 7 f4 Bg7 8 Nf3 O-O 91 d4 Nf6 2 c4 c5 3 d5 e6 4 Nc3 exd5 5 cxd5 d6 6 e4 g6 7 f4 Bg7 8 Nf3 O-O 9'
  },
  A70: {
    name: "Benoni, Classical with 7.Nf3",
    moves: '1 d4 Nf6 2 c4 c5 3 d5 e6 4 Nc3 exd5 5 cxd5 d6 6 e4 g6 7 Nf31 d4 Nf6 2 c4 c5 3 d5 e6 4 Nc3 exd5 5 cxd5 d6 6 e4 g6 7 Nf3'
  },
  A71: {
    name: "Benoni, Classical, 8.Bg5",
    moves: '1 d4 Nf6 2 c4 c5 3 d5 e6 4 Nc3 exd5 5 cxd5 d6 6 e4 g6 7 Nf3 Bg7 8 Bg51 d4 Nf6 2 c4 c5 3 d5 e6 4 Nc3 exd5 5 cxd5 d6 6 e4 g6 7 Nf3 Bg7 8 Bg5'
  },
  A72: {
    name: "Benoni, Classical without 9.O-O",
    moves: '1 d4 Nf6 2 c4 c5 3 d5 e6 4 Nc3 exd5 5 cxd5 d6 6 e4 g6 7 Nf3 Bg7 8 Be2 O-O1 d4 Nf6 2 c4 c5 3 d5 e6 4 Nc3 exd5 5 cxd5 d6 6 e4 g6 7 Nf3 Bg7 8 Be2 O-O'
  },
  A73: {
    name: "Benoni, Classical, 9.O-O",
    moves: '1 d4 Nf6 2 c4 c5 3 d5 e6 4 Nc3 exd5 5 cxd5 d6 6 e4 g6 7 Nf3 Bg7 8 Be2 O-O 91 d4 Nf6 2 c4 c5 3 d5 e6 4 Nc3 exd5 5 cxd5 d6 6 e4 g6 7 Nf3 Bg7 8 Be2 O-O 9'
  },
  A74: {
    name: "Benoni, Classical, 9...a6, 10.a4",
    moves: '1 d4 Nf6 2 c4 c5 3 d5 e6 4 Nc3 exd5 5 cxd5 d6 6 e4 g6 7 Nf3 Bg7 8 Be2 O-O 91 d4 Nf6 2 c4 c5 3 d5 e6 4 Nc3 exd5 5 cxd5 d6 6 e4 g6 7 Nf3 Bg7 8 Be2 O-O 9'
  },
  A75: {
    name: "Benoni, Classical with ...a6 and 10...Bg4",
    moves: '1 d4 Nf6 2 c4 c5 3 d5 e6 4 Nc3 exd5 5 cxd5 d6 6 e4 g6 7 Nf3 Bg7 8 Be2 O-O 91 d4 Nf6 2 c4 c5 3 d5 e6 4 Nc3 exd5 5 cxd5 d6 6 e4 g6 7 Nf3 Bg7 8 Be2 O-O 9'
  },
  A76: {
    name: "Benoni, Classical, 9...Re8",
    moves: '1 d4 Nf6 2 c4 c5 3 d5 e6 4 Nc3 exd5 5 cxd5 d6 6 e4 g6 7 Nf3 Bg7 8 Be2 O-O 91 d4 Nf6 2 c4 c5 3 d5 e6 4 Nc3 exd5 5 cxd5 d6 6 e4 g6 7 Nf3 Bg7 8 Be2 O-O 9'
  },
  A77: {
    name: "Benoni, Classical, 9...Re8, 10.Nd2",
    moves: '1 d4 Nf6 2 c4 c5 3 d5 e6 4 Nc3 exd5 5 cxd5 d6 6 e4 g6 7 Nf3 Bg7 8 Be2 O-O 91 d4 Nf6 2 c4 c5 3 d5 e6 4 Nc3 exd5 5 cxd5 d6 6 e4 g6 7 Nf3 Bg7 8 Be2 O-O 9'
  },
  A78: {
    name: "Benoni, Classical with ...Re8 and ...Na6",
    moves: '1 d4 Nf6 2 c4 c5 3 d5 e6 4 Nc3 exd5 5 cxd5 d6 6 e4 g6 7 Nf3 Bg7 8 Be2 O-O 91 d4 Nf6 2 c4 c5 3 d5 e6 4 Nc3 exd5 5 cxd5 d6 6 e4 g6 7 Nf3 Bg7 8 Be2 O-O 9'
  },
  A79: {
    name: "Benoni, Classical, 11.f3",
    moves: '1 d4 Nf6 2 c4 c5 3 d5 e6 4 Nc3 exd5 5 cxd5 d6 6 e4 g6 7 Nf3 Bg7 8 Be2 O-O 91 d4 Nf6 2 c4 c5 3 d5 e6 4 Nc3 exd5 5 cxd5 d6 6 e4 g6 7 Nf3 Bg7 8 Be2 O-O 9'
  },
  A80: {
    name: "Dutch",
    moves: '1 d4 f51 d4 f5'
  },
  A81: {
    name: "Dutch",
    moves: '1 d4 f5 2 g31 d4 f5 2 g3'
  },
  A82: {
    name: "Dutch, Staunton Gambit",
    moves: '1 d4 f5 2 e41 d4 f5 2 e4'
  },
  A83: {
    name: "Dutch, Staunton Gambit",
    moves: '1 d4 f5 2 e4 fxe4 3 Nc3 Nf6 4 Bg51 d4 f5 2 e4 fxe4 3 Nc3 Nf6 4 Bg5'
  },
  A84: {
    name: "Dutch",
    moves: '1 d4 f5 2 c41 d4 f5 2 c4'
  },
  A85: {
    name: "Dutch, with c4 & Nc3",
    moves: '1 d4 f5 2 c4 Nf6 3 Nc31 d4 f5 2 c4 Nf6 3 Nc3'
  },
  A86: {
    name: "Dutch",
    moves: '1 d4 f5 2 c4 Nf6 3 g31 d4 f5 2 c4 Nf6 3 g3'
  },
  A87: {
    name: "Dutch, Leningrad, Main Variation",
    moves: '1 d4 f5 2 c4 Nf6 3 g3 g6 4 Bg2 Bg7 5 Nf31 d4 f5 2 c4 Nf6 3 g3 g6 4 Bg2 Bg7 5 Nf3'
  },
  A88: {
    name: "Dutch, Leningrad, Main Variation with c6",
    moves: '1 d4 f5 2 c4 Nf6 3 g3 g6 4 Bg2 Bg7 5 Nf3 O-O 6 O-O d6 7 Nc3 c61 d4 f5 2 c4 Nf6 3 g3 g6 4 Bg2 Bg7 5 Nf3 O-O 6 O-O d6 7 Nc3 c6'
  },
  A89: {
    name: "Dutch, Leningrad, Main Variation with Nc6",
    moves: '1 d4 f5 2 c4 Nf6 3 g3 g6 4 Bg2 Bg7 5 Nf3 O-O 6 O-O d6 7 Nc3 Nc61 d4 f5 2 c4 Nf6 3 g3 g6 4 Bg2 Bg7 5 Nf3 O-O 6 O-O d6 7 Nc3 Nc6'
  },
  A90: {
    name: "Dutch",
    moves: '1 d4 f5 2 c4 Nf6 3 g3 e6 4 Bg21 d4 f5 2 c4 Nf6 3 g3 e6 4 Bg2'
  },
  A91: {
    name: "Dutch Defense",
    moves: '1 d4 f5 2 c4 Nf6 3 g3 e6 4 Bg2 Be71 d4 f5 2 c4 Nf6 3 g3 e6 4 Bg2 Be7'
  },
  A92: {
    name: "Dutch",
    moves: '1 d4 f5 2 c4 Nf6 3 g3 e6 4 Bg2 Be7 5 Nf3 O-O1 d4 f5 2 c4 Nf6 3 g3 e6 4 Bg2 Be7 5 Nf3 O-O'
  },
  A93: {
    name: "Dutch, Stonewall, Botvinnik Variation",
    moves: '1 d4 f5 2 c4 Nf6 3 g3 e6 4 Bg2 Be7 5 Nf3 O-O 6 O-O d5 7 b31 d4 f5 2 c4 Nf6 3 g3 e6 4 Bg2 Be7 5 Nf3 O-O 6 O-O d5 7 b3'
  },
  A94: {
    name: "Dutch, Stonewall with Ba3",
    moves: '1 d4 f5 2 c4 Nf6 3 g3 e6 4 Bg2 Be7 5 Nf3 O-O 6 O-O d5 7 b3 c6 8 Ba31 d4 f5 2 c4 Nf6 3 g3 e6 4 Bg2 Be7 5 Nf3 O-O 6 O-O d5 7 b3 c6 8 Ba3'
  },
  A95: {
    name: "Dutch, Stonewall",
    moves: '1 d4 f5 2 c4 Nf6 3 g3 e6 4 Bg2 Be7 5 Nf3 O-O 6 O-O d5 7 Nc3 c61 d4 f5 2 c4 Nf6 3 g3 e6 4 Bg2 Be7 5 Nf3 O-O 6 O-O d5 7 Nc3 c6'
  },
  A96: {
    name: "Dutch, Classical Variation",
    moves: '1 d4 f5 2 c4 Nf6 3 g3 e6 4 Bg2 Be7 5 Nf3 O-O 6 O-O d61 d4 f5 2 c4 Nf6 3 g3 e6 4 Bg2 Be7 5 Nf3 O-O 6 O-O d6'
  },
  A97: {
    name: "Dutch, Ilyin-Genevsky",
    moves: '1 d4 f5 2 c4 Nf6 3 g3 e6 4 Bg2 Be7 5 Nf3 O-O 6 O-O d6 7 Nc3 Qe81 d4 f5 2 c4 Nf6 3 g3 e6 4 Bg2 Be7 5 Nf3 O-O 6 O-O d6 7 Nc3 Qe8'
  },
  A98: {
    name: "Dutch, Ilyin-Genevsky Variation with Qc2",
    moves: '1 d4 f5 2 c4 Nf6 3 g3 e6 4 Bg2 Be7 5 Nf3 O-O 6 O-O d6 7 Nc3 Qe8 8 Qc21 d4 f5 2 c4 Nf6 3 g3 e6 4 Bg2 Be7 5 Nf3 O-O 6 O-O d6 7 Nc3 Qe8 8 Qc2'
  },
  A99: {
    name: "Dutch, Ilyin-Genevsky Variation with b3",
    moves: '1 d4 f5 2 c4 Nf6 3 g3 e6 4 Bg2 Be7 5 Nf3 O-O 6 O-O d6 7 Nc3 Qe8 8 b31 d4 f5 2 c4 Nf6 3 g3 e6 4 Bg2 Be7 5 Nf3 O-O 6 O-O d6 7 Nc3 Qe8 8 b3'
  },
  B00: {
    name: "Uncommon King's Pawn Opening",
    moves: '1 e41 e4'
  },
  B01: {
    name: "Scandinavian",
    moves: '1 e4 d51 e4 d5'
  },
  B02: {
    name: "Alekhine's Defense",
    moves: '1 e4 Nf61 e4 Nf6'
  },
  B03: {
    name: "Alekhine's Defense",
    moves: '1 e4 Nf6 2 e5 Nd5 3 d41 e4 Nf6 2 e5 Nd5 3 d4'
  },
  B04: {
    name: "Alekhine's Defense, Modern",
    moves: '1 e4 Nf6 2 e5 Nd5 3 d4 d6 4 Nf31 e4 Nf6 2 e5 Nd5 3 d4 d6 4 Nf3'
  },
  B05: {
    name: "Alekhine's Defense, Modern",
    moves: '1 e4 Nf6 2 e5 Nd5 3 d4 d6 4 Nf3 Bg41 e4 Nf6 2 e5 Nd5 3 d4 d6 4 Nf3 Bg4'
  },
  B06: {
    name: "Robatsch",
    moves: '1 e4 g61 e4 g6'
  },
  B07: {
    name: "Pirc",
    moves: '1 e4 d6 2 d4 Nf61 e4 d6 2 d4 Nf6'
  },
  B08: {
    name: "Pirc, Classical",
    moves: '1 e4 d6 2 d4 Nf6 3 Nc3 g6 4 Nf31 e4 d6 2 d4 Nf6 3 Nc3 g6 4 Nf3'
  },
  B09: {
    name: "Pirc, Austrian Attack",
    moves: '1 e4 d6 2 d4 Nf6 3 Nc3 g6 4 f41 e4 d6 2 d4 Nf6 3 Nc3 g6 4 f4'
  },
  B10: {
    name: "Caro-Kann",
    moves: '1 e4 c61 e4 c6'
  },
  B11: {
    name: "Caro-Kann, Two Knights, 3...Bg4",
    moves: '1 e4 c6 2 Nc3 d5 3 Nf3 Bg41 e4 c6 2 Nc3 d5 3 Nf3 Bg4'
  },
  B12: {
    name: "Caro-Kann Defense",
    moves: '1 e4 c6 2 d41 e4 c6 2 d4'
  },
  B13: {
    name: "Caro-Kann, Exchange",
    moves: '1 e4 c6 2 d4 d5 3 exd5 cxd51 e4 c6 2 d4 d5 3 exd5 cxd5'
  },
  B14: {
    name: "Caro-Kann, Panov-Botvinnik Attack",
    moves: '1 e4 c6 2 d4 d5 3 exd5 cxd5 4 c4 Nf6 5 Nc3 e61 e4 c6 2 d4 d5 3 exd5 cxd5 4 c4 Nf6 5 Nc3 e6'
  },
  B15: {
    name: "Caro-Kann",
    moves: '1 e4 c6 2 d4 d5 3 Nc31 e4 c6 2 d4 d5 3 Nc3'
  },
  B16: {
    name: "Caro-Kann, Bronstein-Larsen Variation",
    moves: '1 e4 c6 2 d4 d5 3 Nc3 dxe4 4 Nxe4 Nf6 5 Nxf6+ gxf61 e4 c6 2 d4 d5 3 Nc3 dxe4 4 Nxe4 Nf6 5 Nxf6+ gxf6'
  },
  B17: {
    name: "Caro-Kann, Steinitz Variation",
    moves: '1 e4 c6 2 d4 d5 3 Nc3 dxe4 4 Nxe4 Nd71 e4 c6 2 d4 d5 3 Nc3 dxe4 4 Nxe4 Nd7'
  },
  B18: {
    name: "Caro-Kann, Classical",
    moves: '1 e4 c6 2 d4 d5 3 Nc3 dxe4 4 Nxe4 Bf51 e4 c6 2 d4 d5 3 Nc3 dxe4 4 Nxe4 Bf5'
  },
  B19: {
    name: "Caro-Kann, Classical",
    moves: '1 e4 c6 2 d4 d5 3 Nc3 dxe4 4 Nxe4 Bf5 5 Ng3 Bg6 6 h4 h6 7 Nf3 Nd71 e4 c6 2 d4 d5 3 Nc3 dxe4 4 Nxe4 Bf5 5 Ng3 Bg6 6 h4 h6 7 Nf3 Nd7'
  },
  B20: {
    name: "Sicilian",
    moves: '1 e4 c51 e4 c5'
  },
  B21: {
    name: "Sicilian, 2.f4 and 2.d4",
    moves: '1 e4 c5 2 f41 e4 c5 2 f4'
  },
  B22: {
    name: "Sicilian, Alapin",
    moves: '1 e4 c5 2 c31 e4 c5 2 c3'
  },
  B23: {
    name: "Sicilian, Closed",
    moves: '1 e4 c5 2 Nc31 e4 c5 2 Nc3'
  },
  B24: {
    name: "Sicilian, Closed",
    moves: '1 e4 c5 2 Nc3 Nc6 3 g31 e4 c5 2 Nc3 Nc6 3 g3'
  },
  B25: {
    name: "Sicilian, Closed",
    moves: '1 e4 c5 2 Nc3 Nc6 3 g3 g6 4 Bg2 Bg7 5 d3 d61 e4 c5 2 Nc3 Nc6 3 g3 g6 4 Bg2 Bg7 5 d3 d6'
  },
  B26: {
    name: "Sicilian, Closed, 6.Be3",
    moves: '1 e4 c5 2 Nc3 Nc6 3 g3 g6 4 Bg2 Bg7 5 d3 d6 6 Be31 e4 c5 2 Nc3 Nc6 3 g3 g6 4 Bg2 Bg7 5 d3 d6 6 Be3'
  },
  B27: {
    name: "Sicilian",
    moves: '1 e4 c5 2 Nf31 e4 c5 2 Nf3'
  },
  B28: {
    name: "Sicilian, O'Kelly Variation",
    moves: '1 e4 c5 2 Nf3 a61 e4 c5 2 Nf3 a6'
  },
  B29: {
    name: "Sicilian, Nimzovich-Rubinstein",
    moves: '1 e4 c5 2 Nf3 Nf61 e4 c5 2 Nf3 Nf6'
  },
  B30: {
    name: "Sicilian",
    moves: '1 e4 c5 2 Nf3 Nc61 e4 c5 2 Nf3 Nc6'
  },
  B31: {
    name: "Sicilian, Rossolimo Variation",
    moves: '1 e4 c5 2 Nf3 Nc6 3 Bb5 g61 e4 c5 2 Nf3 Nc6 3 Bb5 g6'
  },
  B32: {
    name: "Sicilian",
    moves: '1 e4 c5 2 Nf3 Nc6 3 d4 cxd4 4 Nxd4 e51 e4 c5 2 Nf3 Nc6 3 d4 cxd4 4 Nxd4 e5'
  },
  B33: {
    name: "Sicilian",
    moves: '1 e4 c5 2 Nf3 Nc6 3 d4 cxd4 4 Nxd41 e4 c5 2 Nf3 Nc6 3 d4 cxd4 4 Nxd4'
  },
  B34: {
    name: "Sicilian, Accelerated Fianchetto",
    moves: '1 e4 c5 2 Nf3 Nc6 3 d4 cxd4 4 Nxd4 g6 5 Nxc61 e4 c5 2 Nf3 Nc6 3 d4 cxd4 4 Nxd4 g6 5 Nxc6'
  },
  B35: {
    name: "Sicilian, Accelerated Fianchetto, Modern Variation with Bc4",
    moves: '1 e4 c5 2 Nf3 Nc6 3 d4 cxd4 4 Nxd4 g6 5 Nc3 Bg7 6 Be3 Nf6 7 Bc41 e4 c5 2 Nf3 Nc6 3 d4 cxd4 4 Nxd4 g6 5 Nc3 Bg7 6 Be3 Nf6 7 Bc4'
  },
  B36: {
    name: "Sicilian, Accelerated Fianchetto",
    moves: '1 e4 c5 2 Nf3 Nc6 3 d4 cxd4 4 Nxd4 g6 5 c41 e4 c5 2 Nf3 Nc6 3 d4 cxd4 4 Nxd4 g6 5 c4'
  },
  B37: {
    name: "Sicilian, Accelerated Fianchetto",
    moves: '1 e4 c5 2 Nf3 Nc6 3 d4 cxd4 4 Nxd4 g6 5 c4 Bg71 e4 c5 2 Nf3 Nc6 3 d4 cxd4 4 Nxd4 g6 5 c4 Bg7'
  },
  B38: {
    name: "Sicilian, Accelerated Fianchetto, Maroczy Bind, 6.Be3",
    moves: '1 e4 c5 2 Nf3 Nc6 3 d4 cxd4 4 Nxd4 g6 5 c4 Bg7 6 Be31 e4 c5 2 Nf3 Nc6 3 d4 cxd4 4 Nxd4 g6 5 c4 Bg7 6 Be3'
  },
  B39: {
    name: "Sicilian, Accelerated Fianchetto, Breyer Variation",
    moves: '1 e4 c5 2 Nf3 Nc6 3 d4 cxd4 4 Nxd4 g6 5 c4 Bg7 6 Be3 Nf6 7 Nc3 Ng41 e4 c5 2 Nf3 Nc6 3 d4 cxd4 4 Nxd4 g6 5 c4 Bg7 6 Be3 Nf6 7 Nc3 Ng4'
  },
  B40: {
    name: "Sicilian",
    moves: '1 e4 c5 2 Nf3 e61 e4 c5 2 Nf3 e6'
  },
  B41: {
    name: "Sicilian, Kan",
    moves: '1 e4 c5 2 Nf3 e6 3 d4 cxd4 4 Nxd4 a61 e4 c5 2 Nf3 e6 3 d4 cxd4 4 Nxd4 a6'
  },
  B42: {
    name: "Sicilian, Kan",
    moves: '1 e4 c5 2 Nf3 e6 3 d4 cxd4 4 Nxd4 a6 5 Bd31 e4 c5 2 Nf3 e6 3 d4 cxd4 4 Nxd4 a6 5 Bd3'
  },
  B43: {
    name: "Sicilian, Kan, 5.Nc3",
    moves: '1 e4 c5 2 Nf3 e6 3 d4 cxd4 4 Nxd4 a6 5 Nc31 e4 c5 2 Nf3 e6 3 d4 cxd4 4 Nxd4 a6 5 Nc3'
  },
  B44: {
    name: "Sicilian",
    moves: '1 e4 c5 2 Nf3 e6 3 d4 cxd4 4 Nxd4 Nc61 e4 c5 2 Nf3 e6 3 d4 cxd4 4 Nxd4 Nc6'
  },
  B45: {
    name: "Sicilian, Taimanov",
    moves: '1 e4 c5 2 Nf3 e6 3 d4 cxd4 4 Nxd4 Nc6 5 Nc31 e4 c5 2 Nf3 e6 3 d4 cxd4 4 Nxd4 Nc6 5 Nc3'
  },
  B46: {
    name: "Sicilian, Taimanov Variation",
    moves: '1 e4 c5 2 Nf3 e6 3 d4 cxd4 4 Nxd4 Nc6 5 Nc3 a61 e4 c5 2 Nf3 e6 3 d4 cxd4 4 Nxd4 Nc6 5 Nc3 a6'
  },
  B47: {
    name: "Sicilian, Taimanov (Bastrikov) Variation",
    moves: '1 e4 c5 2 Nf3 e6 3 d4 cxd4 4 Nxd4 Nc6 5 Nc3 Qc71 e4 c5 2 Nf3 e6 3 d4 cxd4 4 Nxd4 Nc6 5 Nc3 Qc7'
  },
  B48: {
    name: "Sicilian, Taimanov Variation",
    moves: '1 e4 c5 2 Nf3 e6 3 d4 cxd4 4 Nxd4 Nc6 5 Nc3 Qc7 6 Be31 e4 c5 2 Nf3 e6 3 d4 cxd4 4 Nxd4 Nc6 5 Nc3 Qc7 6 Be3'
  },
  B49: {
    name: "Sicilian, Taimanov Variation",
    moves: '1 e4 c5 2 Nf3 e6 3 d4 cxd4 4 Nxd4 Nc6 5 Nc3 Qc7 6 Be3 a6 7 Be21 e4 c5 2 Nf3 e6 3 d4 cxd4 4 Nxd4 Nc6 5 Nc3 Qc7 6 Be3 a6 7 Be2'
  },
  B50: {
    name: "Sicilian",
    moves: '1 e4 c5 2 Nf3 d61 e4 c5 2 Nf3 d6'
  },
  B51: {
    name: "Sicilian, Canal-Sokolsky (Rossolimo) Attack",
    moves: '1 e4 c5 2 Nf3 d6 3 Bb5+1 e4 c5 2 Nf3 d6 3 Bb5+'
  },
  B52: {
    name: "Sicilian, Canal-Sokolsky (Rossolimo) Attack",
    moves: '1 e4 c5 2 Nf3 d6 3 Bb5+ Bd71 e4 c5 2 Nf3 d6 3 Bb5+ Bd7'
  },
  B53: {
    name: "Sicilian",
    moves: '1 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Qxd41 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Qxd4'
  },
  B54: {
    name: "Sicilian",
    moves: '1 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd41 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4'
  },
  B55: {
    name: "Sicilian, Prins Variation, Venice Attack",
    moves: '1 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 f3 e5 6 Bb5+1 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 f3 e5 6 Bb5+'
  },
  B56: {
    name: "Sicilian",
    moves: '1 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc31 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3'
  },
  B57: {
    name: "Sicilian",
    moves: '1 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 Nc6 6 Bc41 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 Nc6 6 Bc4'
  },
  B58: {
    name: "Sicilian",
    moves: '1 e4 c5 2 Nf3 Nc6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 d6 6 Be21 e4 c5 2 Nf3 Nc6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 d6 6 Be2'
  },
  B59: {
    name: "Sicilian, Boleslavsky Variation, 7.Nb3",
    moves: '1 e4 c5 2 Nf3 Nc6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 d6 6 Be2 e5 7 Nb31 e4 c5 2 Nf3 Nc6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 d6 6 Be2 e5 7 Nb3'
  },
  B60: {
    name: "Sicilian, Richter-Rauzer",
    moves: '1 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 Nc6 6 Bg51 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 Nc6 6 Bg5'
  },
  B61: {
    name: "Sicilian, Richter-Rauzer, Larsen Variation, 7.Qd2",
    moves: '1 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 Nc6 6 Bg5 Bd7 7 Qd21 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 Nc6 6 Bg5 Bd7 7 Qd2'
  },
  B62: {
    name: "Sicilian, Richter-Rauzer",
    moves: '1 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 Nc6 6 Bg5 e61 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 Nc6 6 Bg5 e6'
  },
  B63: {
    name: "Sicilian, Richter-Rauzer Attack",
    moves: '1 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 Nc6 6 Bg5 e6 7 Qd21 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 Nc6 6 Bg5 e6 7 Qd2'
  },
  B64: {
    name: "Sicilian, Richter-Rauzer Attack",
    moves: '1 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 Nc6 6 Bg5 e6 7 Qd2 Be7 8 O-O-O O-O 9 f41 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 Nc6 6 Bg5 e6 7 Qd2 Be7 8 O-O-O O-O 9 f4'
  },
  B65: {
    name: "Sicilian, Richter-Rauzer Attack, 7...Be7 Defense, 9...Nxd4",
    moves: '1 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 Nc6 6 Bg5 e6 7 Qd2 Be7 8 O-O-O O-O 9 f4 Nxd4 10 Qxd41 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 Nc6 6 Bg5 e6 7 Qd2 Be7 8 O-O-O O-O 9 f4 Nxd4 10 Qxd4'
  },
  B66: {
    name: "Sicilian, Richter-Rauzer Attack, 7...a6",
    moves: '1 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 Nc6 6 Bg5 e6 7 Qd2 a61 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 Nc6 6 Bg5 e6 7 Qd2 a6'
  },
  B67: {
    name: "Sicilian, Richter-Rauzer Attack, 7...a6 Defense, 8...Bd7",
    moves: '1 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 Nc6 6 Bg5 e6 7 Qd2 a6 8 O-O-O Bd71 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 Nc6 6 Bg5 e6 7 Qd2 a6 8 O-O-O Bd7'
  },
  B68: {
    name: "Sicilian, Richter-Rauzer Attack, 7...a6 Defense, 9...Be7",
    moves: '1 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 Nc6 6 Bg5 e6 7 Qd2 a6 8 O-O-O Bd7 9 f4 Be71 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 Nc6 6 Bg5 e6 7 Qd2 a6 8 O-O-O Bd7 9 f4 Be7'
  },
  B69: {
    name: "Sicilian, Richter-Rauzer Attack, 7...a6 Defense, 11.Bxf6",
    moves: '1 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 Nc6 6 Bg5 e6 7 Qd2 a6 8 O-O-O Bd7 9 f4 Be7 10 Nf3 b5 11 Bxf61 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 Nc6 6 Bg5 e6 7 Qd2 a6 8 O-O-O Bd7 9 f4 Be7 10 Nf3 b5 11 Bxf6'
  },
  B70: {
    name: "Sicilian, Dragon Variation",
    moves: '1 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 g61 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 g6'
  },
  B71: {
    name: "Sicilian, Dragon, Levenfish Variation",
    moves: '1 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 g6 6 f41 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 g6 6 f4'
  },
  B72: {
    name: "Sicilian, Dragon",
    moves: '1 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 g6 6 Be31 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 g6 6 Be3'
  },
  B73: {
    name: "Sicilian, Dragon, Classical",
    moves: '1 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 g6 6 Be3 Bg7 7 Be2 Nc6 8 O-O1 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 g6 6 Be3 Bg7 7 Be2 Nc6 8 O-O'
  },
  B74: {
    name: "Sicilian, Dragon, Classical",
    moves: '1 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 g6 6 Be3 Bg7 7 Be2 Nc6 8 O-O O-O 9 Nb31 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 g6 6 Be3 Bg7 7 Be2 Nc6 8 O-O O-O 9 Nb3'
  },
  B75: {
    name: "Sicilian, Dragon, Yugoslav Attack",
    moves: '1 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 g6 6 Be3 Bg7 7 f31 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 g6 6 Be3 Bg7 7 f3'
  },
  B76: {
    name: "Sicilian, Dragon, Yugoslav Attack",
    moves: '1 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 g6 6 Be3 Bg7 7 f3 O-O1 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 g6 6 Be3 Bg7 7 f3 O-O'
  },
  B77: {
    name: "Sicilian, Dragon, Yugoslav Attack",
    moves: '1 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 g6 6 Be3 Bg7 7 f3 O-O 8 Qd2 Nc6 9 Bc41 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 g6 6 Be3 Bg7 7 f3 O-O 8 Qd2 Nc6 9 Bc4'
  },
  B78: {
    name: "Sicilian, Dragon, Yugoslav Attack, 10.castle long",
    moves: '1 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 g6 6 Be3 Bg7 7 f3 O-O 8 Qd2 Nc6 9 Bc4 Bd7 10 O-O-O1 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 g6 6 Be3 Bg7 7 f3 O-O 8 Qd2 Nc6 9 Bc4 Bd7 10 O-O-O'
  },
  B79: {
    name: "Sicilian, Dragon, Yugoslav Attack, 12.h4",
    moves: '1 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 g6 6 Be3 Bg7 7 f3 O-O 8 Qd2 Nc6 9 Bc4 Bd7 10 O-O-O Qa5 11 Bb3 Rfc8 12 h41 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 g6 6 Be3 Bg7 7 f3 O-O 8 Qd2 Nc6 9 Bc4 Bd7 10 O-O-O Qa5 11 Bb3 Rfc8 12 h4'
  },
  B80: {
    name: "Sicilian, Scheveningen",
    moves: '1 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 e61 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 e6'
  },
  B81: {
    name: "Sicilian, Scheveningen, Keres Attack",
    moves: '1 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 e6 6 g41 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 e6 6 g4'
  },
  B82: {
    name: "Sicilian, Scheveningen",
    moves: '1 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 e6 6 f41 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 e6 6 f4'
  },
  B83: {
    name: "Sicilian",
    moves: '1 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 e6 6 Be21 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 e6 6 Be2'
  },
  B84: {
    name: "Sicilian, Scheveningen",
    moves: '1 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 e6 6 Be2 a61 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 e6 6 Be2 a6'
  },
  B85: {
    name: "Sicilian, Scheveningen, Classical",
    moves: '1 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 e6 6 Be2 a6 7 O-O Qc7 8 f4 Nc61 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 e6 6 Be2 a6 7 O-O Qc7 8 f4 Nc6'
  },
  B86: {
    name: "Sicilian, Fischer-Sozin Attack",
    moves: '1 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 e6 6 Bc41 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 e6 6 Bc4'
  },
  B87: {
    name: "Sicilian, Fischer-Sozin with ...a6 and ...b5",
    moves: '1 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 e6 6 Bc4 a6 7 Bb3 b51 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 e6 6 Bc4 a6 7 Bb3 b5'
  },
  B88: {
    name: "Sicilian, Fischer-Sozin Attack",
    moves: '1 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 e6 6 Bc4 Nc61 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 e6 6 Bc4 Nc6'
  },
  B89: {
    name: "Sicilian",
    moves: '1 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 e6 6 Bc4 Nc6 7 Be31 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 e6 6 Bc4 Nc6 7 Be3'
  },
  B90: {
    name: "Sicilian, Najdorf",
    moves: '1 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 a61 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 a6'
  },
  B91: {
    name: "Sicilian, Najdorf, Zagreb (Fianchetto) Variation",
    moves: '1 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 a6 6 g31 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 a6 6 g3'
  },
  B92: {
    name: "Sicilian, Najdorf, Opocensky Variation",
    moves: '1 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 a6 6 Be21 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 a6 6 Be2'
  },
  B93: {
    name: "Sicilian, Najdorf, 6.f4",
    moves: '1 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 a6 6 f41 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 a6 6 f4'
  },
  B94: {
    name: "Sicilian, Najdorf",
    moves: '1 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 a6 6 Bg51 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 a6 6 Bg5'
  },
  B95: {
    name: "Sicilian, Najdorf, 6...e6",
    moves: '1 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 a6 6 Bg5 e61 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 a6 6 Bg5 e6'
  },
  B96: {
    name: "Sicilian, Najdorf",
    moves: '1 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 a6 6 Bg5 e6 7 f41 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 a6 6 Bg5 e6 7 f4'
  },
  B97: {
    name: "Sicilian, Najdorf",
    moves: '1 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 a6 6 Bg5 e6 7 f4 Qb61 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 a6 6 Bg5 e6 7 f4 Qb6'
  },
  B98: {
    name: "Sicilian, Najdorf",
    moves: '1 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 a6 6 Bg5 e6 7 f4 Be71 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 a6 6 Bg5 e6 7 f4 Be7'
  },
  B99: {
    name: "Sicilian, Najdorf, 7...Be7 Main line",
    moves: '1 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 a6 6 Bg5 e6 7 f4 Be7 8 Qf3 Qc7 9 O-O-O Nbd71 e4 c5 2 Nf3 d6 3 d4 cxd4 4 Nxd4 Nf6 5 Nc3 a6 6 Bg5 e6 7 f4 Be7 8 Qf3 Qc7 9 O-O-O Nbd7'
  },
  C00: {
    name: "French Defense",
    moves: '1 e4 e61 e4 e6'
  },
  C01: {
    name: "French, Exchange",
    moves: '1 e4 e6 2 d4 d5 3 exd5 exd5 4 Nc3 Nf6 5 Bg51 e4 e6 2 d4 d5 3 exd5 exd5 4 Nc3 Nf6 5 Bg5'
  },
  C02: {
    name: "French, Advance",
    moves: '1 e4 e6 2 d4 d5 3 e51 e4 e6 2 d4 d5 3 e5'
  },
  C03: {
    name: "French, Tarrasch",
    moves: '1 e4 e6 2 d4 d5 3 Nd21 e4 e6 2 d4 d5 3 Nd2'
  },
  C04: {
    name: "French, Tarrasch, Guimard Main line",
    moves: '1 e4 e6 2 d4 d5 3 Nd2 Nc6 4 Ngf3 Nf61 e4 e6 2 d4 d5 3 Nd2 Nc6 4 Ngf3 Nf6'
  },
  C05: {
    name: "French, Tarrasch",
    moves: '1 e4 e6 2 d4 d5 3 Nd2 Nf61 e4 e6 2 d4 d5 3 Nd2 Nf6'
  },
  C06: {
    name: "French, Tarrasch",
    moves: '1 e4 e6 2 d4 d5 3 Nd2 Nf6 4 e5 Nfd7 5 Bd3 c5 6 c3 Nc6 7 Ne2 cxd4 8 cxd41 e4 e6 2 d4 d5 3 Nd2 Nf6 4 e5 Nfd7 5 Bd3 c5 6 c3 Nc6 7 Ne2 cxd4 8 cxd4'
  },
  C07: {
    name: "French, Tarrasch",
    moves: '1 e4 e6 2 d4 d5 3 Nd2 c51 e4 e6 2 d4 d5 3 Nd2 c5'
  },
  C08: {
    name: "French, Tarrasch, Open, 4.ed ed",
    moves: '1 e4 e6 2 d4 d5 3 Nd2 c5 4 exd5 exd51 e4 e6 2 d4 d5 3 Nd2 c5 4 exd5 exd5'
  },
  C09: {
    name: "French, Tarrasch, Open Variation, Main line",
    moves: '1 e4 e6 2 d4 d5 3 Nd2 c5 4 exd5 exd5 5 Ngf3 Nc61 e4 e6 2 d4 d5 3 Nd2 c5 4 exd5 exd5 5 Ngf3 Nc6'
  },
  C10: {
    name: "French",
    moves: '1 e4 e6 2 d4 d5 3 Nc31 e4 e6 2 d4 d5 3 Nc3'
  },
  C11: {
    name: "French",
    moves: '1 e4 e6 2 d4 d5 3 Nc3 Nf61 e4 e6 2 d4 d5 3 Nc3 Nf6'
  },
  C12: {
    name: "French, McCutcheon",
    moves: '1 e4 e6 2 d4 d5 3 Nc3 Nf6 4 Bg5 Bb41 e4 e6 2 d4 d5 3 Nc3 Nf6 4 Bg5 Bb4'
  },
  C13: {
    name: "French",
    moves: '1 e4 e6 2 d4 d5 3 Nc3 Nf6 4 Bg5 Be71 e4 e6 2 d4 d5 3 Nc3 Nf6 4 Bg5 Be7'
  },
  C14: {
    name: "French, Classical",
    moves: '1 e4 e6 2 d4 d5 3 Nc3 Nf6 4 Bg5 Be7 5 e5 Nfd7 6 Bxe7 Qxe71 e4 e6 2 d4 d5 3 Nc3 Nf6 4 Bg5 Be7 5 e5 Nfd7 6 Bxe7 Qxe7'
  },
  C15: {
    name: "French, Winawer",
    moves: '1 e4 e6 2 d4 d5 3 Nc3 Bb41 e4 e6 2 d4 d5 3 Nc3 Bb4'
  },
  C16: {
    name: "French, Winawer",
    moves: '1 e4 e6 2 d4 d5 3 Nc3 Bb4 4 e51 e4 e6 2 d4 d5 3 Nc3 Bb4 4 e5'
  },
  C17: {
    name: "French, Winawer, Advance",
    moves: '1 e4 e6 2 d4 d5 3 Nc3 Bb4 4 e5 c51 e4 e6 2 d4 d5 3 Nc3 Bb4 4 e5 c5'
  },
  C18: {
    name: "French, Winawer",
    moves: '1 e4 e6 2 d4 d5 3 Nc3 Bb4 4 e5 c5 5 a3 Bxc3+ 6 bxc31 e4 e6 2 d4 d5 3 Nc3 Bb4 4 e5 c5 5 a3 Bxc3+ 6 bxc3'
  },
  C19: {
    name: "French, Winawer, Advance",
    moves: '1 e4 e6 2 d4 d5 3 Nc3 Bb4 4 e5 c5 5 a3 Bxc3+ 6 bxc3 Ne71 e4 e6 2 d4 d5 3 Nc3 Bb4 4 e5 c5 5 a3 Bxc3+ 6 bxc3 Ne7'
  },
  C20: {
    name: "King's Pawn Game",
    moves: '1 e4 e51 e4 e5'
  },
  C21: {
    name: "Center Game",
    moves: '1 e4 e5 2 d4 exd41 e4 e5 2 d4 exd4'
  },
  C22: {
    name: "Center Game",
    moves: '1 e4 e5 2 d4 exd4 3 Qxd4 Nc61 e4 e5 2 d4 exd4 3 Qxd4 Nc6'
  },
  C23: {
    name: "Bishop's Opening",
    moves: '1 e4 e5 2 Bc41 e4 e5 2 Bc4'
  },
  C24: {
    name: "Bishop's Opening",
    moves: '1 e4 e5 2 Bc4 Nf61 e4 e5 2 Bc4 Nf6'
  },
  C25: {
    name: "Vienna",
    moves: '1 e4 e5 2 Nc31 e4 e5 2 Nc3'
  },
  C26: {
    name: "Vienna",
    moves: '1 e4 e5 2 Nc3 Nf61 e4 e5 2 Nc3 Nf6'
  },
  C27: {
    name: "Vienna Game",
    moves: '1 e4 e5 2 Nc3 Nf6 3 Bc4 Nxe41 e4 e5 2 Nc3 Nf6 3 Bc4 Nxe4'
  },
  C28: {
    name: "Vienna Game",
    moves: '1 e4 e5 2 Nc3 Nf6 3 Bc4 Nc61 e4 e5 2 Nc3 Nf6 3 Bc4 Nc6'
  },
  C29: {
    name: "Vienna Gambit",
    moves: '1 e4 e5 2 Nc3 Nf6 3 f41 e4 e5 2 Nc3 Nf6 3 f4'
  },
  C30: {
    name: "King's Gambit Declined",
    moves: '1 e4 e5 2 f41 e4 e5 2 f4'
  },
  C31: {
    name: "King's Gambit Declined, Falkbeer Counter Gambit",
    moves: '1 e4 e5 2 f4 d51 e4 e5 2 f4 d5'
  },
  C32: {
    name: "King's Gambit Declined, Falkbeer Counter Gambit",
    moves: '1 e4 e5 2 f4 d5 3 exd5 e4 4 d3 Nf6 1 e4 e5 2 f4 d5 3 exd5 e4 4 d3 Nf6 '
  },
  C33: {
    name: "King's Gambit Accepted",
    moves: '1 e4 e5 2 f4 exf41 e4 e5 2 f4 exf4'
  },
  C34: {
    name: "King's Gambit Accepted",
    moves: '1 e4 e5 2 f4 exf4 3 Nf31 e4 e5 2 f4 exf4 3 Nf3'
  },
  C35: {
    name: "King's Gambit Accepted, Cunningham",
    moves: '1 e4 e5 2 f4 exf4 3 Nf3 Be71 e4 e5 2 f4 exf4 3 Nf3 Be7'
  },
  C36: {
    name: "King's Gambit Accepted, Abbazia Defense",
    moves: '1 e4 e5 2 f4 exf4 3 Nf3 d51 e4 e5 2 f4 exf4 3 Nf3 d5'
  },
  C37: {
    name: "King's Gambit Accepted",
    moves: '1 e4 e5 2 f4 exf4 3 Nf3 g5 4 Nc31 e4 e5 2 f4 exf4 3 Nf3 g5 4 Nc3'
  },
  C38: {
    name: "King's Gambit Accepted",
    moves: '1 e4 e5 2 f4 exf4 3 Nf3 g5 4 Bc4 Bg71 e4 e5 2 f4 exf4 3 Nf3 g5 4 Bc4 Bg7'
  },
  C39: {
    name: "King's Gambit Accepted",
    moves: '1 e4 e5 2 f4 exf4 3 Nf3 g5 4 h41 e4 e5 2 f4 exf4 3 Nf3 g5 4 h4'
  },
  C40: {
    name: "King's Knight Opening",
    moves: '1 e4 e5 2 Nf31 e4 e5 2 Nf3'
  },
  C41: {
    name: "Philidor Defense",
    moves: '1 e4 e5 2 Nf3 d61 e4 e5 2 Nf3 d6'
  },
  C42: {
    name: "Petrov Defense",
    moves: '1 e4 e5 2 Nf3 Nf61 e4 e5 2 Nf3 Nf6'
  },
  C43: {
    name: "Petrov, Modern Attack",
    moves: '1 e4 e5 2 Nf3 Nf6 3 d4 exd4 4 e5 Ne4 5 Qxd41 e4 e5 2 Nf3 Nf6 3 d4 exd4 4 e5 Ne4 5 Qxd4'
  },
  C44: {
    name: "King's Pawn Game",
    moves: '1 e4 e5 2 Nf3 Nc61 e4 e5 2 Nf3 Nc6'
  },
  C45: {
    name: "Scotch Game",
    moves: '1 e4 e5 2 Nf3 Nc6 3 d4 exd4 4 Nxd41 e4 e5 2 Nf3 Nc6 3 d4 exd4 4 Nxd4'
  },
  C46: {
    name: "Three Knights",
    moves: '1 e4 e5 2 Nf3 Nc6 3 Nc31 e4 e5 2 Nf3 Nc6 3 Nc3'
  },
  C47: {
    name: "Four Knights",
    moves: '1 e4 e5 2 Nf3 Nc6 3 Nc3 Nf61 e4 e5 2 Nf3 Nc6 3 Nc3 Nf6'
  },
  C48: {
    name: "Four Knights",
    moves: '1 e4 e5 2 Nf3 Nc6 3 Nc3 Nf6 4 Bb51 e4 e5 2 Nf3 Nc6 3 Nc3 Nf6 4 Bb5'
  },
  C49: {
    name: "Four Knights",
    moves: '1 e4 e5 2 Nf3 Nc6 3 Nc3 Nf6 4 Bb5 Bb41 e4 e5 2 Nf3 Nc6 3 Nc3 Nf6 4 Bb5 Bb4'
  },
  C50: {
    name: "Giuoco Piano",
    moves: '1 e4 e5 2 Nf3 Nc6 3 Bc4 Bc51 e4 e5 2 Nf3 Nc6 3 Bc4 Bc5'
  },
  C51: {
    name: "Evans Gambit",
    moves: '1 e4 e5 2 Nf3 Nc6 3 Bc4 Bc5 4 b4 1 e4 e5 2 Nf3 Nc6 3 Bc4 Bc5 4 b4 '
  },
  C52: {
    name: "Evans Gambit",
    moves: '1 e4 e5 2 Nf3 Nc6 3 Bc4 Bc5 4 b4 Bxb4 5 c3 Ba51 e4 e5 2 Nf3 Nc6 3 Bc4 Bc5 4 b4 Bxb4 5 c3 Ba5'
  },
  C53: {
    name: "Giuoco Piano",
    moves: '1 e4 e5 2 Nf3 Nc6 3 Bc4 Bc5 4 c31 e4 e5 2 Nf3 Nc6 3 Bc4 Bc5 4 c3'
  },
  C54: {
    name: "Giuoco Piano",
    moves: '1 e4 e5 2 Nf3 Nc6 3 Bc4 Bc5 4 c3 Nf6 5 d4 exd4 6 cxd41 e4 e5 2 Nf3 Nc6 3 Bc4 Bc5 4 c3 Nf6 5 d4 exd4 6 cxd4'
  },
  C55: {
    name: "Two Knights Defense",
    moves: '1 e4 e5 2 Nf3 Nc6 3 Bc4 Nf61 e4 e5 2 Nf3 Nc6 3 Bc4 Nf6'
  },
  C56: {
    name: "Two Knights",
    moves: '1 e4 e5 2 Nf3 Nc6 3 Bc4 Nf6 4 d4 exd4 5 O-O Nxe41 e4 e5 2 Nf3 Nc6 3 Bc4 Nf6 4 d4 exd4 5 O-O Nxe4'
  },
  C57: {
    name: "Two Knights",
    moves: '1 e4 e5 2 Nf3 Nc6 3 Bc4 Nf6 4 Ng51 e4 e5 2 Nf3 Nc6 3 Bc4 Nf6 4 Ng5'
  },
  C58: {
    name: "Two Knights",
    moves: '1 e4 e5 2 Nf3 Nc6 3 Bc4 Nf6 4 Ng5 d5 5 exd5 Na51 e4 e5 2 Nf3 Nc6 3 Bc4 Nf6 4 Ng5 d5 5 exd5 Na5'
  },
  C59: {
    name: "Two Knights",
    moves: '1 e4 e5 2 Nf3 Nc6 3 Bc4 Nf6 4 Ng5 d5 5 exd5 Na5 6 Bb5+ c6 7 dxc6 bxc6 8 Be2 h61 e4 e5 2 Nf3 Nc6 3 Bc4 Nf6 4 Ng5 d5 5 exd5 Na5 6 Bb5+ c6 7 dxc6 bxc6 8 Be2 h6'
  },
  C60: {
    name: "Ruy Lopez",
    moves: '1 e4 e5 2 Nf3 Nc6 3 Bb51 e4 e5 2 Nf3 Nc6 3 Bb5'
  },
  C61: {
    name: "Ruy Lopez, Bird's Defense",
    moves: '1 e4 e5 2 Nf3 Nc6 3 Bb5 Nd41 e4 e5 2 Nf3 Nc6 3 Bb5 Nd4'
  },
  C62: {
    name: "Ruy Lopez, Old Steinitz Defense",
    moves: '1 e4 e5 2 Nf3 Nc6 3 Bb5 d61 e4 e5 2 Nf3 Nc6 3 Bb5 d6'
  },
  C63: {
    name: "Ruy Lopez, Schliemann Defense",
    moves: '1 e4 e5 2 Nf3 Nc6 3 Bb5 f51 e4 e5 2 Nf3 Nc6 3 Bb5 f5'
  },
  C64: {
    name: "Ruy Lopez, Classical",
    moves: '1 e4 e5 2 Nf3 Nc6 3 Bb5 Bc51 e4 e5 2 Nf3 Nc6 3 Bb5 Bc5'
  },
  C65: {
    name: "Ruy Lopez, Berlin Defense",
    moves: '1 e4 e5 2 Nf3 Nc6 3 Bb5 Nf61 e4 e5 2 Nf3 Nc6 3 Bb5 Nf6'
  },
  C66: {
    name: "Ruy Lopez",
    moves: '1 e4 e5 2 Nf3 Nc6 3 Bb5 Nf6 4 O-O d61 e4 e5 2 Nf3 Nc6 3 Bb5 Nf6 4 O-O d6'
  },
  C67: {
    name: "Ruy Lopez",
    moves: '1 e4 e5 2 Nf3 Nc6 3 Bb5 Nf6 4 O-O Nxe41 e4 e5 2 Nf3 Nc6 3 Bb5 Nf6 4 O-O Nxe4'
  },
  C68: {
    name: "Ruy Lopez, Exchange",
    moves: '1 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Bxc61 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Bxc6'
  },
  C69: {
    name: "Ruy Lopez, Exchange, Gligoric Variation, 6.d4",
    moves: '1 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Bxc6 dc 5 O-O f6 6 d41 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Bxc6 dc 5 O-O f6 6 d4'
  },
  C70: {
    name: "Ruy Lopez",
    moves: '1 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba41 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4'
  },
  C71: {
    name: "Ruy Lopez",
    moves: '1 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 d61 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 d6'
  },
  C72: {
    name: "Ruy Lopez, Modern Steinitz Defense, 5.O-O",
    moves: '1 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 d6 5 O-O1 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 d6 5 O-O'
  },
  C73: {
    name: "Ruy Lopez, Modern Steinitz Defense",
    moves: '1 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 d6 5 Bxc6+ bxc6 6 d41 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 d6 5 Bxc6+ bxc6 6 d4'
  },
  C74: {
    name: "Ruy Lopez, Modern Steinitz Defense",
    moves: '1 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 d6 5 c31 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 d6 5 c3'
  },
  C75: {
    name: "Ruy Lopez, Modern Steinitz Defense",
    moves: '1 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 d6 5 c3 Bd71 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 d6 5 c3 Bd7'
  },
  C76: {
    name: "Ruy Lopez, Modern Steinitz Defense, Fianchetto Variation",
    moves: '1 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 d6 5 c3 Bd7 6 d4 g61 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 d6 5 c3 Bd7 6 d4 g6'
  },
  C77: {
    name: "Ruy Lopez",
    moves: '1 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 Nf61 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 Nf6'
  },
  C78: {
    name: "Ruy Lopez",
    moves: '1 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 Nf6 5 O-O1 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 Nf6 5 O-O'
  },
  C79: {
    name: "Ruy Lopez, Steinitz Defense Deferred",
    moves: '1 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 Nf6 5 O-O d61 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 Nf6 5 O-O d6'
  },
  C80: {
    name: "Ruy Lopez, Open",
    moves: '1 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 Nf6 5 O-O Nxe41 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 Nf6 5 O-O Nxe4'
  },
  C81: {
    name: "Ruy Lopez, Open, Howell Attack",
    moves: '1 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 Nf6 5 O-O Nxe4 6 d4 b5 7 Bb3 d5 8 dxe5 Be61 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 Nf6 5 O-O Nxe4 6 d4 b5 7 Bb3 d5 8 dxe5 Be6'
  },
  C82: {
    name: "Ruy Lopez, Open",
    moves: '1 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 Nf6 5 O-O Nxe4 6 d4 b5 7 Bb3 d5 8 dxe5 Be6 9 c31 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 Nf6 5 O-O Nxe4 6 d4 b5 7 Bb3 d5 8 dxe5 Be6 9 c3'
  },
  C83: {
    name: "Ruy Lopez, Open",
    moves: '1 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 Nf6 5 O-O Nxe4 6 d4 b5 7 Bb3 d5 8 dxe5 Be61 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 Nf6 5 O-O Nxe4 6 d4 b5 7 Bb3 d5 8 dxe5 Be6'
  },
  C84: {
    name: "Ruy Lopez, Closed",
    moves: '1 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 Nf6 5 O-O Be71 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 Nf6 5 O-O Be7'
  },
  C85: {
    name: "Ruy Lopez, Exchange Variation Doubly Deferred (DERLD)",
    moves: '1 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 Nf6 5 O-O Be7 6 Bxc6 dxc61 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 Nf6 5 O-O Be7 6 Bxc6 dxc6'
  },
  C86: {
    name: "Ruy Lopez, Worrall Attack",
    moves: '1 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 Nf6 5 O-O Be7 6 Qe21 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 Nf6 5 O-O Be7 6 Qe2'
  },
  C87: {
    name: "Ruy Lopez",
    moves: '1 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 Nf6 5 O-O Be7 6 Re1 d61 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 Nf6 5 O-O Be7 6 Re1 d6'
  },
  C88: {
    name: "Ruy Lopez",
    moves: '1 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 Nf6 5 O-O Be7 6 Re1 b5 7 Bb31 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 Nf6 5 O-O Be7 6 Re1 b5 7 Bb3'
  },
  C89: {
    name: "Ruy Lopez, Marshall",
    moves: '1 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 Nf6 5 O-O Be7 6 Re1 b5 7 Bb3 O-O 8 c3 d51 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 Nf6 5 O-O Be7 6 Re1 b5 7 Bb3 O-O 8 c3 d5'
  },
  C90: {
    name: "Ruy Lopez, Closed",
    moves: '1 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 Nf6 5 O-O Be7 6 Re1 b5 7 Bb3 O-O 8 c3 d61 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 Nf6 5 O-O Be7 6 Re1 b5 7 Bb3 O-O 8 c3 d6'
  },
  C91: {
    name: "Ruy Lopez, Closed",
    moves: '1 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 Nf6 5 O-O Be7 6 Re1 b5 7 Bb3 O-O 8 c3 d6 9 d41 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 Nf6 5 O-O Be7 6 Re1 b5 7 Bb3 O-O 8 c3 d6 9 d4'
  },
  C92: {
    name: "Ruy Lopez, Closed",
    moves: '1 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 Nf6 5 O-O Be7 6 Re1 b5 7 Bb3 O-O 8 c3 d6 9 h31 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 Nf6 5 O-O Be7 6 Re1 b5 7 Bb3 O-O 8 c3 d6 9 h3'
  },
  C93: {
    name: "Ruy Lopez, Closed, Smyslov Defense",
    moves: '1 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 Nf6 5 O-O Be7 6 Re1 b5 7 Bb3 O-O 8 c3 d6 9 h3 h61 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 Nf6 5 O-O Be7 6 Re1 b5 7 Bb3 O-O 8 c3 d6 9 h3 h6'
  },
  C94: {
    name: "Ruy Lopez, Closed, Breyer Defense",
    moves: '1 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 Nf6 5 O-O Be7 6 Re1 b5 7 Bb3 O-O 8 c3 d6 9 h3 Nb81 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 Nf6 5 O-O Be7 6 Re1 b5 7 Bb3 O-O 8 c3 d6 9 h3 Nb8'
  },
  C95: {
    name: "Ruy Lopez, Closed, Breyer",
    moves: '1 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 Nf6 5 O-O Be7 6 Re1 b5 7 Bb3 O-O 8 c3 d6 9 h3 Nb8 10 d41 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 Nf6 5 O-O Be7 6 Re1 b5 7 Bb3 O-O 8 c3 d6 9 h3 Nb8 10 d4'
  },
  C96: {
    name: "Ruy Lopez, Closed",
    moves: '1 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 Nf6 5 O-O Be7 6 Re1 b5 7 Bb3 O-O 8 c3 d6 9 h3 Na5 10 Bc21 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 Nf6 5 O-O Be7 6 Re1 b5 7 Bb3 O-O 8 c3 d6 9 h3 Na5 10 Bc2'
  },
  C97: {
    name: "Ruy Lopez, Closed, Chigorin",
    moves: '1 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 Nf6 5 O-O Be7 6 Re1 b5 7 Bb3 O-O 8 c3 d6 9 h3 Na5 10 Bc2 c5 11 d4 Qc71 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 Nf6 5 O-O Be7 6 Re1 b5 7 Bb3 O-O 8 c3 d6 9 h3 Na5 10 Bc2 c5 11 d4 Qc7'
  },
  C98: {
    name: "Ruy Lopez, Closed, Chigorin",
    moves: '1 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 Nf6 5 O-O Be7 6 Re1 b5 7 Bb3 O-O 8 c3 d6 9 h3 Na5 10 Bc2 c5 11 d4 Qc7 12 Nbd2 Nc61 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 Nf6 5 O-O Be7 6 Re1 b5 7 Bb3 O-O 8 c3 d6 9 h3 Na5 10 Bc2 c5 11 d4 Qc7 12 Nbd2 Nc6'
  },
  C99: {
    name: "Ruy Lopez, Closed, Chigorin, 12...cd",
    moves: '1 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 Nf6 5 O-O Be7 6 Re1 b5 7 Bb3 O-O 8 c3 d6 9 h3 Na5 10 Bc2 c5 11 d4 Qc7 12 Nbd2 cxd4 13 cxd41 e4 e5 2 Nf3 Nc6 3 Bb5 a6 4 Ba4 Nf6 5 O-O Be7 6 Re1 b5 7 Bb3 O-O 8 c3 d6 9 h3 Na5 10 Bc2 c5 11 d4 Qc7 12 Nbd2 cxd4 13 cxd4'
  },
  D00: {
    name: "Queen's Pawn Game",
    moves: '1 d4 d51 d4 d5'
  },
  D01: {
    name: "Richter-Veresov Attack",
    moves: '1 d4 d5 2 Nc3 Nf6 3 Bg51 d4 d5 2 Nc3 Nf6 3 Bg5'
  },
  D02: {
    name: "Queen's Pawn Game",
    moves: '1 d4 d5 2 Nf31 d4 d5 2 Nf3'
  },
  D03: {
    name: "Torre Attack (Tartakower Variation)",
    moves: '1 d4 d5 2 Nf3 Nf6 3 Bg51 d4 d5 2 Nf3 Nf6 3 Bg5'
  },
  D04: {
    name: "Queen's Pawn Game",
    moves: '1 d4 d5 2 Nf3 Nf6 3 e31 d4 d5 2 Nf3 Nf6 3 e3'
  },
  D05: {
    name: "Queen's Pawn Game",
    moves: '1 d4 d5 2 Nf3 Nf6 3 e3 e61 d4 d5 2 Nf3 Nf6 3 e3 e6'
  },
  D06: {
    name: "Queen's Gambit Declined",
    moves: '1 d4 d5 2 c41 d4 d5 2 c4'
  },
  D07: {
    name: "Queen's Gambit Declined, Chigorin Defense",
    moves: '1 d4 d5 2 c4 Nc61 d4 d5 2 c4 Nc6'
  },
  D08: {
    name: "Queen's Gambit Declined, Albin Counter Gambit",
    moves: '1 d4 d5 2 c4 e51 d4 d5 2 c4 e5'
  },
  D09: {
    name: "Queen's Gambit Declined, Albin Counter Gambit, 5.g3",
    moves: '1 d4 d5 2 c4 e5 3 dxe5 d4 4 Nf3 Nc6 5 g31 d4 d5 2 c4 e5 3 dxe5 d4 4 Nf3 Nc6 5 g3'
  },
  D10: {
    name: "Queen's Gambit Declined Slav",
    moves: '1 d4 d5 2 c4 c61 d4 d5 2 c4 c6'
  },
  D11: {
    name: "Queen's Gambit Declined Slav",
    moves: '1 d4 d5 2 c4 c6 3 Nf31 d4 d5 2 c4 c6 3 Nf3'
  },
  D12: {
    name: "Queen's Gambit Declined Slav",
    moves: '1 d4 d5 2 c4 c6 3 Nf3 Nf6 4 e3 Bf51 d4 d5 2 c4 c6 3 Nf3 Nf6 4 e3 Bf5'
  },
  D13: {
    name: "Queen's Gambit Declined Slav, Exchange Variation",
    moves: '1 d4 d5 2 c4 c6 3 Nf3 Nf6 4 cxd5 cxd51 d4 d5 2 c4 c6 3 Nf3 Nf6 4 cxd5 cxd5'
  },
  D14: {
    name: "Queen's Gambit Declined Slav, Exchange Variation",
    moves: '1 d4 d5 2 c4 c6 3 Nf3 Nf6 4 cxd5 cxd5 5 Nc3 Nc6 6 Bf4 Bf51 d4 d5 2 c4 c6 3 Nf3 Nf6 4 cxd5 cxd5 5 Nc3 Nc6 6 Bf4 Bf5'
  },
  D15: {
    name: "Queen's Gambit Declined Slav",
    moves: '1 d4 d5 2 c4 c6 3 Nf3 Nf6 4 Nc31 d4 d5 2 c4 c6 3 Nf3 Nf6 4 Nc3'
  },
  D16: {
    name: "Queen's Gambit Declined Slav",
    moves: '1 d4 d5 2 c4 c6 3 Nf3 Nf6 4 Nc3 dxc4 5 a41 d4 d5 2 c4 c6 3 Nf3 Nf6 4 Nc3 dxc4 5 a4'
  },
  D17: {
    name: "Queen's Gambit Declined Slav",
    moves: '1 d4 d5 2 c4 c6 3 Nf3 Nf6 4 Nc3 dxc4 5 a4 Bf51 d4 d5 2 c4 c6 3 Nf3 Nf6 4 Nc3 dxc4 5 a4 Bf5'
  },
  D18: {
    name: "Queen's Gambit Declined Slav, Dutch",
    moves: '1 d4 d5 2 c4 c6 3 Nf3 Nf6 4 Nc3 dxc4 5 a4 Bf5 6 e31 d4 d5 2 c4 c6 3 Nf3 Nf6 4 Nc3 dxc4 5 a4 Bf5 6 e3'
  },
  D19: {
    name: "Queen's Gambit Declined Slav, Dutch",
    moves: '1 d4 d5 2 c4 c6 3 Nf3 Nf6 4 Nc3 dxc4 5 a4 Bf5 6 e3 e6 7 Bxc4 Bb4 8 O-O O-O 9 Qe21 d4 d5 2 c4 c6 3 Nf3 Nf6 4 Nc3 dxc4 5 a4 Bf5 6 e3 e6 7 Bxc4 Bb4 8 O-O O-O 9 Qe2'
  },
  D20: {
    name: "Queen's Gambit Accepted",
    moves: '1 d4 d5 2 c4 dxc41 d4 d5 2 c4 dxc4'
  },
  D21: {
    name: "Queen's Gambit Accepted",
    moves: '1 d4 d5 2 c4 dxc4 3 Nf31 d4 d5 2 c4 dxc4 3 Nf3'
  },
  D22: {
    name: "Queen's Gambit Accepted",
    moves: '1 d4 d5 2 c4 dxc4 3 Nf3 a6 4 e3 Bg4 5 Bxc4 e6 6 d51 d4 d5 2 c4 dxc4 3 Nf3 a6 4 e3 Bg4 5 Bxc4 e6 6 d5'
  },
  D23: {
    name: "Queen's Gambit Accepted",
    moves: '1 d4 d5 2 c4 dxc4 3 Nf3 Nf61 d4 d5 2 c4 dxc4 3 Nf3 Nf6'
  },
  D24: {
    name: "Queen's Gambit Accepted",
    moves: '1 d4 d5 2 c4 dxc4 3 Nf3 Nf6 4 Nc31 d4 d5 2 c4 dxc4 3 Nf3 Nf6 4 Nc3'
  },
  D25: {
    name: "Queen's Gambit Accepted",
    moves: '1 d4 d5 2 c4 dxc4 3 Nf3 Nf6 4 e31 d4 d5 2 c4 dxc4 3 Nf3 Nf6 4 e3'
  },
  D26: {
    name: "Queen's Gambit Accepted",
    moves: '1 d4 d5 2 c4 dxc4 3 Nf3 Nf6 4 e3 e61 d4 d5 2 c4 dxc4 3 Nf3 Nf6 4 e3 e6'
  },
  D27: {
    name: "Queen's Gambit Accepted, Classical",
    moves: '1 d4 d5 2 c4 dxc4 3 Nf3 Nf6 4 e3 e6 5 Bxc4 c5 6 O-O a61 d4 d5 2 c4 dxc4 3 Nf3 Nf6 4 e3 e6 5 Bxc4 c5 6 O-O a6'
  },
  D28: {
    name: "Queen's Gambit Accepted, Classical",
    moves: '1 d4 d5 2 c4 dxc4 3 Nf3 Nf6 4 e3 e6 5 Bxc4 c5 6 O-O a6 7 Qe21 d4 d5 2 c4 dxc4 3 Nf3 Nf6 4 e3 e6 5 Bxc4 c5 6 O-O a6 7 Qe2'
  },
  D29: {
    name: "Queen's Gambit Accepted, Classical",
    moves: '1 d4 d5 2 c4 dxc4 3 Nf3 Nf6 4 e3 e6 5 Bxc4 c5 6 O-O a6 7 Qe2 b5 8 Bb3 Bb71 d4 d5 2 c4 dxc4 3 Nf3 Nf6 4 e3 e6 5 Bxc4 c5 6 O-O a6 7 Qe2 b5 8 Bb3 Bb7'
  },
  D30: {
    name: "Queen's Gambit Declined",
    moves: '1 d4 d5 2 c4 e61 d4 d5 2 c4 e6'
  },
  D31: {
    name: "Queen's Gambit Declined",
    moves: '1 d4 d5 2 c4 e6 3 Nc31 d4 d5 2 c4 e6 3 Nc3'
  },
  D32: {
    name: "Queen's Gambit Declined, Tarrasch",
    moves: '1 d4 d5 2 c4 e6 3 Nc3 c51 d4 d5 2 c4 e6 3 Nc3 c5'
  },
  D33: {
    name: "Queen's Gambit Declined, Tarrasch",
    moves: '1 d4 d5 2 c4 e6 3 Nc3 c5 4 cxd5 exd5 5 Nf3 Nc6 6 g31 d4 d5 2 c4 e6 3 Nc3 c5 4 cxd5 exd5 5 Nf3 Nc6 6 g3'
  },
  D34: {
    name: "Queen's Gambit Declined, Tarrasch",
    moves: '1 d4 d5 2 c4 e6 3 Nc3 c5 4 cxd5 exd5 5 Nf3 Nc6 6 g3 Nf6 7 Bg2 Be71 d4 d5 2 c4 e6 3 Nc3 c5 4 cxd5 exd5 5 Nf3 Nc6 6 g3 Nf6 7 Bg2 Be7'
  },
  D35: {
    name: "Queen's Gambit Declined",
    moves: '1 d4 d5 2 c4 e6 3 Nc3 Nf61 d4 d5 2 c4 e6 3 Nc3 Nf6'
  },
  D36: {
    name: "Queen's Gambit Declined, Exchange, Positional line, 6.Qc2",
    moves: '1 d4 d5 2 c4 e6 3 Nc3 Nf6 4 cxd5 exd5 5 Bg5 c6 6 Qc21 d4 d5 2 c4 e6 3 Nc3 Nf6 4 cxd5 exd5 5 Bg5 c6 6 Qc2'
  },
  D37: {
    name: "Queen's Gambit Declined",
    moves: '1 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Nf31 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Nf3'
  },
  D38: {
    name: "Queen's Gambit Declined, Ragozin Variation",
    moves: '1 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Nf3 Bb41 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Nf3 Bb4'
  },
  D39: {
    name: "Queen's Gambit Declined, Ragozin, Vienna Variation",
    moves: '1 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Nf3 Bb4 5 Bg5 dxc41 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Nf3 Bb4 5 Bg5 dxc4'
  },
  D40: {
    name: "Queen's Gambit Declined, Semi-Tarrasch",
    moves: '1 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Nf3 c51 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Nf3 c5'
  },
  D41: {
    name: "Queen's Gambit Declined, Semi-Tarrasch",
    moves: '1 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Nf3 c5 5 cxd51 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Nf3 c5 5 cxd5'
  },
  D42: {
    name: "Queen's Gambit Declined, Semi-Tarrasch, 7.Bd3",
    moves: '1 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Nf3 c5 5 cxd5 Nxd5 6 e3 Nc6 7 Bd31 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Nf3 c5 5 cxd5 Nxd5 6 e3 Nc6 7 Bd3'
  },
  D43: {
    name: "Queen's Gambit Declined Semi-Slav",
    moves: '1 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Nf3 c61 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Nf3 c6'
  },
  D44: {
    name: "Queen's Gambit Declined Semi-Slav",
    moves: '1 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Nf3 c6 5 Bg5 dxc41 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Nf3 c6 5 Bg5 dxc4'
  },
  D45: {
    name: "Queen's Gambit Declined Semi-Slav",
    moves: '1 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Nf3 c6 5 e31 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Nf3 c6 5 e3'
  },
  D46: {
    name: "Queen's Gambit Declined Semi-Slav",
    moves: '1 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Nf3 c6 5 e3 Nbd7 6 Bd31 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Nf3 c6 5 e3 Nbd7 6 Bd3'
  },
  D47: {
    name: "Queen's Gambit Declined Semi-Slav",
    moves: '1 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Nf3 c6 5 e3 Nbd7 6 Bd3 dxc4 7 Bxc41 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Nf3 c6 5 e3 Nbd7 6 Bd3 dxc4 7 Bxc4'
  },
  D48: {
    name: "Queen's Gambit Declined Semi-Slav, Meran",
    moves: '1 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Nf3 c6 5 e3 Nbd7 6 Bd3 dxc4 7 Bxc4 b5 8 Bd3 a61 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Nf3 c6 5 e3 Nbd7 6 Bd3 dxc4 7 Bxc4 b5 8 Bd3 a6'
  },
  D49: {
    name: "Queen's Gambit Declined Semi-Slav, Meran",
    moves: '1 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Nf3 c6 5 e3 Nbd7 6 Bd3 dxc4 7 Bxc4 b5 8 Bd3 a6 9 e4 c5 10 e5 cxd4 11 Nxb5 1 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Nf3 c6 5 e3 Nbd7 6 Bd3 dxc4 7 Bxc4 b5 8 Bd3 a6 9 e4 c5 10 e5 cxd4 11 Nxb5 '
  },
  D50: {
    name: "Queen's Gambit Declined",
    moves: '1 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Bg51 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Bg5'
  },
  D51: {
    name: "Queen's Gambit Declined",
    moves: '1 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Bg5 Nbd71 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Bg5 Nbd7'
  },
  D52: {
    name: "Queen's Gambit Declined",
    moves: '1 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Bg5 Nbd7 5 e3 c6 6 Nf31 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Bg5 Nbd7 5 e3 c6 6 Nf3'
  },
  D53: {
    name: "Queen's Gambit Declined",
    moves: '1 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Bg5 Be71 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Bg5 Be7'
  },
  D54: {
    name: "Queen's Gambit Declined, Anti-Neo-Orthodox Variation",
    moves: '1 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Bg5 Be7 5 e3 O-O 6 Rc11 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Bg5 Be7 5 e3 O-O 6 Rc1'
  },
  D55: {
    name: "Queen's Gambit Declined",
    moves: '1 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Bg5 Be7 5 e3 O-O 6 Nf31 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Bg5 Be7 5 e3 O-O 6 Nf3'
  },
  D56: {
    name: "Queen's Gambit Declined",
    moves: '1 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Bg5 Be7 5 e3 O-O 6 Nf3 h6 7 Bh41 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Bg5 Be7 5 e3 O-O 6 Nf3 h6 7 Bh4'
  },
  D57: {
    name: "Queen's Gambit Declined, Lasker Defense",
    moves: '1 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Bg5 Be7 5 e3 O-O 6 Nf3 h6 7 Bh4 Ne4 8 Bxe7 Qxe71 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Bg5 Be7 5 e3 O-O 6 Nf3 h6 7 Bh4 Ne4 8 Bxe7 Qxe7'
  },
  D58: {
    name: "Queen's Gambit Declined, Tartakower (Makagonov-Bondarevsky) System",
    moves: '1 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Bg5 Be7 5 e3 O-O 6 Nf3 h6 7 Bh4 b61 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Bg5 Be7 5 e3 O-O 6 Nf3 h6 7 Bh4 b6'
  },
  D59: {
    name: "Queen's Gambit Declined, Tartakower",
    moves: '1 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Bg5 Be7 5 e3 O-O 6 Nf3 h6 7 Bh4 b6 8 cxd5 Nxd51 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Bg5 Be7 5 e3 O-O 6 Nf3 h6 7 Bh4 b6 8 cxd5 Nxd5'
  },
  D60: {
    name: "Queen's Gambit Declined, Orthodox Defense",
    moves: '1 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Bg5 Be7 5 e3 O-O 6 Nf3 Nbd71 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Bg5 Be7 5 e3 O-O 6 Nf3 Nbd7'
  },
  D61: {
    name: "Queen's Gambit Declined, Orthodox, Rubinstein Attack",
    moves: '1 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Bg5 Be7 5 e3 O-O 6 Nf3 Nbd7 7 Qc21 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Bg5 Be7 5 e3 O-O 6 Nf3 Nbd7 7 Qc2'
  },
  D62: {
    name: "Queen's Gambit Declined, Orthodox, Rubinstein Attack",
    moves: '1 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Bg5 Be7 5 e3 O-O 6 Nf3 Nbd7 7 Qc2 c5 8 cxd51 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Bg5 Be7 5 e3 O-O 6 Nf3 Nbd7 7 Qc2 c5 8 cxd5'
  },
  D63: {
    name: "Queen's Gambit Declined, Orthodox Defense",
    moves: '1 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Bg5 Be7 5 e3 O-O 6 Nf3 Nbd7 7 Rc11 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Bg5 Be7 5 e3 O-O 6 Nf3 Nbd7 7 Rc1'
  },
  D64: {
    name: "Queen's Gambit Declined, Orthodox, Rubinstein Attack",
    moves: '1 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Bg5 Be7 5 e3 O-O 6 Nf3 Nbd7 7 Rc1 c6 8 Qc21 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Bg5 Be7 5 e3 O-O 6 Nf3 Nbd7 7 Rc1 c6 8 Qc2'
  },
  D65: {
    name: "Queen's Gambit Declined, Orthodox, Rubinstein Attack, Main line",
    moves: '1 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Bg5 Be7 5 e3 O-O 6 Nf3 Nbd7 7 Rc1 c6 8 Qc2 a6 9 cxd51 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Bg5 Be7 5 e3 O-O 6 Nf3 Nbd7 7 Rc1 c6 8 Qc2 a6 9 cxd5'
  },
  D66: {
    name: "Queen's Gambit Declined, Orthodox Defense, Bd3 line",
    moves: '1 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Bg5 Be7 5 e3 O-O 6 Nf3 Nbd7 7 Rc1 c6 8 Bd31 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Bg5 Be7 5 e3 O-O 6 Nf3 Nbd7 7 Rc1 c6 8 Bd3'
  },
  D67: {
    name: "Queen's Gambit Declined, Orthodox Defense, Bd3 line",
    moves: '1 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Bg5 Be7 5 e3 O-O 6 Nf3 Nbd7 7 Rc1 c6 8 Bd3 dxc4 9 Bxc4 Nd51 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Bg5 Be7 5 e3 O-O 6 Nf3 Nbd7 7 Rc1 c6 8 Bd3 dxc4 9 Bxc4 Nd5'
  },
  D68: {
    name: "Queen's Gambit Declined, Orthodox Defense, Classical",
    moves: '1 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Bg5 Be7 5 e3 O-O 6 Nf3 Nbd7 7 Rc1 c6 8 Bd3 dxc41 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Bg5 Be7 5 e3 O-O 6 Nf3 Nbd7 7 Rc1 c6 8 Bd3 dxc4'
  },
  D69: {
    name: "Queen's Gambit Declined, Orthodox Defense, Classical, 13.de",
    moves: '1 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Bg5 Be7 5 e3 O-O 6 Nf3 Nbd7 7 Rc1 c6 8 Bd3 dxc41 d4 d5 2 c4 e6 3 Nc3 Nf6 4 Bg5 Be7 5 e3 O-O 6 Nf3 Nbd7 7 Rc1 c6 8 Bd3 dxc4'
  },
  D70: {
    name: "Neo-Grunfeld Defense",
    moves: '1 d4 Nf6 2 c4 g6 3 f3 d51 d4 Nf6 2 c4 g6 3 f3 d5'
  },
  D71: {
    name: "Neo-Grunfeld",
    moves: '1 d4 Nf6 2 c4 g6 3 g3 d51 d4 Nf6 2 c4 g6 3 g3 d5'
  },
  D72: {
    name: "Neo-Grunfeld, 5.cd, Main line",
    moves: '1 d4 Nf6 2 c4 g6 3 g3 d5 4 Bg2 Bg7 5 cxd5 Nxd5 6 e4 Nb6 7 Ne21 d4 Nf6 2 c4 g6 3 g3 d5 4 Bg2 Bg7 5 cxd5 Nxd5 6 e4 Nb6 7 Ne2'
  },
  D73: {
    name: "Neo-Grunfeld, 5.Nf3",
    moves: '1 d4 Nf6 2 c4 g6 3 g3 d5 4 Bg2 Bg7 5 Nf31 d4 Nf6 2 c4 g6 3 g3 d5 4 Bg2 Bg7 5 Nf3'
  },
  D74: {
    name: "Neo-Grunfeld, 6.cd Nxd5, 7.O-O",
    moves: '1 d4 Nf6 2 c4 g6 3 g3 d5 4 Bg2 Bg7 5 Nf3 O-O 6 cxd5 Nxd5 7 O-O1 d4 Nf6 2 c4 g6 3 g3 d5 4 Bg2 Bg7 5 Nf3 O-O 6 cxd5 Nxd5 7 O-O'
  },
  D75: {
    name: "Neo-Grunfeld, 6.cd Nxd5, 7.O-O c5, 8.dxc5",
    moves: '1 d4 Nf6 2 c4 g6 3 g3 d5 4 Bg2 Bg7 5 Nf3 O-O 6 cxd5 Nxd5 7 O-O c5 8 dxc51 d4 Nf6 2 c4 g6 3 g3 d5 4 Bg2 Bg7 5 Nf3 O-O 6 cxd5 Nxd5 7 O-O c5 8 dxc5'
  },
  D76: {
    name: "Neo-Grunfeld, 6.cd Nxd5, 7.O-O Nb6",
    moves: '1 d4 Nf6 2 c4 g6 3 g3 d5 4 Bg2 Bg7 5 Nf3 O-O 6 cxd5 Nxd5 7 O-O Nb61 d4 Nf6 2 c4 g6 3 g3 d5 4 Bg2 Bg7 5 Nf3 O-O 6 cxd5 Nxd5 7 O-O Nb6'
  },
  D77: {
    name: "Neo-Grunfeld, 6.O-O",
    moves: '1 d4 Nf6 2 c4 g6 3 g3 d5 4 Bg2 Bg7 5 Nf3 O-O 6 O-O1 d4 Nf6 2 c4 g6 3 g3 d5 4 Bg2 Bg7 5 Nf3 O-O 6 O-O'
  },
  D78: {
    name: "Neo-Grunfeld, 6.O-O c6",
    moves: '1 d4 Nf6 2 c4 g6 3 g3 d5 4 Bg2 Bg7 5 Nf3 O-O 6 O-O c61 d4 Nf6 2 c4 g6 3 g3 d5 4 Bg2 Bg7 5 Nf3 O-O 6 O-O c6'
  },
  D79: {
    name: "Neo-Grunfeld, 6.O-O, Main line",
    moves: '1 d4 Nf6 2 c4 g6 3 g3 d5 4 Bg2 Bg7 5 Nf3 O-O 6 O-O c6 7 cxd5 cxd51 d4 Nf6 2 c4 g6 3 g3 d5 4 Bg2 Bg7 5 Nf3 O-O 6 O-O c6 7 cxd5 cxd5'
  },
  D80: {
    name: "Grunfeld",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 d51 d4 Nf6 2 c4 g6 3 Nc3 d5'
  },
  D81: {
    name: "Grunfeld, Russian Variation",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 d5 4 Qb31 d4 Nf6 2 c4 g6 3 Nc3 d5 4 Qb3'
  },
  D82: {
    name: "Grunfeld, 4.Bf4",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 d5 4 Bf41 d4 Nf6 2 c4 g6 3 Nc3 d5 4 Bf4'
  },
  D83: {
    name: "Grunfeld, Grunfeld Gambit",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 d5 4 Bf4 Bg7 5 e3 O-O1 d4 Nf6 2 c4 g6 3 Nc3 d5 4 Bf4 Bg7 5 e3 O-O'
  },
  D84: {
    name: "Grunfeld, Grunfeld Gambit Accepted",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 d5 4 Bf4 Bg7 5 e3 O-O 6 cxd5 Nxd5 7 Nxd5 Qxd5 8 Bxc71 d4 Nf6 2 c4 g6 3 Nc3 d5 4 Bf4 Bg7 5 e3 O-O 6 cxd5 Nxd5 7 Nxd5 Qxd5 8 Bxc7'
  },
  D85: {
    name: "Grunfeld",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 d5 4 cxd5 Nxd51 d4 Nf6 2 c4 g6 3 Nc3 d5 4 cxd5 Nxd5'
  },
  D86: {
    name: "Grunfeld, Exchange",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 d5 4 cxd5 Nxd5 5 e4 Nxc3 6 bxc3 Bg7 7 Bc41 d4 Nf6 2 c4 g6 3 Nc3 d5 4 cxd5 Nxd5 5 e4 Nxc3 6 bxc3 Bg7 7 Bc4'
  },
  D87: {
    name: "Grunfeld, Exchange",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 d5 4 cxd5 Nxd5 5 e4 Nxc3 6 bxc3 Bg7 7 Bc4 O-O 8 Ne2 c51 d4 Nf6 2 c4 g6 3 Nc3 d5 4 cxd5 Nxd5 5 e4 Nxc3 6 bxc3 Bg7 7 Bc4 O-O 8 Ne2 c5'
  },
  D88: {
    name: "Grunfeld, Spassky Variation, Main line, 10...cd, 11.cd",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 d5 4 cxd5 Nxd5 5 e4 Nxc3 6 bxc3 Bg7 7 Bc4 O-O 8 Ne21 d4 Nf6 2 c4 g6 3 Nc3 d5 4 cxd5 Nxd5 5 e4 Nxc3 6 bxc3 Bg7 7 Bc4 O-O 8 Ne2'
  },
  D89: {
    name: "Grunfeld",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 d5 4 cxd5 Nxd5 5 e4 Nxc3 6 bxc3 Bg7 7 Bc4 O-O 8 Ne21 d4 Nf6 2 c4 g6 3 Nc3 d5 4 cxd5 Nxd5 5 e4 Nxc3 6 bxc3 Bg7 7 Bc4 O-O 8 Ne2'
  },
  D90: {
    name: "Grunfeld",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 d5 4 Nf31 d4 Nf6 2 c4 g6 3 Nc3 d5 4 Nf3'
  },
  D91: {
    name: "Grunfeld, 5.Bg5",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 d5 4 Nf3 Bg7 5 Bg51 d4 Nf6 2 c4 g6 3 Nc3 d5 4 Nf3 Bg7 5 Bg5'
  },
  D92: {
    name: "Grunfeld, 5.Bf4",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 d5 4 Nf3 Bg7 5 Bf41 d4 Nf6 2 c4 g6 3 Nc3 d5 4 Nf3 Bg7 5 Bf4'
  },
  D93: {
    name: "Grunfeld, with Bf4 & e3",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 d5 4 Nf3 Bg7 5 Bf4 O-O 6 e31 d4 Nf6 2 c4 g6 3 Nc3 d5 4 Nf3 Bg7 5 Bf4 O-O 6 e3'
  },
  D94: {
    name: "Grunfeld",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 d5 4 Nf3 Bg7 5 e31 d4 Nf6 2 c4 g6 3 Nc3 d5 4 Nf3 Bg7 5 e3'
  },
  D95: {
    name: "Grunfeld",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 d5 4 Nf3 Bg7 5 e3 O-O 6 Qb31 d4 Nf6 2 c4 g6 3 Nc3 d5 4 Nf3 Bg7 5 e3 O-O 6 Qb3'
  },
  D96: {
    name: "Grunfeld, Russian Variation",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 d5 4 Nf3 Bg7 5 Qb31 d4 Nf6 2 c4 g6 3 Nc3 d5 4 Nf3 Bg7 5 Qb3'
  },
  D97: {
    name: "Grunfeld, Russian",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 d5 4 Nf3 Bg7 5 Qb3 dxc4 6 Qxc4 O-O 7 e41 d4 Nf6 2 c4 g6 3 Nc3 d5 4 Nf3 Bg7 5 Qb3 dxc4 6 Qxc4 O-O 7 e4'
  },
  D98: {
    name: "Grunfeld, Russian",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 d5 4 Nf3 Bg7 5 Qb3 dxc4 6 Qxc4 O-O 7 e4 Bg41 d4 Nf6 2 c4 g6 3 Nc3 d5 4 Nf3 Bg7 5 Qb3 dxc4 6 Qxc4 O-O 7 e4 Bg4'
  },
  D99: {
    name: "Grunfeld Defense, Smyslov",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 d5 4 Nf3 Bg7 5 Qb3 dxc4 6 Qxc4 O-O 7 e4 Bg4 8 Be31 d4 Nf6 2 c4 g6 3 Nc3 d5 4 Nf3 Bg7 5 Qb3 dxc4 6 Qxc4 O-O 7 e4 Bg4 8 Be3'
  },
  E00: {
    name: "Queen's Pawn Game",
    moves: '1 d4 Nf6 2 c4 e61 d4 Nf6 2 c4 e6'
  },
  E01: {
    name: "Catalan, Closed",
    moves: '1 d4 Nf6 2 c4 e6 3 g3 d5 4 Bg21 d4 Nf6 2 c4 e6 3 g3 d5 4 Bg2'
  },
  E02: {
    name: "Catalan, Open, 5.Qa4",
    moves: '1 d4 Nf6 2 c4 e6 3 g3 d5 4 Bg2 dxc4 5 Qa4+1 d4 Nf6 2 c4 e6 3 g3 d5 4 Bg2 dxc4 5 Qa4+'
  },
  E03: {
    name: "Catalan, Open",
    moves: '1 d4 Nf6 2 c4 e6 3 g3 d5 4 Bg2 dxc4 5 Qa4+ Nbd7 6 Qxc41 d4 Nf6 2 c4 e6 3 g3 d5 4 Bg2 dxc4 5 Qa4+ Nbd7 6 Qxc4'
  },
  E04: {
    name: "Catalan, Open, 5.Nf3",
    moves: '1 d4 Nf6 2 c4 e6 3 g3 d5 4 Bg2 dxc4 5 Nf31 d4 Nf6 2 c4 e6 3 g3 d5 4 Bg2 dxc4 5 Nf3'
  },
  E05: {
    name: "Catalan, Open, Classical line",
    moves: '1 d4 Nf6 2 c4 e6 3 g3 d5 4 Bg2 dxc4 5 Nf3 Be71 d4 Nf6 2 c4 e6 3 g3 d5 4 Bg2 dxc4 5 Nf3 Be7'
  },
  E06: {
    name: "Catalan, Closed, 5.Nf3",
    moves: '1 d4 Nf6 2 c4 e6 3 g3 d5 4 Bg2 Be7 5 Nf31 d4 Nf6 2 c4 e6 3 g3 d5 4 Bg2 Be7 5 Nf3'
  },
  E07: {
    name: "Catalan, Closed",
    moves: '1 d4 Nf6 2 c4 e6 3 g3 d5 4 Bg2 Be7 5 Nf3 O-O 6 O-O Nbd71 d4 Nf6 2 c4 e6 3 g3 d5 4 Bg2 Be7 5 Nf3 O-O 6 O-O Nbd7'
  },
  E08: {
    name: "Catalan, Closed",
    moves: '1 d4 Nf6 2 c4 e6 3 g3 d5 4 Bg2 Be7 5 Nf3 O-O 6 O-O Nbd7 7 Qc21 d4 Nf6 2 c4 e6 3 g3 d5 4 Bg2 Be7 5 Nf3 O-O 6 O-O Nbd7 7 Qc2'
  },
  E09: {
    name: "Catalan, Closed",
    moves: '1 d4 Nf6 2 c4 e6 3 g3 d5 4 Bg2 Be7 5 Nf3 O-O 6 O-O Nbd7 7 Qc2 c6 8 Nbd21 d4 Nf6 2 c4 e6 3 g3 d5 4 Bg2 Be7 5 Nf3 O-O 6 O-O Nbd7 7 Qc2 c6 8 Nbd2'
  },
  E10: {
    name: "Queen's Pawn Game",
    moves: '1 d4 Nf6 2 c4 e6 3 Nf31 d4 Nf6 2 c4 e6 3 Nf3'
  },
  E11: {
    name: "Bogo-Indian Defense",
    moves: '1 d4 Nf6 2 c4 e6 3 Nf3 Bb4+1 d4 Nf6 2 c4 e6 3 Nf3 Bb4+'
  },
  E12: {
    name: "Queen's Indian",
    moves: '1 d4 Nf6 2 c4 e6 3 Nf3 b61 d4 Nf6 2 c4 e6 3 Nf3 b6'
  },
  E13: {
    name: "Queen's Indian, 4.Nc3, Main line",
    moves: '1 d4 Nf6 2 c4 e6 3 Nf3 b6 4 Nc3 Bb7 5 Bg5 h6 6 Bh4 Bb41 d4 Nf6 2 c4 e6 3 Nf3 b6 4 Nc3 Bb7 5 Bg5 h6 6 Bh4 Bb4'
  },
  E14: {
    name: "Queen's Indian",
    moves: '1 d4 Nf6 2 c4 e6 3 Nf3 b6 4 e31 d4 Nf6 2 c4 e6 3 Nf3 b6 4 e3'
  },
  E15: {
    name: "Queen's Indian",
    moves: '1 d4 Nf6 2 c4 e6 3 Nf3 b6 4 g31 d4 Nf6 2 c4 e6 3 Nf3 b6 4 g3'
  },
  E16: {
    name: "Queen's Indian",
    moves: '1 d4 Nf6 2 c4 e6 3 Nf3 b6 4 g3 Bb7 5 Bg2 Bb4+1 d4 Nf6 2 c4 e6 3 Nf3 b6 4 g3 Bb7 5 Bg2 Bb4+'
  },
  E17: {
    name: "Queen's Indian",
    moves: '1 d4 Nf6 2 c4 e6 3 Nf3 b6 4 g3 Bb7 5 Bg2 Be71 d4 Nf6 2 c4 e6 3 Nf3 b6 4 g3 Bb7 5 Bg2 Be7'
  },
  E18: {
    name: "Queen's Indian, Old Main line, 7.Nc3",
    moves: '1 d4 Nf6 2 c4 e6 3 Nf3 b6 4 g3 Bb7 5 Bg2 Be7 6 O-O O-O 7 Nc31 d4 Nf6 2 c4 e6 3 Nf3 b6 4 g3 Bb7 5 Bg2 Be7 6 O-O O-O 7 Nc3'
  },
  E19: {
    name: "Queen's Indian, Old Main line, 9.Qxc3",
    moves: '1 d4 Nf6 2 c4 e6 3 Nf3 b6 4 g3 Bb7 5 Bg2 Be7 6 O-O O-O 7 Nc3 Ne4 8 Qc2 Nxc31 d4 Nf6 2 c4 e6 3 Nf3 b6 4 g3 Bb7 5 Bg2 Be7 6 O-O O-O 7 Nc3 Ne4 8 Qc2 Nxc3'
  },
  E20: {
    name: "Nimzo-Indian",
    moves: '1 d4 Nf6 2 c4 e6 3 Nc3 Bb41 d4 Nf6 2 c4 e6 3 Nc3 Bb4'
  },
  E21: {
    name: "Nimzo-Indian, Three Knights",
    moves: '1 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 Nf31 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 Nf3'
  },
  E22: {
    name: "Nimzo-Indian, Spielmann Variation",
    moves: '1 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 Qb31 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 Qb3'
  },
  E23: {
    name: "Nimzo-Indian, Spielmann",
    moves: '1 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 Qb3 c5 5 dxc5 Nc61 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 Qb3 c5 5 dxc5 Nc6'
  },
  E24: {
    name: "Nimzo-Indian, Samisch",
    moves: '1 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 a3 Bxc3+ 5 bxc31 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 a3 Bxc3+ 5 bxc3'
  },
  E25: {
    name: "Nimzo-Indian, Samisch",
    moves: '1 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 a3 Bxc3+ 5 bxc3 c5 6 f3 d5 7 cxd51 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 a3 Bxc3+ 5 bxc3 c5 6 f3 d5 7 cxd5'
  },
  E26: {
    name: "Nimzo-Indian, Samisch",
    moves: '1 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 a3 Bxc3+ 5 bxc3 c5 6 e31 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 a3 Bxc3+ 5 bxc3 c5 6 e3'
  },
  E27: {
    name: "Nimzo-Indian, Samisch Variation",
    moves: '1 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 a3 Bxc3+ 5 bxc3 O-O1 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 a3 Bxc3+ 5 bxc3 O-O'
  },
  E28: {
    name: "Nimzo-Indian, Samisch Variation",
    moves: '1 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 a3 Bxc3+ 5 bxc3 O-O 6 e31 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 a3 Bxc3+ 5 bxc3 O-O 6 e3'
  },
  E29: {
    name: "Nimzo-Indian, Samisch",
    moves: '1 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 a3 Bxc3+ 5 bxc3 O-O 6 e3 c5 7 Bd3 Nc61 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 a3 Bxc3+ 5 bxc3 O-O 6 e3 c5 7 Bd3 Nc6'
  },
  E30: {
    name: "Nimzo-Indian, Leningrad",
    moves: '1 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 Bg51 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 Bg5'
  },
  E31: {
    name: "Nimzo-Indian, Leningrad, Main line",
    moves: '1 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 Bg5 h6 5 Bh4 c5 6 d5 d61 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 Bg5 h6 5 Bh4 c5 6 d5 d6'
  },
  E32: {
    name: "Nimzo-Indian, Classical",
    moves: '1 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 Qc21 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 Qc2'
  },
  E33: {
    name: "Nimzo-Indian, Classical",
    moves: '1 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 Qc2 Nc61 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 Qc2 Nc6'
  },
  E34: {
    name: "Nimzo-Indian, Classical, Noa Variation",
    moves: '1 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 Qc2 d51 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 Qc2 d5'
  },
  E35: {
    name: "Nimzo-Indian, Classical, Noa Variation, 5.cd ed",
    moves: '1 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 Qc2 d5 5 cxd5 exd51 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 Qc2 d5 5 cxd5 exd5'
  },
  E36: {
    name: "Nimzo-Indian, Classical",
    moves: '1 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 Qc2 d5 5 a31 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 Qc2 d5 5 a3'
  },
  E37: {
    name: "Nimzo-Indian, Classical",
    moves: '1 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 Qc2 d5 5 a3 Bxc3+ 6 Qxc3 Ne4 7 Qc21 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 Qc2 d5 5 a3 Bxc3+ 6 Qxc3 Ne4 7 Qc2'
  },
  E38: {
    name: "Nimzo-Indian, Classical, 4...c5",
    moves: '1 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 Qc2 c51 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 Qc2 c5'
  },
  E39: {
    name: "Nimzo-Indian, Classical, Pirc Variation",
    moves: '1 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 Qc2 c5 5 dxc5 O-O1 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 Qc2 c5 5 dxc5 O-O'
  },
  E40: {
    name: "Nimzo-Indian, 4.e3",
    moves: '1 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 e31 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 e3'
  },
  E41: {
    name: "Nimzo-Indian",
    moves: '1 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 e3 c51 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 e3 c5'
  },
  E42: {
    name: "Nimzo-Indian, 4.e3 c5, 5.Ne2 (Rubinstein)",
    moves: '1 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 e3 c5 5 Ne21 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 e3 c5 5 Ne2'
  },
  E43: {
    name: "Nimzo-Indian, Fischer Variation",
    moves: '1 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 e3 b61 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 e3 b6'
  },
  E44: {
    name: "Nimzo-Indian, Fischer Variation, 5.Ne2",
    moves: '1 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 e3 b6 5 Ne21 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 e3 b6 5 Ne2'
  },
  E45: {
    name: "Nimzo-Indian, 4.e3, Bronstein (Byrne) Variation",
    moves: '1 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 e3 b6 5 Ne2 Ba61 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 e3 b6 5 Ne2 Ba6'
  },
  E46: {
    name: "Nimzo-Indian",
    moves: '1 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 e3 O-O1 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 e3 O-O'
  },
  E47: {
    name: "Nimzo-Indian, 4.e3 O-O 5.Bd3",
    moves: '1 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 e3 O-O 5 Bd31 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 e3 O-O 5 Bd3'
  },
  E48: {
    name: "Nimzo-Indian, 4.e3 O-O 5.Bd3 d5",
    moves: '1 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 e3 O-O 5 Bd3 d51 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 e3 O-O 5 Bd3 d5'
  },
  E49: {
    name: "Nimzo-Indian, 4.e3, Botvinnik System",
    moves: '1 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 e3 O-O 5 Bd3 d5 6 a3 Bxc3+ 7 bxc31 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 e3 O-O 5 Bd3 d5 6 a3 Bxc3+ 7 bxc3'
  },
  E50: {
    name: "Nimzo-Indian, 4.e3 O-O 5.Nf3, without ...d5",
    moves: '1 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 e3 O-O 5 Nf31 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 e3 O-O 5 Nf3'
  },
  E51: {
    name: "Nimzo-Indian, 4.e3",
    moves: '1 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 e3 O-O 5 Nf3 d51 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 e3 O-O 5 Nf3 d5'
  },
  E52: {
    name: "Nimzo-Indian, 4.e3, Main line with ...b6",
    moves: '1 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 e3 O-O 5 Nf3 d5 6 Bd3 b61 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 e3 O-O 5 Nf3 d5 6 Bd3 b6'
  },
  E53: {
    name: "Nimzo-Indian, 4.e3",
    moves: '1 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 e3 O-O 5 Nf3 d5 6 Bd3 c51 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 e3 O-O 5 Nf3 d5 6 Bd3 c5'
  },
  E54: {
    name: "Nimzo-Indian, 4.e3, Gligoric System",
    moves: '1 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 e3 O-O 5 Nf3 d5 6 Bd3 c5 7 O-O dxc4 8 Bxc41 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 e3 O-O 5 Nf3 d5 6 Bd3 c5 7 O-O dxc4 8 Bxc4'
  },
  E55: {
    name: "Nimzo-Indian, 4.e3, Gligoric System, Bronstein Variation",
    moves: '1 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 e3 O-O 5 Nf3 d5 6 Bd3 c5 7 O-O dxc4 8 Bxc4 Nbd71 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 e3 O-O 5 Nf3 d5 6 Bd3 c5 7 O-O dxc4 8 Bxc4 Nbd7'
  },
  E56: {
    name: "Nimzo-Indian, 4.e3, Main line with 7...Nc6",
    moves: '1 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 e3 O-O 5 Nf3 d5 6 Bd3 c5 7 O-O Nc61 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 e3 O-O 5 Nf3 d5 6 Bd3 c5 7 O-O Nc6'
  },
  E57: {
    name: "Nimzo-Indian, 4.e3, Main line with 8...dc and 9...cd",
    moves: '1 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 e3 O-O 5 Nf3 d5 6 Bd3 c5 7 O-O Nc6 8 a3 dxc4 9 Bxc41 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 e3 O-O 5 Nf3 d5 6 Bd3 c5 7 O-O Nc6 8 a3 dxc4 9 Bxc4'
  },
  E58: {
    name: "Nimzo-Indian, 4.e3, Main line with 8...Bxc3",
    moves: '1 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 e3 O-O 5 Nf3 d5 6 Bd3 c5 7 O-O Nc6 8 a3 Bxc3 9 bxc31 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 e3 O-O 5 Nf3 d5 6 Bd3 c5 7 O-O Nc6 8 a3 Bxc3 9 bxc3'
  },
  E59: {
    name: "Nimzo-Indian, 4.e3, Main line",
    moves: '1 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 e3 O-O 5 Nf3 d5 6 Bd3 c5 7 O-O Nc6 8 a3 Bxc3 9 bxc3 dxc4 10 Bxc41 d4 Nf6 2 c4 e6 3 Nc3 Bb4 4 e3 O-O 5 Nf3 d5 6 Bd3 c5 7 O-O Nc6 8 a3 Bxc3 9 bxc3 dxc4 10 Bxc4'
  },
  E60: {
    name: "King's Indian Defense",
    moves: '1 d4 Nf6 2 c4 g61 d4 Nf6 2 c4 g6'
  },
  E61: {
    name: "King's Indian",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc31 d4 Nf6 2 c4 g6 3 Nc3'
  },
  E62: {
    name: "King's Indian, Fianchetto",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 Nf3 d6 5 g31 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 Nf3 d6 5 g3'
  },
  E63: {
    name: "King's Indian, Fianchetto, Panno Variation",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 Nf3 d6 5 g3 O-O 6 Bg2 Nc6 7 O-O a61 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 Nf3 d6 5 g3 O-O 6 Bg2 Nc6 7 O-O a6'
  },
  E64: {
    name: "King's Indian, Fianchetto, Yugoslav System",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 Nf3 d6 5 g3 O-O 6 Bg2 c51 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 Nf3 d6 5 g3 O-O 6 Bg2 c5'
  },
  E65: {
    name: "King's Indian, Fianchetto, Yugoslav, 7.O-O",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 Nf3 d6 5 g3 O-O 6 Bg2 c5 7 O-O1 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 Nf3 d6 5 g3 O-O 6 Bg2 c5 7 O-O'
  },
  E66: {
    name: "King's Indian, Fianchetto, Yugoslav Panno",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 Nf3 d6 5 g3 O-O 6 Bg2 c5 7 O-O Nc6 8 d51 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 Nf3 d6 5 g3 O-O 6 Bg2 c5 7 O-O Nc6 8 d5'
  },
  E67: {
    name: "King's Indian, Fianchetto",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 Nf3 d6 5 g3 O-O 6 Bg2 Nbd71 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 Nf3 d6 5 g3 O-O 6 Bg2 Nbd7'
  },
  E68: {
    name: "King's Indian, Fianchetto, Classical Variation, 8.e4",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 Nf3 d6 5 g3 O-O 6 Bg2 Nbd7 7 O-O e5 8 e41 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 Nf3 d6 5 g3 O-O 6 Bg2 Nbd7 7 O-O e5 8 e4'
  },
  E69: {
    name: "King's Indian, Fianchetto, Classical Main line",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 Nf3 d6 5 g3 O-O 6 Bg2 Nbd7 7 O-O e5 8 e4 c6 9 h31 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 Nf3 d6 5 g3 O-O 6 Bg2 Nbd7 7 O-O e5 8 e4 c6 9 h3'
  },
  E70: {
    name: "King's Indian",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e41 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4'
  },
  E71: {
    name: "King's Indian, Makagonov System (5.h3)",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 h31 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 h3'
  },
  E72: {
    name: "King's Indian",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 g31 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 g3'
  },
  E73: {
    name: "King's Indian",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 Be21 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 Be2'
  },
  E74: {
    name: "King's Indian, Averbakh, 6...c5",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 Be2 O-O 6 Bg5 c51 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 Be2 O-O 6 Bg5 c5'
  },
  E75: {
    name: "King's Indian, Averbakh, Main line",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 Be2 O-O 6 Bg5 c5 7 d5 e61 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 Be2 O-O 6 Bg5 c5 7 d5 e6'
  },
  E76: {
    name: "King's Indian, Four Pawns Attack",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 f41 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 f4'
  },
  E77: {
    name: "King's Indian",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 f4 O-O 6 Be21 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 f4 O-O 6 Be2'
  },
  E78: {
    name: "King's Indian, Four Pawns Attack, with Be2 and Nf3",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 f4 O-O 6 Be2 c5 7 Nf31 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 f4 O-O 6 Be2 c5 7 Nf3'
  },
  E79: {
    name: "King's Indian, Four Pawns Attack, Main line",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 f4 O-O 6 Be2 c5 7 Nf3 cxd4 8 Nxd4 Nc6 9 Be31 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 f4 O-O 6 Be2 c5 7 Nf3 cxd4 8 Nxd4 Nc6 9 Be3'
  },
  E80: {
    name: "King's Indian, Samisch Variation",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 f31 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 f3'
  },
  E81: {
    name: "King's Indian, Samisch",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 f3 O-O1 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 f3 O-O'
  },
  E82: {
    name: "King's Indian, Samisch, double Fianchetto Variation",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 f3 O-O 6 Be3 b61 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 f3 O-O 6 Be3 b6'
  },
  E83: {
    name: "King's Indian, Samisch",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 f3 O-O 6 Be3 Nc61 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 f3 O-O 6 Be3 Nc6'
  },
  E84: {
    name: "King's Indian, Samisch, Panno Main line",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 f3 O-O 6 Be3 Nc6 7 Nge2 a6 8 Qd2 Rb81 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 f3 O-O 6 Be3 Nc6 7 Nge2 a6 8 Qd2 Rb8'
  },
  E85: {
    name: "King's Indian, Samisch, Orthodox Variation",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 f3 O-O 6 Be3 e51 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 f3 O-O 6 Be3 e5'
  },
  E86: {
    name: "King's Indian, Samisch, Orthodox, 7.Nge2 c6",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 f3 O-O 6 Be3 e5 7 Nge2 c61 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 f3 O-O 6 Be3 e5 7 Nge2 c6'
  },
  E87: {
    name: "King's Indian, Samisch, Orthodox",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 f3 O-O 6 Be3 e5 7 d51 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 f3 O-O 6 Be3 e5 7 d5'
  },
  E88: {
    name: "King's Indian, Samisch, Orthodox, 7.d5 c6",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 f3 O-O 6 Be3 e5 7 d5 c61 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 f3 O-O 6 Be3 e5 7 d5 c6'
  },
  E89: {
    name: "King's Indian, Samisch, Orthodox Main line",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 f3 O-O 6 Be3 e5 7 d5 c6 8 Nge2 cxd51 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 f3 O-O 6 Be3 e5 7 d5 c6 8 Nge2 cxd5'
  },
  E90: {
    name: "King's Indian",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 Nf31 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 Nf3'
  },
  E91: {
    name: "King's Indian",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 Nf3 O-O 6 Be21 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 Nf3 O-O 6 Be2'
  },
  E92: {
    name: "King's Indian",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 Nf3 O-O 6 Be2 e51 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 Nf3 O-O 6 Be2 e5'
  },
  E93: {
    name: "King's Indian, Petrosian System",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 Nf3 O-O 6 Be2 e5 7 d5 Nbd71 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 Nf3 O-O 6 Be2 e5 7 d5 Nbd7'
  },
  E94: {
    name: "King's Indian, Orthodox",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 Nf3 O-O 6 Be2 e5 7 O-O1 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 Nf3 O-O 6 Be2 e5 7 O-O'
  },
  E95: {
    name: "King's Indian, Orthodox, 7...Nbd7, 8.Re1",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 Nf3 O-O 6 Be2 e5 7 O-O Nbd7 8 Re11 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 Nf3 O-O 6 Be2 e5 7 O-O Nbd7 8 Re1'
  },
  E96: {
    name: "King's Indian, Orthodox, 7...Nbd7, Main line",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 Nf3 O-O 6 Be2 e5 7 O-O Nbd7 8 Re1 c6 9 Bf1 a51 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 Nf3 O-O 6 Be2 e5 7 O-O Nbd7 8 Re1 c6 9 Bf1 a5'
  },
  E97: {
    name: "King's Indian",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 Nf3 O-O 6 Be2 e5 7 O-O Nc61 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 Nf3 O-O 6 Be2 e5 7 O-O Nc6'
  },
  E98: {
    name: "King's Indian, Orthodox, Taimanov, 9.Ne1",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 Nf3 O-O 6 Be2 e5 7 O-O Nc6 8 d5 Ne7 9 Ne11 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 Nf3 O-O 6 Be2 e5 7 O-O Nc6 8 d5 Ne7 9 Ne1'
  },
  E99: {
    name: "King's Indian, Orthodox, Taimanov",
    moves: '1 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 Nf3 O-O 6 Be2 e5 7 O-O Nc6 8 d5 Ne7 9 Ne1 Nd7 10 f3 f51 d4 Nf6 2 c4 g6 3 Nc3 Bg7 4 e4 d6 5 Nf3 O-O 6 Be2 e5 7 O-O Nc6 8 d5 Ne7 9 Ne1 Nd7 10 f3 f5'
  }
});

angular.module('PlayLikeTal.Directives')
.directive('lazyLoad', function () {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs) {
            $(elem).bind('scroll', function () {
                var el = $(this),
                    offset = 200;

                // Add some offset to keep the list from getting choppy at the bottom.
                if (el.scrollTop() + el.innerHeight() + offset >= el[0].scrollHeight) {
                    scope.$apply(attrs.lazyLoad);
                }
            });
        }
    };
});

angular.module('PlayLikeTal.Controllers')
.controller('GameDatabaseCtrl', function ($scope, $location, $mdBottomSheet, $mdSidenav, $routeParams, PLAY_LIKE, gameListService) {

    $scope.limit = 20;
    $scope.gamesToShow = [];

    $scope.slice = {
        start: 0,
        end: $scope.limit
    };

    $scope.loadMore = function loadMore() {
        if (!$scope.gamesToShow.length) {
            return;
        }

        $scope.slice.start += $scope.limit;
        $scope.slice.end += $scope.limit;

        if ($scope.slice.start > $scope.games.length) {
            return false;
        }

        if ($scope.slice.end > $scope.games.length) {
            $scope.slice.end = $scope.games.length;
        }

        var slice = $scope.games.slice($scope.slice.start, $scope.slice.end);
        angular.forEach(slice, function (game) {
            $scope.gamesToShow.push(game);
        });
    };

    /**
     * Determine if Tal is white.
     * If he is, the game name format will be vs Opponent instead of Opponent vs
     * @param {object} game
     * @return {boolean}
     */
    $scope.isTalWhite = function isTalWhite(game) {
        return game.white === PLAY_LIKE.name;
    };

    $scope.getOpponent = function getOpponent(game) {
        if ($scope.isTalWhite(game)) {
            return game.black;
        }
        return game.white;
    };

    /**
     * Track the currently selected game to indicate it in the list.
     */
    $scope.isSelectedGame = function isSelectedGame(gameId) {
        return parseInt(gameId, 10) === parseInt($routeParams.game, 10);
    };

    /**
     * Switch to the currently selected game ID
     * @param {number} gameId
     */
    $scope.loadGame = function loadGame(gameId) {
        $mdSidenav('left').toggle();
        $location.path('/game/' + gameId);
    };

    gameListService.getGameList().then(function (games) {
        $scope.games = games;
        $scope.gamesToShow = $scope.games.slice(0, 20);
    });

});

angular.module('PlayLikeTal.Controllers')
.controller('GameDatabaseToolbarCtrl', function ($scope, $mdBottomSheet, $templateCache) {

    $scope.showFilters = function showFilters($event) {
        $mdBottomSheet.show({
            template: $templateCache.get('templates/filter.html'),
            controller: 'GameFilterCtrl',
            targetEvent: $event
        }).then(function (submitted) {
            console.log('done');
            console.log(submitted);
        });
    };
});

angular.module('PlayLikeTal.Controllers')
.controller('GameFilterCtrl', function ($scope, $mdBottomSheet) {

    // This will probably need to be saved in a service.
    $scope.playerColor = { value: '' };

    $scope.$watch('playerColor.value', function () {
        if (!$scope.playerColor.value) {
            return;
        }

        $mdBottomSheet.hide($scope.playerColor.value);
    });
});


angular.module('PlayLikeTal.Controllers')
.controller('ToolbarCtrl', function ($scope, $log, $mdSidenav) {

    $scope.openMenu = function openMenu() {
        $mdSidenav('left').toggle();
    };

});

/**
 * Wrapper for chessboardjs
 */
angular.module('PlayLikeTal.Services')
.factory('ChessBoard', function ($window) {
    return $window.ChessBoard;
});

/**
 * Wrapper for chessjs
 */
angular.module('PlayLikeTal.Services')
.factory('ChessLogic', function ($window) {
    return $window.Chess;
});

angular.module('PlayLikeTal.Services')
.service('gameListService', function ($http, $log, $q) {

    this.games = [];

    /**
     * Return a promise containing the games.
     */
    this.getGameList = function getGameList() {
        // Once the games list has been set, don't keep doing HTTP calls.
        if (this.games.length) {
            return $q.when(this.games);
        }

        // ???
        return $http.get('./app/build/meta.js').then(function success(response) {
            angular.forEach(response.data, function (game) {
                this.games.push(game);
            }.bind(this));
            return this.games;
        }.bind(this), function error(response) {
            $log.error(response);
        });

    };

});

angular.module('PlayLikeTal.Services')

// to give a hint, we know that the move is Nf6, e.g.
// look through each square of the board and find the square that has f6 listed
// as a legal move.
// logic.moves({square: ''})
// logic.get(square) returns piece on the square.
.service('gameTrackerService', function ($http, PLAY_LIKE) {

    // Save the current game.
    var currentGame ={"event":"?","site":"Riga","date":1949,"round":"?","white":"Mikhail Tal","black":"Leonov","result":{"white":"1","black":"0"},"eco":"B13","moves":[["e4","c6"],["d4","d5"],["exd5","cxd5"],["Bd3","Nf6"],["h3","h6"],["Bf4","e6"],["Nf3","Bd6"],["Bxd6","Qxd6"],["c3","Nc6"],["O-O","O-O"],["Qe2","Re8"],["Ne5","Qc7"],["f4","Nxe5"],["fxe5","Nh7"],["Qh5","Re7"],["Na3","a6"],["Nc2","Qd7"],["Ne3","Qe8"],["Rf6","Qf8"],["Rf4","Bd7"],["Ng4","Be8"],["Nf6+","Nxf6"],["exf6","Rc7"],["fxg7","Kxg7"],["Qe5+"]]};

    var turns,
        nextTurn,
        nextMove;

    /**
     * Load a game from an endpoint and set it as the current.
     * @param {string} url - the game endpoint.
     * @return {promise}
     */
    this.loadGame = function loadGame(url) {
        return $http.get('../database/games/' + url + '.js')
        .success(function (response) {
            this.setCurrentGame(response); 
        }.bind(this));
    };

    /**
     * Get the current game state.
     * @return {object}
     */
    this.getCurrentGame = function getCurrentGame() {
        return currentGame;
    };

    this.setCurrentGame = function setCurrentGame(game) {
        currentGame = game;
        turns = [].concat(game.moves);
        nextTurn = this.getNextTurn();
    };

    this.getNextTurn = function getNextTurn() {
        nextTurn = turns.shift();
        return nextTurn;
    };

    this.getNextMove = function getNextMove() {
        // Get the algebraic notation for the move.
        var san = '';

        // If a move has never been set, get it.
        if (!nextTurn && turns.length) {
            nextTurn = this.getNextTurn();
        }

        san = nextTurn[0];
        nextTurn.shift();

        if (!nextTurn.length) {
            // White and black have moved, increment the turn.
            nextTurn = this.getNextTurn();
        }

        return san;
    };

    this.peekNextMove = function peekNextMove() {
        // Initialize the first move if no move available.
        if (!nextTurn && turns.length) {
            nextTurn = this.getNextTurn();
        }

        if (nextTurn) {
            return nextTurn[0];
        }

        return null;
    };


    this.isTalWhite = function isTalWhite() {
        return currentGame.white === PLAY_LIKE.name;
    };

    this.isPlayerMove = function isPlayerMove() {
        // If the first move of the game and player is white, player turn.
        if (!nextTurn && this.isTalWhite()) {
            return true;
        }

        var isWhite = this.isTalWhite(),
            whiteHasNotMoved = nextTurn.length === 2;

        var isBlack = !isWhite,
            blackHasNotMoved = nextTurn.length === 1;

        if (isWhite && whiteHasNotMoved) {
            return true;
        }

        if (isBlack && blackHasNotMoved && !whiteHasNotMoved) {
            return true;
        }

        return false;
    };

    this.setCurrentGame(currentGame);

});

angular.module('PlayLikeTal.Filters')

/**
 * Translate an ECO code into an ECO name.
 * 'B37' -> Sicilian, Accelerated Fianchetto
 */
.filter('eco', function (ECO) {
    return function (code) {
        if (!code) {
            return '';
        }
        
        var upper = code.toUpperCase(),
            ecoInfo = ECO[upper];

        if (ecoInfo) {
            return ecoInfo.name;
        }

        return '';
    };
});

angular.module('PlayLikeTal.Filters')

/**
 * Translate an ECO code into an ECO name.
 * 'B37' -> Sicilian, Accelerated Fianchetto
 */
.filter('event', function () {
    return function (eventName) {
        if (!eventName || !angular.isString(eventName)) {
            return '';
        }

        if (eventName === '?') {
            return 'Unknown Event';
        }

        return eventName;
    };
});

angular.module('PlayLikeTal.Directives')

.directive('chessboard', function ($timeout, $templateCache, ChessBoard, ChessLogic, gameTrackerService) {
    return {
        restrict: 'E',
        scope: {
            boardId: '@'
        },
        controller: function ($scope) {
            $scope.logic = null;
            $scope.playerColor = null;

            // Tapping moves (mobile) is a little different.
            $scope.tappedMove = {
                legalMoves: [],
                source: '',
                target: ''
            };

            $scope.previousComputerMove = null;

            // Track if a hint is being shown. If a hint is shown, the mouseover
            // behavior is different. Don't highlight other legal moves on mouseover if
            // the hint is shown.
            $scope.showingHint = false;

            // Just use this for read only information.
            $scope.gameInformation = Object.freeze(angular.copy(gameTrackerService.getCurrentGame()));

            /**
             * Return all squares on a chessboard.
             * @return {array}
             */
            $scope.allSquares = function allSquares() {
                var ranks = '12345678'.split(''),
                    files = 'abcdefhg'.split(''),
                    squares = [];

                files.forEach(function (file) {
                    var result = ranks.map(function (n) {
                        return file + n;
                    });

                    squares = squares.concat(result);
                });

                return squares;
            };

            /**
             * Determine if a piece clicked is the player's piece.
             * @param {string} piece
             * @return {boolean}
             */
            $scope.isPlayerPiece = function isPlayerPiece(piece) {
                if (!piece) {
                    return false;
                }

                var isWhite = gameTrackerService.isTalWhite(),
                    isBlack = !isWhite,
                    isPieceWhite = piece.search(/^w/) !== -1,
                    isPieceBlack = piece.search(/^b/) !== -1;

                return (isWhite && isPieceWhite) || (isBlack && isPieceBlack);
            };

            /**
             * Determine if a piece moved was moved on the correct turn.
             * @param {string} piece
             * @return {boolean}
             */
            $scope.didMovePieceOnTurn = function didMovePieceOnTurn(piece) {
                var turn = $scope.logic.turn(),
                    isWhiteTurn = turn === 'w',
                    isBlackTurn = turn === 'b',
                    isPieceWhite = piece.search(/^w/) !== -1,
                    isPieceBlack = piece.search(/^b/) !== -1;

                return (isWhiteTurn && isPieceWhite) || (isBlackTurn && isPieceBlack);
            };

            /**
             * Indicate the legal squares a piece can move.
             * @param {string} square
             */
            $scope.indicateLegalMoves = function indicateLegalMoves(square) {
                function indicate(sq) {
                    var $sq = $(['#', $scope.boardId, ' .square-', sq].join('')),
                        bgColor = '#a9a9a9';

                    if ($sq.hasClass('black-3c85d')) {
                        bgColor = '#696969';
                    }
                    
                    $sq.css('background', bgColor);
                }

                var legalMoves = $scope.logic.moves({
                    square: square,
                    verbose: true
                });

                if (!legalMoves.length) {
                    return;
                }

                indicate(square);
                legalMoves.forEach(function (move) {
                    indicate(move.to);
                });
            };

            /**
             * Hide the highlights on legal moves already highlighted.
             */
            $scope.hideLegalMoves = function hideLegalMoves() {
                var selector = ['#', $scope.boardId, ' .square-55d63'].join('');
                $(selector).css('background', '');
            };

            /**
             * Highlight the square the user has tapped.
             */
            $scope.highlightSquare = function highlightSquare(square, cssClass) {
                var selector = ['#', $scope.boardId, ' .square-', square].join('');
                cssClass = cssClass || 'mobile-highlight-square';
                $(selector).addClass(cssClass);
            };

            $scope.unhighlightSquare = function unhighlightSquare(square, cssClass) {
                var selector = ['#', $scope.boardId, ' .square-', square].join('');
                cssClass = cssClass || 'mobile-highlight-square';
                $(selector).removeClass(cssClass);
            };

            /**
             * After a tap event, or a computer move, the board will not update.
             * Manually call the position from the new FEN.
             */
            $scope.updatePosition = function updatePosition() {
                $scope.chessBoard.position($scope.logic.fen());
            };

            /**
             * Execute the next move.
             */
            $scope.doNextMove = function doNextMove() {
                if ($scope.previousComputerMove) {
                    $scope.unhighlightSquare($scope.previousComputerMove.to, 'computer-highlight-square');
                    $scope.unhighlightSquare($scope.previousComputerMove.from, 'computer-highlight-square');
                }

                var move = gameTrackerService.getNextMove(),
                    computerMovesNext = !gameTrackerService.isPlayerMove(),
                    executedMove;

                executedMove = $scope.logic.move(move);
                $scope.updatePosition();

                if (computerMovesNext) {
                    $timeout($scope.doNextMove, 500);
                }

                // Computer just moved, so indicate the to/from squares the computer moved.
                else {
                    $scope.highlightSquare(executedMove.to, 'computer-highlight-square');
                    $scope.highlightSquare(executedMove.from, 'computer-highlight-square');
                    $scope.previousComputerMove = executedMove;
                }

                // If the user did a hint and then showed the move,
                // must clear the legal moves highlights.
                $scope.showingHint = false;
                $scope.hideLegalMoves();

                if ($scope.tappedMove.source) {
                    $scope.unhighlightSquare($scope.tappedMove.source);
                }
            };

            /**
             * Show a hint for Tal's next move.
             */
            $scope.showHint = function showHint() {
                var nextMove = gameTrackerService.peekNextMove(),
                    allSquares = $scope.allSquares(),
                    allLegalMoves = [];

                allSquares.forEach(function (square) {
                    // all legal moves possible in the game.
                    allLegalMoves = allLegalMoves.concat($scope.logic.moves({
                        square: square,
                        verbose: true
                    }));
                });

                var possibleMoves = allLegalMoves.filter(function (m) {
                    var isColor = Boolean($scope.playerColor.match(m.color)),
                        canBeNext = m.san === nextMove;

                    return isColor && canBeNext;
                });

                possibleMoves.forEach(function (pMove) {
                    $scope.indicateLegalMoves(pMove.from);
                });

                $scope.showingHint = true;
            };

            /**
             * Don't allow the wrong color piece to be dragged.
             */
            function onDragStart(source, piece, position, orientation) {
                var noTurns = !gameTrackerService.peekNextMove(),
                    gameOver = $scope.logic.game_over(),
                    wrongPieceMoved = !$scope.didMovePieceOnTurn(piece);

                if (noTurns || gameOver || wrongPieceMoved) {
                    return false;
                }
            }

            /**
             * On dropping a piece, if it's off the board, return it to its original position.
             * If it's not this players move, return it to its original position.
             * If it's the correct move, allow it.
             */
            // TODO: check promotion/underpromotion and en passant
            function onDrop(source, target) {

                // Don't want to do the move on the actual board, 
                // so copy the logic of the board and try the move out first.
                var move = new ChessLogic($scope.logic.fen()).move({
                    from: source,
                    to: target,
                    promotion: 'q'
                });

                // Invalid move, return piece.
                if (!move) {
                    return 'snapback';
                }

                var isMyMove = gameTrackerService.isPlayerMove(),
                    nextMove = gameTrackerService.peekNextMove();

                // If the wrong move was selected, return the piece.
                if (isMyMove && move.san !== nextMove) {
                    move = null;
                    return 'snapback';
                }

                // If successful move, the computer does the next move.
                if (isMyMove && move.san === nextMove) {
                    $scope.showingHint = false;
                    $scope.logic.move({
                        from: source,
                        to: target,
                        promotion: 'q'
                    });

                    // Increment the next move.
                    gameTrackerService.getNextMove();
                    $timeout($scope.doNextMove, 500);
                }

            }

            // Need this for castling.
            function onSnapEnd() {
                $scope.updatePosition();
            }

            function onMouseoverSquare(square, piece) {
                if ($scope.showingHint) {
                    return;
                }
                $scope.indicateLegalMoves(square);
            }

            function onMouseoutSquare() {
                // Don't do anything if on mobile.
                if ($scope.tappedMove.legalMoves.length) {
                    return;
                }

                // Showing a hint, so don't hide the legal squares on mouseout.
                if ($scope.showingHint) {
                    return;
                }

                $scope.hideLegalMoves();
            }

            function onTapSquare(square, piece) {
                $scope.hideLegalMoves();

                var isMovingPiece = $scope.isPlayerPiece(piece);

                if ($scope.tappedMove.source) {
                    $scope.unhighlightSquare($scope.tappedMove.source);
                }

                // The player wants to move their piece.
                // This is the first tap.
                if (isMovingPiece) {
                    $scope.tappedMove.legalMoves = $scope.logic.moves({
                        square: square,
                        verbose: true
                    });

                    $scope.tappedMove.source = square;
                    $scope.indicateLegalMoves(square);
                    $scope.highlightSquare(square);
                    return;
                }

                // The second tap.
                if ($scope.tappedMove.legalMoves.length) {
                    $scope.tappedMove.target = square;

                    // Pretend the piece was dropped on the board.
                    onDrop($scope.tappedMove.source, $scope.tappedMove.target);

                    // Reset the tap information.
                    $scope.tappedMove.legalMoves = [];
                    $scope.tappedMove.source = '';
                    $scope.tappedMove.target = '';
                    $scope.hideLegalMoves();
                    $scope.updatePosition();

                    $scope.unhighlightSquare($scope.tappedMove.source);
                }
            }

            $scope.initGame = function initGame() {
                // Set the player color
                if (gameTrackerService.isTalWhite()) {
                    $scope.playerColor = 'white';
                } else {
                    $scope.playerColor = 'black';
                }

                $scope.chessBoard = new ChessBoard($scope.boardId, {
                    draggable: true,
                    position: 'start',
                    orientation: $scope.playerColor,
                    onDragStart: onDragStart,
                    onDrop: onDrop,
                    onSnapEnd: onSnapEnd,
                    onMouseoverSquare: onMouseoverSquare,
                    onMouseoutSquare: onMouseoutSquare,
                    onTapSquare: onTapSquare
                });

                $scope.logic = new ChessLogic();

                // Computer will make first move.
                if ($scope.playerColor === 'black') {
                    $scope.doNextMove();
                }
            };
        },
        link: function (scope, elem, attrs, ctrl) {
            // Set initial width for mobile devices, etc.
            var windowWidth = $(window).width(),
                width = windowWidth < 400 ? windowWidth*0.8 : 400;

            width = Math.floor(width);

            // There was an issue where the board was not loading again on a route change.
            // I think this was because I'm doing things in a nasty way.
            // Wrapping this bit in a timeout seems to solve the problem.
            $timeout(function () {
                var div = elem.find('#board-container');
                div.html('<div id="' + scope.boardId + '" style="width:' + width + 'px;"></div>');
                scope.initGame();
            });
        },
        template: $templateCache.get('directives/chessboard/chessboard.html')
    };
});


angular.module('PlayLikeTal.Directives')
.directive('sidebar', function ($templateCache) {
    return {
        restrict: 'E',
        template: $templateCache.get('directives/sidebar/sidebar.html')
    };
});
