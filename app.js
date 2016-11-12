var cs = {"2": 0,"3": 1,"4": 3,"5": 4,"6": 5,"7": 6,"8": 7,"9": 8,"1": 9,"J": 10,"Q": 11,"K": 12,"A": 13};
var cardsp1 = [...Array(parseInt(readline()))].map(_=> readline());
var cardsp2 = [...Array(parseInt(readline()))].map(_=> readline());

for (var round = 0, p1stack = p2stack = winStack = []; cardsp1[0] && cardsp2[0];) {
    
    if (!winStack || !++round || !(p1stack = p2stack = [])) {
        if ((cardsp1.length < 4 || cardsp2.length < 4) && (cardsp1 = cardsp2 = []))
            break;
    
        p1stack = p1stack.concat(c1, cardsp1.splice(0, 3));
        p2stack = p2stack.concat(c2, cardsp2.splice(0, 3));
    }

    [c1, c2] = [cardsp1.shift(), cardsp2.shift()];
    if (winStack = [cardsp2, 0, cardsp1][Math.sign(cs[c1[0]] - cs[c2[0]]) + 1])
        winStack.push(...p1stack, c1, ...p2stack, c2);
}

print(['PAT', '1 ' + round, '2 ' + round][!!cardsp1[0] + !!cardsp2[0] * 2]);
