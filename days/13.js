(function(aoc) {
    aoc.days["13"] = {
        actualInput: [
            [0, 3],
            [1, 2],
            [2, 5],
            [4, 4],
            [6, 4],
            [8, 6],
            [10, 6],
            [12, 6],
            [14, 8],
            [16, 6],
            [18, 8],
            [20, 8],
            [22, 8],
            [24, 12],
            [26, 8],
            [28, 12],
            [30, 8],
            [32, 12],
            [34, 12],
            [36, 14],
            [38, 10],
            [40, 12],
            [42, 14],
            [44, 10],
            [46, 14],
            [48, 12],
            [50, 14],
            [52, 12],
            [54, 9],
            [56, 14],
            [58, 12],
            [60, 12],
            [64, 14],
            [66, 12],
            [70, 14],
            [76, 20],
            [78, 17],
            [80, 14],
            [84, 14],
            [86, 14],
            [88, 18],
            [90, 20],
            [92, 14],
            [98, 18],
        ],

        puzzles:[{
            title: "Puzzle 1",
            expectedAnswer: 2508,
            testSets: [
                { expectedAnswer: 24, data: [
                    [0, 3],
                    [1, 2],
                    [4, 4],
                    [6, 4],
             ] },
            ],
            getSolution: data => {
                let input = data.slice(0);

                let firewall = {};

                for (let entry of data) {
                    firewall[entry[0]] = {
                        depth: entry[0],
                        range: entry[1],
                        at: 0,
                        dir: 1,
                    };
                }

                let severity = 0;
                let maxDepth = Math.max.apply(Math, data.map(d => d[0]));
                
                for (let position = 0; position < maxDepth+2; position++) {
                    if (firewall.hasOwnProperty(position) && firewall[position].at === 0) {
                        console.log(`collision at ${position}`)
                        severity += firewall[position].depth * firewall[position].range;
                    }

                    Object.keys(firewall).forEach(k => {
                        if (firewall[k].at === firewall[k].range - 1) {
                            firewall[k].dir = -1;
                        } else if (firewall[k].at === 0) {
                            firewall[k].dir = +1;
                        } 

                        firewall[k].at += firewall[k].dir;
                    });
                }

                return severity;
            }
        },

        /*{
            title: "Puzzle 2",
            expectedAnswer: null,
            testSets: [
                { expectedAnswer: null, data: [] },
            ],
            getSolution: data => {
                let input = data;

                return "NOT FOUND";
            }
        }*/]

        /*,bonusTests: [{
            title: "placeholder",
            test: assert => {
                let result = "SOMETHING";
                assert.strictEqual(result, "SOMETHING");
            }
        }]*/
    };
}(window.aoc = window.aoc || {days:{}}));