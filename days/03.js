(function(aoc) {
    aoc.days["03"] = {
        actualInput: 312051,

        puzzles:[{
            title: "Puzzle 1",
            expectedAnswer: 430,
            testSets: [
                { expectedAnswer: 0, data: 1 },
                { expectedAnswer: 3, data: 12 },
                { expectedAnswer: 2, data: 23 },
                { expectedAnswer: 31, data: 1024 },
                
                { expectedAnswer: 1, data: 2 },
                { expectedAnswer: 1, data: 4 },
                { expectedAnswer: 1, data: 6 },
                { expectedAnswer: 1, data: 8 },
                { expectedAnswer: 2, data: 11 },
                { expectedAnswer: 2, data: 15 },
                { expectedAnswer: 3, data: 16 },
                { expectedAnswer: 4, data: 17 },
            ],
            getSolution: data => {
                if (data === 1) return 0;

                let ringNr = Math.floor(Math.ceil(Math.sqrt(data))/2);

                let ringFirstNr = Math.pow(ringNr*2-1, 2) + 1;
                let ringLastNr = Math.pow(ringNr*2+1, 2);
                let nrOfItemsInRing = ringLastNr - ringFirstNr + 1;
                let positionInRingFromBottomRight = data - ringFirstNr + 1;
                let nrOfItemsPerLoop = nrOfItemsInRing / 4;
                let positionInLoop = positionInRingFromBottomRight % nrOfItemsPerLoop;

                var bonusExpense = Math.abs(ringNr - positionInLoop);

                return ringNr + bonusExpense;
            }
        },

        {
            title: "Puzzle 2",
            expectedAnswer: 312453,
            testSets: [
                { expectedAnswer: 10, data: 5 },
                { expectedAnswer: 11, data: 10 },
                { expectedAnswer: 23, data: 11 },
                { expectedAnswer: 26, data: 25 },
            ],
            getSolution: data => {
                // Apologies, but after a long day of (Sunday) work I couldn't think
                // of a "good" solution, so I'll just imperatively crunch to the right
                // answer like this... :'(
                
                var grid = [
                    [0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,1,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0]
                ];

                var x = 7, y = 6;
                var ringNr = 1;
                var direction = "right";

                function getSumFor(a,b) {
                    var result = 0;
                    for(let i=-1; i<2; i++) {
                        for(let j=-1; j<2; j++) {
                            result += grid[a+i][b+j];
                        }
                    }
                    return result;
                }

                while (x < 12 && y < 12 && x > 0 && y > 0) {
                    grid[x][y] = getSumFor(x, y);
                    
                    if (grid[x][y] > data) {
                        return grid[x][y];
                    }
                    
                    if (grid[x-1][y] !== 0 && grid[x][y-1] === 0) {
                        y--;
                    } else if (grid[x-1][y] === 0 && grid[x][y+1] !== 0) {
                        x--;
                    } else if (grid[x+1][y] !== 0 && grid[x][y+1] === 0) {
                        y++;
                    } else {
                        x++;
                    }
                }

                return "NOT FOUND";
            }
        }]
    };
}(window.aoc = window.aoc || {days:{}}));