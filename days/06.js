(function(aoc) {
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
                    // Ininitial config:
                    JSON.stringify(data.slice(0))
                ];

                let nrOfLoops = 0;
                
                do {
                    var tbl = JSON.stringify(data);
                    let max = Math.max.apply(Math, data);
                    let idx = data.indexOf(max);
                    let redistribute = data[idx];
                    data[idx] = 0;

                    while (redistribute > 0) {
                        redistribute--;
                        idx ++;
                        if (idx >= data.length) {
                            idx = 0;
                        }
                        data[idx]++;
                    }

                    nrOfLoops++;

                    let hash = JSON.stringify(data);

                    if (seenConfigurations.indexOf(JSON.stringify(data)) >= 0) {
                        return nrOfLoops;
                    }

                    seenConfigurations.push(hash);

                } while (nrOfLoops < 100000);

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
                    // Ininitial config:
                    JSON.stringify(data.slice(0))
                ];

                let nrOfLoops = 0;
                
                do {
                    var tbl = JSON.stringify(data);
                    let max = Math.max.apply(Math, data);
                    let idx = data.indexOf(max);
                    let redistribute = data[idx];
                    data[idx] = 0;

                    while (redistribute > 0) {
                        redistribute--;
                        idx ++;
                        if (idx >= data.length) {
                            idx = 0;
                        }
                        data[idx]++;
                    }

                    nrOfLoops++;

                    let hash = JSON.stringify(data);

                    if (seenConfigurations.indexOf(JSON.stringify(data)) >= 0) {
                        return nrOfLoops - seenConfigurations.indexOf(JSON.stringify(data));
                    }

                    seenConfigurations.push(hash);

                } while (nrOfLoops < 100000);

                return "NOT FOUND";
            }
        }]
    };
}(window.aoc = window.aoc || {days:{}}));