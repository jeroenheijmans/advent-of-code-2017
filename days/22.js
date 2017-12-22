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

                    dir += map.hasOwnProperty(key) ? +1 : -1;
                    dir = (dir + 4) % 4;

                    if (map.hasOwnProperty(key)) {
                        delete map[key];
                    } else {
                        map[key] = true;
                        infectionsCaused++;
                    }

                    if (dir === 0) { posy--; }
                    if (dir === 1) { posx++; }
                    if (dir === 2) { posy++; }
                    if (dir === 3) { posx--; }
                }

                return infectionsCaused;
            }
        },

        {
            title: "Puzzle 2",
            expectedAnswer: 2512103,
            testSets: [
                { expectedAnswer: 2511944, data: `
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
                            map[`${x}:${y}`] = "I";
                        }
                    }
                }

                let posx = (grid.length - 1) / 2;
                let posy = (grid.length - 1) / 2;
                let dir = 0;
                let infectionsCaused = 0;

                let keys = {};

                for (let i = 0; i < 10e6; i++) {

                    let key = posx + ":" + posy;

                    // Turn & act:
                    if (!map[key]) {
                        dir += -1;
                        map[key] = "W";
                    }
                    else if (map[key] === "W") {
                        map[key] = "I";
                        infectionsCaused++;
                    }
                    else if (map[key] === "I") {
                        dir += 1;
                        map[key] = "F";
                    }
                    else if (map[key] === "F") {
                        dir += 2;
                        map[key] = false;
                    }

                    dir = (dir + 4) % 4;

                    // The virus carrier moves forward one node in the direction it is
                    // facing.
                    if (dir === 0) { posy--; }
                    if (dir === 1) { posx++; }
                    if (dir === 2) { posy++; }
                    if (dir === 3) { posx--; }
                }

                return infectionsCaused;
            }
        }]
    };
}(window.aoc = window.aoc || {days:{}}));