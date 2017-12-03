(function(aoc) {
    aoc.days["03"] = {
        actualInput: 312051,

        puzzles:[{
            title: "Puzzle 1",
            expectedAnswer: "final",
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
                var result = 0;

                if (data === 1) return 0;

                for (let ringNr = 1; ringNr < 150; ringNr++) {
                    let squareBase = ringNr * 2 + 1;
                    let finalNrFromRing = Math.pow(squareBase, 2);
                    let finalNrFromPreviousRing = Math.pow(squareBase - 2, 2);

                    if (data > finalNrFromPreviousRing && data <= finalNrFromRing) {
                        result = ringNr;

                        let maxNrOfExtraSteps = Math.floor(squareBase/2);
                        let placeOnRing = data - finalNrFromPreviousRing;
                        let nrOfStepsOnRing = finalNrFromRing - finalNrFromPreviousRing;

                        let maxAddition = ringNr * 2;
                        let minAddition = ringNr;

                        let a = ringNr * 2;
                        let x = Math.abs(placeOnRing - (nrOfStepsOnRing / 2));

                        return Math.abs(a - x - 1);
                    }
                }               

                return result;
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