var cards = {"2": 0,"3": 1,"4": 3,"5": 4,"6": 5,"7": 6,"8": 7,"9": 8,"1": 9,"J": 10,"Q": 11,"K": 12,"A": 13};
var getFightWinner = (c1, c2) => Math.sign(cards[c1[0]] - cards[c2[0]]);

var cardsp1 = [...Array(parseInt(readline()))].map(_=> readline());
var cardsp2 = [...Array(parseInt(readline()))].map(_=> readline());

for (var round = isWar = 0, p1stack = p2stack = winnerStack = []; !!cardsp1[0] && !!cardsp2[0];) {

    if (isWar) {
        if ((cardsp1.length < 4 || cardsp2.length < 4) && (cardsp1 = cardsp2 = []))
            break;
    
        p1stack = p1stack.concat(cardp1, cardsp1.splice(0, 3));
        p2stack = p2stack.concat(cardp2, cardsp2.splice(0, 3));
    }

    [cardp1, cardp2] = [cardsp1.shift(), cardsp2.shift()];
    if (winnerStack = [cardsp2, null, cardsp1][getFightWinner(cardp1, cardp2) + 1]) {
        winnerStack.push(...p1stack, cardp1, ...p2stack, cardp2);
        p1stack = p2stack = [];
        round++;
    }
    isWar = !winnerStack;
}

print(['PAT', '1 ' + round, '2 ' + round][!!cardsp1[0] + !!cardsp2[0] * 2]);
