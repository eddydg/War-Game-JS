var cards = {"2": 0,"3": 1,"4": 3,"5": 4,"6": 5,"7": 6,"8": 7,"9": 8,"1": 9,"J": 10,"Q": 11,"K": 12,"A": 13};
var getFightWinner = (c1, c2) => Math.sign(cards[c1[0]] - cards[c2[0]]);

var cardsp1 = [...Array(parseInt(readline()))].map(_=> readline());
var cardsp2 = [...Array(parseInt(readline()))].map(_=> readline());

function playWar(cardp1, cardp2, p1stack = [], p2stack = []) {
    if (cardsp1.length < 4 || cardsp2.length < 4)
        return !(cardsp1 = cardsp2 = []);

    p1stack = p1stack.concat(cardp1, cardsp1.splice(0, 3));
    p2stack = p2stack.concat(cardp2, cardsp2.splice(0, 3));
        
    [cardp1, cardp2] = [cardsp1.shift(), cardsp2.shift()];
    if (getFightWinner(cardp1, cardp2) === 0)
        return playWar(cardp1, cardp2, p1stack, p2stack);
    if (getFightWinner(cardp1, cardp2) === 1)
        cardsp1 = cardsp1.concat(p1stack, cardp1, p2stack, cardp2);
    else
        cardsp2 = cardsp2.concat(p1stack, cardp1, p2stack, cardp2);
}

for (var round = 0; cardsp1.length && cardsp2.length; round++) {
    [cardp1, cardp2] = [cardsp1.shift(), cardsp2.shift()];
    if (getFightWinner(cardp1, cardp2) === 1)
        cardsp1.push(cardp1, cardp2);
    else if (getFightWinner(cardp1, cardp2) === -1)
        cardsp2.push(cardp1, cardp2);
    else if (playWar(cardp1, cardp2)) break;
}

print(['PAT', '1 ' + round, '2 ' + round][!!cardsp1[0] + !!cardsp2[0] * 2]);
