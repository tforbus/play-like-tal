function Pgn() {
    this.event = null;
    this.site = null;
    this.date = null;
    this.round = null;
    this.white = null;
    this.black = null;
    this.result = {};
    this.eco = null;
    this.moves = [];
}

Pgn.prototype.didTalWin = function didTalWin() {
    if (this.result.white === '1/2') {
        return false;
    }
    var isTalWhite = this.white === 'Tal, Mikhail',
        isTalBlack = !isTalWhite;

    var didWhiteWin = this.result && this.result.white === '1',
        didBlackWin = this.result && this.result.black === '1';

    return (isTalWhite && didWhiteWin) || (isTalBlack && didBlackWin);
};

module.exports.Pgn = Pgn;

