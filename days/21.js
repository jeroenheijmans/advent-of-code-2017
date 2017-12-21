(function(aoc) {
    const start = ".#./..#/###";

    aoc.days["21"] = {
        actualInput: `
            ../.. => ##./###/...
            #./.. => ..#/##./##.
            ##/.. => #.#/##./...
            .#/#. => ##./###/###
            ##/#. => ###/.#./#.#
            ##/## => .#./.#./###
            .../.../... => #.../.#.#/..##/#...
            #../.../... => .##./#.##/##../##..
            .#./.../... => ##../#.../.#.#/###.
            ##./.../... => .#.#/###./.#.#/.#..
            #.#/.../... => .#.#/##../.#../###.
            ###/.../... => #.##/.##./..##/#.##
            .#./#../... => #..#/...#/.###/.##.
            ##./#../... => .###/..#./#.../####
            ..#/#../... => ..../.#../#.##/....
            #.#/#../... => ..##/.##./.##./....
            .##/#../... => ###./#.../#.#./.#.#
            ###/#../... => .#../##.#/.#.#/..#.
            .../.#./... => ####/##../..#./#..#
            #../.#./... => ####/#.##/#..#/..#.
            .#./.#./... => #.##/.#../.#../.#.#
            ##./.#./... => ..##/###./..../...#
            #.#/.#./... => ...#/.#.#/.#../....
            ###/.#./... => ..../..#./#..#/##.#
            .#./##./... => ##../.#.#/#.#./.#.#
            ##./##./... => ###./##.#/#.#./.##.
            ..#/##./... => ..#./.#.#/###./##.#
            #.#/##./... => ##.#/.#../#.../#.#.
            .##/##./... => ####/..../...#/#.##
            ###/##./... => ####/.###/.###/.###
            .../#.#/... => .#.#/###./.##./.#..
            #../#.#/... => #.##/#..#/#..#/##..
            .#./#.#/... => ...#/##../..../#..#
            ##./#.#/... => #..#/.#../##.#/..##
            #.#/#.#/... => ..../...#/..#./#..#
            ###/#.#/... => .##./#..#/...#/.##.
            .../###/... => ..../#.##/.#../##..
            #../###/... => .#.#/.###/###./#..#
            .#./###/... => ...#/.#../###./.###
            ##./###/... => #..#/###./#.##/.#..
            #.#/###/... => .#../##../###./.#.#
            ###/###/... => ###./.#.#/.##./###.
            ..#/.../#.. => ...#/#..#/###./.###
            #.#/.../#.. => #.#./#.##/#.#./...#
            .##/.../#.. => .#.#/#.#./..../#.##
            ###/.../#.. => ##.#/..##/.#.#/##..
            .##/#../#.. => ####/#..#/.#.#/...#
            ###/#../#.. => .#.#/####/..##/.#.#
            ..#/.#./#.. => ##.#/.#../#.../.##.
            #.#/.#./#.. => #..#/.#.#/#.#./#..#
            .##/.#./#.. => #..#/..#./#.../...#
            ###/.#./#.. => #.##/.#../#.##/##.#
            .##/##./#.. => .###/..../#..#/.##.
            ###/##./#.. => #.../.#.#/..#./.#..
            #../..#/#.. => ..../##../#.../##.#
            .#./..#/#.. => ..##/...#/###./##..
            ##./..#/#.. => .#.#/.###/...#/.#.#
            #.#/..#/#.. => .#../..../.###/.##.
            .##/..#/#.. => #.##/.##./.##./####
            ###/..#/#.. => #.../.#../..../#...
            #../#.#/#.. => .#../.#.#/..##/###.
            .#./#.#/#.. => ##.#/#.##/...#/#.##
            ##./#.#/#.. => .##./####/.#.#/.#..
            ..#/#.#/#.. => #.##/##.#/..#./.###
            #.#/#.#/#.. => ###./.#../###./###.
            .##/#.#/#.. => .#../.#../####/##.#
            ###/#.#/#.. => #.##/##.#/#.../##..
            #../.##/#.. => ..#./.###/#.#./..#.
            .#./.##/#.. => ##.#/##../..#./#...
            ##./.##/#.. => #.../..#./#.../.#..
            #.#/.##/#.. => ..#./#.##/.##./####
            .##/.##/#.. => #.#./.#../####/..##
            ###/.##/#.. => ...#/#..#/#.../.#..
            #../###/#.. => ..../..../##.#/.##.
            .#./###/#.. => ..##/..#./##../....
            ##./###/#.. => .#../..##/..../.#.#
            ..#/###/#.. => ...#/...#/..#./###.
            #.#/###/#.. => ####/##.#/##../..##
            .##/###/#.. => ..##/##../#..#/##..
            ###/###/#.. => ##.#/.##./...#/.#.#
            .#./#.#/.#. => ###./####/.##./#..#
            ##./#.#/.#. => #.../..#./.##./##..
            #.#/#.#/.#. => .##./####/##../.#.#
            ###/#.#/.#. => ##../..../.#.#/....
            .#./###/.#. => ..##/##.#/.##./.#.#
            ##./###/.#. => #.../.#../..##/..#.
            #.#/###/.#. => ####/.##./#..#/...#
            ###/###/.#. => ####/..../##.#/.#.#
            #.#/..#/##. => ####/####/####/#...
            ###/..#/##. => #.#./####/##.#/####
            .##/#.#/##. => .###/#.../#.../...#
            ###/#.#/##. => ..#./#.#./##../##.#
            #.#/.##/##. => ###./###./#..#/.###
            ###/.##/##. => ##.#/..#./##../....
            .##/###/##. => ##.#/###./.#.#/.##.
            ###/###/##. => #.##/.#.#/#..#/.##.
            #.#/.../#.# => ..#./####/...#/#.##
            ###/.../#.# => .##./..#./####/#...
            ###/#../#.# => .##./##../..../###.
            #.#/.#./#.# => #.##/#.##/#.##/#...
            ###/.#./#.# => ####/#.##/####/.###
            ###/##./#.# => .#.#/..../.#.#/#.##
            #.#/#.#/#.# => ###./#.##/####/.###
            ###/#.#/#.# => .##./.##./.#.#/....
            #.#/###/#.# => ##../..##/...#/.##.
            ###/###/#.# => .#../#.##/..##/.#..
            ###/#.#/### => ##.#/..#./...#/.###
            ###/###/### => ..##/###./.###/.###
        `,

        puzzles:[{
            title: "Puzzle 1",
            expectedAnswer: null,
            testSets: [
                { expectedAnswer: 12, data: `
                    ../.# => ##./#../...
                    .#./..#/### => #..#/..../..../#..#
                ` },
                { expectedAnswer: 12, data: `
                    ../.# => ##./#../...
                    ###/..#/.#. => #..#/..../..../#..#
                ` },
                { expectedAnswer: 12, data: `
                    ../.# => ##./#../...
                    #../#.#/##. => #..#/..../..../#..#
                ` },
            ],
            getSolution: data => {
                let pattern = start.slice();

                let instructions = data
                    .split(/\r?\n/g)
                    .map(l => l.trim())
                    .filter(l => !!l)
                    .map(l => {
                        let parts = l.split(" => ").map(p => p.trim());
                        return {
                            pattern: parts[0],
                            output: parts[1],
                        };
                    })
                    .reduce((map, i) => {
                        map[i.pattern] = i;
                        return map;
                    }, {});


                function getOperation(square) {
                    let pattern = square.slice();

                    for (let rot = 0; rot < 5; rot++) {
                        if (instructions.hasOwnProperty(pattern)) {
                            return instructions[pattern];
                        }
                        
                        let x = flipX(pattern);
                        if (instructions.hasOwnProperty(x)) {
                            return instructions[x];
                        }
                        
                        let y = flipY(pattern);
                        if (instructions.hasOwnProperty(y)) {
                            return instructions[y];
                        }
                        
                        let z = flipX(flipY(pattern));
                        if (instructions.hasOwnProperty(z)) {
                            return instructions[z];
                        }

                        pattern = rotate90(pattern);
                    }

                    throw "Unexpected: pattern not found. Pattern: " + square;
                    return null;
                }

                // YUCK
                let isTestPuzzle = Object.keys(instructions).length < 3;
                let iterations = isTestPuzzle ? 2 : 5;

                let idx = 0;
                while (idx++ < iterations) {
                    let thing = chop(pattern);

                    for (let i = 0; i < thing.squares.length; i++) {
                        let op = getOperation(thing.squares[i]);
                        if (!!op) {
                            thing.squares[i] = op.output;
                        }
                    }

                    pattern = combine(thing);
                }

                pattern.split("/").forEach((l,i) => console.log(`${i}  =>   ${l}`));

                // Not 18
                // Not 5
                return pattern.match(/#/g).length;
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

        ,bonusTests: [{
            title: "Example rotate90 x 1 works",
            test: assert => {
                let input = start.slice();
                let output = rotate90(input);
                assert.strictEqual(output, "#../#.#/##.");
            }
        },{
            title: "Example rotate90 x 2 works",
            test: assert => {
                let input = start.slice();
                let output = rotate90(rotate90(input));
                assert.strictEqual(output, "###/#../.#.");
            }
        },{
            title: "Example rotate90 x 3 works",
            test: assert => {
                let input = start.slice();
                let output = rotate90(rotate90(rotate90(input)));
                assert.strictEqual(output, ".##/#.#/..#");
            }
        },{
            title: "Example rotate90 x 4 works",
            test: assert => {
                let input = start.slice();
                let output = rotate90(rotate90(rotate90(rotate90(input))));
                assert.strictEqual(output, input);
            }
        },{
            title: "Chop works A",
            test: assert => {
                let input = "..../##../..##/####";
                let output = chop(input);
                assert.strictEqual(output.squares[0], "../##");
                assert.strictEqual(output.squares[1], "../##");
                assert.strictEqual(output.squares[2], "../..");
                assert.strictEqual(output.squares[3], "##/##");
            }
        },{
            title: "Chop works B",
            test: assert => {
                let input = "####/####/####/####";
                let output = chop(input);
                assert.strictEqual(output.squares[0], "##/##");
                assert.strictEqual(output.squares[1], "##/##");
                assert.strictEqual(output.squares[2], "##/##");
                assert.strictEqual(output.squares[3], "##/##");
            }
        },{
            title: "Chop works C",
            test: assert => {
                let input = "####/#..#/#..#/####";
                let output = chop(input);
                assert.strictEqual(output.squares[0], "##/#.");
                assert.strictEqual(output.squares[1], "#./##");
                assert.strictEqual(output.squares[2], "##/.#");
                assert.strictEqual(output.squares[3], ".#/##");
            }
        },{
            title: "Combine works",
            test: assert => {
                let input = "####/####/####/####";
                let output = combine(chop(input));
                assert.strictEqual(output, input);
            }
        },{
            title: "Combine is reverse of chop",
            test: assert => {
                let input = "####/#..#/#..#/####";
                let output = combine(chop(input));
                assert.strictEqual(output, input);
            }
        },{
            title: "Can flipX start pos",
            test: assert => {
                let input = start.slice();
                let output = flipX(input);
                assert.strictEqual(output, ".#./#../###");
            }
        },{
            title: "Can flipY start pos",
            test: assert => {
                let input = start.slice();
                let output = flipY(input);
                assert.strictEqual(output, "###/..#/.#.");
            }
        }]
    };

    function combine(chop) {
        let root = Math.sqrt(chop.squares.length);
        let squareLength = chop.squares[0].split("/").length;
        let max = root * squareLength;
        let lines = [];
        
        for (let squareIdx = 0; squareIdx < chop.squares.length; squareIdx++) {

            let squareLines = chop.squares[squareIdx].split("/");

            for (let sqlineIdx = 0; sqlineIdx < squareLines.length; sqlineIdx++) {

                let part = squareLines[sqlineIdx];
                let squareRowIdx = squareIdx % root;
                let lineIdx = sqlineIdx + (squareRowIdx * squareLines.length);

                lines[lineIdx] = !lines[lineIdx] ? part : (lines[lineIdx] + part);
            }
        }

        return lines.join("/");
    }

    function chop(input) {
        let lines = input.split("/");
        let size = lines.length;
        let divisor = (size % 2 === 0) ? 2 : (size % 3 === 0 ? 3 : "???");
        let squares = [];

        for (let i = 0; i < size; i++) {
            for (let offset = 0; offset < size; offset += divisor) {
                let miniLine = lines[i].slice(offset, offset + divisor);
                let squareIndex = offset + Math.floor(i / divisor);

                squares[squareIndex] = !squares[squareIndex] ? miniLine : (squares[squareIndex] + "/" + miniLine);
            }
        }

        return { divisor: divisor, squares: squares };
    }

    function toGrid(pattern) {
        return pattern
            .split("/")
            .map(l => l.split(""));
    }

    function toPattern(grid) {
        return grid
            .map(l => l.join(""))
            .join("/");
    }

    function flipX(pattern) {
        let grid = toGrid(pattern);
        let newGrid = grid.slice().map(l => l.slice());

        for (let y = 0; y < grid.length; y++) {
            for (let x = 0; x < grid.length; x++) {
                newGrid[y][x] = grid[y][grid.length - x - 1];
            }
        }

        return toPattern(newGrid);
    }

    function flipY(pattern) {
        let grid = toGrid(pattern);
        let newGrid = grid.slice().map(l => l.slice());

        for (let y = 0; y < grid.length; y++) {
            for (let x = 0; x < grid.length; x++) {
                newGrid[y][x] = grid[grid.length - y - 1][x];
            }
        }

        return toPattern(newGrid);
    }

    function rotate90(pattern) {
        let grid = toGrid(pattern);
        let newGrid = grid.slice().map(l => l.slice());

        for (let y = 0; y < grid.length; y++) {
            for (let x = 0; x < grid.length; x++) {
                newGrid[x][grid.length - y - 1] = grid[y][x];
            }
        }

        return toPattern(newGrid);
    }
}(window.aoc = window.aoc || {days:{}}));