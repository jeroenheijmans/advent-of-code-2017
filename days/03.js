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

        /*{
            title: "Puzzle 2",
            expectedAnswer: -1,
            testSets: [
                { expectedAnswer: 0, data: [] },
            ],
            getSolution: data => {
                var result = 0;

                return result;
            }
        },*/]
    };
}(window.aoc = window.aoc || {days:{}}));