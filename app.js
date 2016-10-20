var cards = {
    "2": 0,
    "3": 1,
    "4": 3,
    "5": 4,
    "6": 5,
    "7": 6,
    "8": 7,
    "9": 8,
    "1": 9, // '10' as '1' to use only first char card[0]
    "J": 10,
    "Q": 11,
    "K": 12,
    "A": 13,
}

function getFightWinner(c1, c2) {
    return Math.sign(cards[c1[0]] - cards[c2[0]])
}

var cardsp1 = [];
var cardsp2 = [];
var n = parseInt(readline()); // the number of cards for player 1
for (var i = 0; i < n; i++) {
    cardsp1.push(readline()); // the n cards of player 1
}
var m = parseInt(readline()); // the number of cards for player 2
for (var i = 0; i < m; i++) {
    cardsp2.push(readline()); // the m cards of player 2
}

function playWar(cardp1, cardp2, p1stack = [], p2stack = []) {

    if (cardsp1.length < 4 || cardsp2.length < 4) {
        print('PAT'); return true;
    }

    p1stack = p1stack.concat(cardp1, cardsp1.splice(0, 3));
    p2stack = p2stack.concat(cardp2, cardsp2.splice(0, 3));

    cardp1 = cardsp1.shift();
    cardp2 = cardsp2.shift();

    if (getFightWinner(cardp1, cardp2) === 0)
        return playWar(cardp1, cardp2, p1stack, p2stack);

    let winnerStack = p1stack.concat(cardp1, p2stack, cardp2);
    if (getFightWinner(cardp1, cardp2) === 1) {
        cardsp1 = cardsp1.concat(winnerStack);
    } else {
        cardsp2 = cardsp2.concat(winnerStack);
    }

    return false;
}

for (let round = 0;; round++) {

    if (cardsp1.length === 0 && cardsp2.length === 0) {
        print('PAT'); break;
    } else if (cardsp1.length === 0) {
        print('2 ' + round); break;
    } else if (cardsp2.length === 0) {
        print('1 ' + round); break;
    }

    let cardp1 = cardsp1.shift();
    let cardp2 = cardsp2.shift();

    if (getFightWinner(cardp1, cardp2) === 1) {
        cardsp1.push(cardp1, cardp2);
    } else if (getFightWinner(cardp1, cardp2) === -1) {
        cardsp2.push(cardp1, cardp2);
    } else if (playWar(cardp1, cardp2)) {
        break;
    }
}
