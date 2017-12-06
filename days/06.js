(function(aoc) {
    const MaxNrOfLoops = 10000;

    aoc.days["06"] = {
        actualInput: [2,8,8,5,4,2,3,1,5,5,1,2,15,13,5,14],

        puzzles:[{
            title: "Puzzle 1",
            expectedAnswer: 3156,
            testSets: [
                { expectedAnswer: 5, data: [0,2,7,0] },
            ],
            getSolution: data => {
                let seenConfigurations = [
                    JSON.stringify(data)
                ];

                let nrOfLoops = 0;

                while (nrOfLoops++ < MaxNrOfLoops) {
                    let max = Math.max.apply(Math, data);
                    let idx = data.indexOf(max);
                    let redistribute = data[idx];
                    data[idx] = 0;

                    while (redistribute > 0) {
                        redistribute--;
                        idx++;
                        if (idx >= data.length) {
                            idx = 0;
                        }
                        data[idx]++;
                    }

                    let hash = JSON.stringify(data);

                    if (seenConfigurations.indexOf(hash) >= 0) {
                        return seenConfigurations.length;
                    }

                    seenConfigurations.push(hash);
                }

                return "NOT FOUND";
            }
        },

        {
            title: "Puzzle 2",
            expectedAnswer: 1610,
            testSets: [
                { expectedAnswer: 4, data: [0,2,7,0] },
            ],
            getSolution: data => {
                let seenConfigurations = [
                    JSON.stringify(data)
                ];

                let nrOfLoops = 0;

                while (nrOfLoops++ < MaxNrOfLoops) {
                    let max = Math.max.apply(Math, data);
                    let idx = data.indexOf(max);
                    let redistribute = data[idx];
                    data[idx] = 0;

                    while (redistribute > 0) {
                        redistribute--;
                        idx++;
                        if (idx >= data.length) {
                            idx = 0;
                        }
                        data[idx]++;
                    }

                    let hash = JSON.stringify(data);

                    if (seenConfigurations.indexOf(hash) >= 0) {
                        return seenConfigurations.length - seenConfigurations.indexOf(hash);
                    }

                    seenConfigurations.push(hash);
                }

                return "NOT FOUND";
            }
        }]
    };
}(window.aoc = window.aoc || {days:{}}));