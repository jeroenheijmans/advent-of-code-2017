(function(aoc) {
    aoc.days["22"] = {
        actualInput: `
            .##..#.#.##...#....#..###
            ####.#...###.####..#.....
            #.#.#####....######.###.#
            #.#..###.#.#####....#..#.
            ####.#.#...#.##.##..#.###
            #.####..#####.#.#....#.##
            .#.####.#....###..##....#
            ..##.#..##.#.#.###.##.#..
            ##....#....######.###.###
            .#.##.###.###.###.#..#.#.
            #.##.#.#..#.#.....###....
            ####.....#..###..##..##..
            ##....#.#...####...#.#.#.
            ...#.##..###..##..#......
            #....#..##.##.#..#.###..#
            ...#...##.##.##...#.#.#..
            .##....#.####.#..##.#...#
            #.######......#.#...#.##.
            #.##....###...###.###....
            #..#.#.#.#.#..#.#.....#..
            ...##..##.###....#.###...
            .######.#...###.###.#.#.#
            ####..###.####...#..#####
            .##.#.##...##..##...#.#.#
            ###...##..#..##.##..#..#.
        `,

        puzzles:[{
            title: "Puzzle 1",
            expectedAnswer: 5330,
            testSets: [
                { expectedAnswer: 5587, data: `
                    ..#
                    #..
                    ...
                ` },
            ],
            getSolution: data => {
                let input = data.split(/\r?\n/g).map(l => l.trim()).filter(l => !!l);
                
                let grid = input.map(l => l.split(""));
                let map = {};
                
                for (let y = 0; y < grid.length; y++) {
                    for (let x = 0; x < grid.length; x++) {
                        if (grid[y][x] === "#") {
                            map[`${x}:${y}`] = true;
                        }
                    }
                }

                let posx = (grid.length - 1) / 2;
                let posy = (grid.length - 1) / 2;
                let dir = 0;
                let infectionsCaused = 0;

                for (let i = 0; i < 10000; i++) {
                    
                    let key = `${posx}:${posy}`;

                    // If the current node is infected, it turns to its right. Otherwise, it 
                    // turns to its left. (Turning is done in-place; the current node does 
                    // not change.)
                    dir += map.hasOwnProperty(key) ? +1 : -1;
                    dir = (dir + 4) % 4;

                    // If the current node is clean, it becomes infected. Otherwise, it 
                    // becomes cleaned. (This is done after the node is considered for the 
                    // purposes of changing direction.)
                    if (map.hasOwnProperty(key)) {
                        delete map[key];
                    } else {
                        map[key] = true;
                        infectionsCaused++;
                    }

                    // The virus carrier moves forward one node in the direction it is 
                    // facing.
                    if (dir === 0) { posy--; }
                    if (dir === 1) { posx++; }
                    if (dir === 2) { posy++; }
                    if (dir === 3) { posx--; }
                }

                return infectionsCaused;
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