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
                { expectedAnswer: 12, data: `
                    ##/## => ###/###/###
                    ###/###/### => ####/####/####/####
                    #../#.#/##. => ####/####/####/####
                ` },
            ],
            getSolution: data => {
                const machine = new Machine(data);
                let grid = gridify(start);

                // YUCK (but pragmatic)
                let isTestPuzzle = data.split(/\r?\n/g).map(r => r.trim()).filter(m => !!m).length === 2;
                let iterations = isTestPuzzle ? 2 : 5;
                
                for (let idx = 0; idx < iterations; idx++) {
                    
                    let blocks = chop(grid);

                    if (blocks.some(b => b.some(row => row.some(x => !x)))) { throw "WHELP"; }

                    for (let i = 0; i < blocks.length; i++) {
                        let op = machine.getOperation(blocks[i]);
                        if (!!op) {
                            blocks[i] = blockify(op.output);
                        }
                    }

                    grid = recombine(blocks);
                }

                // Not 18
                // Not 5
                return countPixels(grid);
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
            title: "Can gridify base pattern into grid",
            test: assert => {
                //   .#.
                //   ..#
                //   ###

                let input = start.slice();
                let grid = gridify(input);
                assert.deepEqual(grid, [[".","#","."],[".",".","#"],["#","#","#"]]);
            }
        },{
            title: "Can gridify pattern '######/.#..#./#.##.#/#.#..#/##.##./...##.'",
            test: assert => {
                let pattern = "######/.#..#./#.##.#/#.#..#/##.##./...##.";
                let grid = gridify(pattern);
                assert.deepEqual(grid, [
                    "######".split(""),
                    ".#..#.".split(""),
                    "#.##.#".split(""),
                    "#.#..#".split(""),
                    "##.##.".split(""),
                    "...##.".split(""),
                ]);
            }
        },{
            title: "Can count 'on' pixels in grid",
            test: assert => {
                //   .#.
                //   ..#
                //   ###

                let input = start.slice();
                let grid = gridify(input);
                let result = countPixels(grid);
                assert.deepEqual(result, 5);
            }
        },{
            title: "Can chop 4x4 grid into 2x2 blocks",
            test: assert => {
                //   ####
                //   #..#
                //   #..#
                //   ####

                let grid = gridify("####/#..#/#..#/####");
                let chops = chop(grid);

                assert.deepEqual(chops, [
                    [["#","#"],["#","."]], //   ##/#.
                    [["#","#"],[".","#"]], //   ##/.#
                    [["#","."],["#","#"]], //   #./##
                    [[".","#"],["#","#"]]  //   .#/##
                ]);
            }
        },{
            title: "Can chop 6x6 grid into 2x2 blocks",
            test: assert => {
                //   ######
                //   #....#
                //   #....#
                //   #....#
                //   #....#
                //   ######

                let grid = gridify("######/#....#/#....#/#....#/#....#/######");
                let chops = chop(grid);

                assert.deepEqual(chops, [
                    [["#","#"],["#","."]], //   ##/#.
                    [["#","#"],[".","."]], //   ##/..
                    [["#","#"],[".","#"]], //   ##/.#

                    [["#","."],["#","."]], //   #./#.
                    [[".","."],[".","."]], //   .../..
                    [[".","#"],[".","#"]], //   .#/.#

                    [["#","."],["#","#"]], //   #./##
                    [[".","."],["#","#"]], //   ../##
                    [[".","#"],["#","#"]], //   .#/##
                ]);
            }
        },{
            title: "Can chop 9x9 grid into 3x3 blocks",
            test: assert => {
                //   ###  ###  ###
                //   #..  ...  ..#
                //   #..  ...  ..#
                //
                //   #..  ...  ..#
                //   #..  ...  ..#
                //   #..  ...  ..#
                //
                //   #..  ...  ..#
                //   #..  ...  ..#
                //   ###  ###  ###

                let grid = gridify("#########/#.......#/#.......#/#.......#/#.......#/#.......#/#.......#/#.......#/#########");
                let chops = chop(grid);

                let chopPatterns = chops.map(ch => {
                    return
                })

                assert.deepEqual(chops, [
                    [["#","#","#"],["#",".","."],["#",".","."]],
                    [["#","#","#"],[".",".","."],[".",".","."]],
                    [["#","#","#"],[".",".","#"],[".",".","#"]],

                    [["#",".","."],["#",".","."],["#",".","."]],
                    [[".",".","."],[".",".","."],[".",".","."]], // MIDDLE BLOCK
                    [[".",".","#"],[".",".","#"],[".",".","#"]],

                    [["#",".","."],["#",".","."],["#","#","#"]],
                    [[".",".","."],[".",".","."],["#","#","#"]],
                    [[".",".","#"],[".",".","#"],["#","#","#"]],
                ]);
            }
        },{
            title: "Can chop pattern '######/.#..#./#.##.#/#.#..#/##.##./...##.'",
            test: assert => {
                let pattern = "######/.#..#./#.##.#/#.#..#/##.##./...##.";
                let grid = gridify(pattern);
                let chops = chop(grid);
                assert.deepEqual(chops, [
                    [["#","#"],[".","#"]],
                    [["#","#"],[".","."]],
                    [["#","#"],["#","."]],
                    [["#","."],["#","."]],
                    [["#","#"],["#","."]],
                    [[".","#"],[".","#"]],
                    [["#","#"],[".","."]],
                    [[".","#"],[".","#"]],
                    [["#","."],["#","."]],
                ]);
            }
        },{
            title: "Can recombine 4 blocks to grid",
            test: assert => {
                let blocks = [
                    [["#","#"],["#","."]], //   ##/#.
                    [["#","#"],[".","#"]], //   ##/.#
                    [["#","."],["#","#"]], //   #./##
                    [[".","#"],["#","#"]]  //   .#/##
                ];

                let result = recombine(blocks);

                assert.strictEqual(patternize(result), "####/#..#/#..#/####");
            }
        },{
            title: "Can recombine 9 blocks to grid",
            test: assert => {
                let blocks = [
                    [["#","#","#"],["#",".","."],["#",".","."]],
                    [["#","#","#"],[".",".","."],[".",".","."]],
                    [["#","#","#"],[".",".","#"],[".",".","#"]],

                    [["#",".","."],["#",".","."],["#",".","."]],
                    [[".",".","."],[".",".","."],[".",".","."]], // MIDDLE BLOCK
                    [[".",".","#"],[".",".","#"],[".",".","#"]],

                    [["#",".","."],["#",".","."],["#","#","#"]],
                    [[".",".","."],[".",".","."],["#","#","#"]],
                    [[".",".","#"],[".",".","#"],["#","#","#"]],
                ];

                let result = recombine(blocks);

                assert.strictEqual(patternize(result), "#########/#.......#/#.......#/#.......#/#.......#/#.......#/#.......#/#.......#/#########");
            }
        },{
            title: "Can recombine 3 3x3 blocks to grid",
            test: assert => {
                // Taken from the debugger, this gave problems at one time...
                let blocks = JSON.parse('[[["#","#","#"],[".","#","."],["#",".","#"]],[["#","#","#"],[".","#","."],["#",".","#"]],[["#",".","#"],["#","#","."],[".",".","."]],[[".",".","#"],["#","#","."],["#","#","."]]]');
                
                // Smoke test:
                let grid = recombine(blocks);
                var isSmoking = grid.some(row => row.some(cell => cell !== "#" && cell !== "."));
                assert.strictEqual(isSmoking, false);
            }
        },{
            title: "Can recombine 4 3x3 blocks to grid",
            test: assert => {
                // Taken from the debugger, this gave problems at one time...
                let blocks = [[["#","#","#"],["#","#","#"],["#","#","#"]],[["#","#","#"],["#","#","#"],["#","#","#"]],[["#","#","#"],["#","#","#"],["#","#","#"]],[["#","#","#"],["#","#","#"],["#","#","#"]]];

                // Smoke test:
                let grid = recombine(blocks);
                var isSmoking = grid.some(row => row.some(cell => cell !== "#" && cell !== "."));
                assert.strictEqual(isSmoking, false);
            }
        },{
            title: "Can convert 2x2 chop to pattern",
            test: assert => {
                let chop1 = [["#","#"],[".","."]];
                let pattern = patternize(chop1);
                assert.strictEqual(pattern, "##/..");
            }
        },{
            title: "Can convert 3x3 chop to pattern",
            test: assert => {
                let block = [["#","#","#"],[".",".","."],[".",".","."]];
                let pattern = patternize(block);
                assert.strictEqual(pattern, "###/.../...");
            }
        },{
            title: "Can rotate 3x3 block",
            test: assert => {
                //   ###
                //   #..
                //   ..#

                let block = [["#","#","#"],["#",".","."],[".",".","#"]];
                let result = rot90(block);
                assert.strictEqual(patternize(result), ".##/..#/#.#");
            }
        },{
            title: "Can rotate starting block",
            test: assert => {
                let block = [[".","#","."],[".",".","#"],["#","#","#"]];
                let result = rot90(block);
                assert.strictEqual(patternize(result), "#../#.#/##.");
            }
        },{
            title: "Can rotate 2x2 block",
            test: assert => {
                let block = [[".","#"],["#","."]];
                let result = rot90(block);
                assert.strictEqual(patternize(result), "#./.#");
            }
        },{
            title: "Rotating four times is idempotent",
            test: assert => {
                let block = [[".","#","."],[".",".","#"],["#","#","#"]];
                let result = rot90(rot90(rot90(rot90(block))));
                assert.deepEqual(result, block);
            }
        },{
            title: "Can flipx starting block",
            test: assert => {
                let block = [[".","#","."],[".",".","#"],["#","#","#"]];
                let result = flipx(block);
                assert.strictEqual(patternize(result), ".#./#../###");
            }
        },{
            title: "Can flipy starting block",
            test: assert => {
                let block = [[".","#","."],[".",".","#"],["#","#","#"]];
                let result = flipy(block);
                assert.strictEqual(patternize(result), "###/..#/.#.");
            }
        },{
            title: "Flipping x twice is idempotent",
            test: assert => {
                let block = [[".","#","."],[".",".","#"],["#","#","#"]];
                let result = flipx(flipx(block));
                assert.deepEqual(result, block);
            }
        },{
            title: "Flipping y twice is idempotent",
            test: assert => {
                let block = [[".","#","."],[".",".","#"],["#","#","#"]];
                let result = flipy(flipy(block));
                assert.deepEqual(result, block);
            }
        },{
            title: "Machine can get basic instruction",
            test: assert => {
                let machine = new Machine("##/## => ###/###/###");
                let op = machine.getOperation([["#","#"],["#","#"]]);
                assert.strictEqual(op.output, "###/###/###");
            }
        },{
            title: "Machine can get rotated instruction",
            test: assert => {
                let machine = new Machine("#./## => ###/###/###");
                let op = machine.getOperation([[".","#"],["#","#"]]);
                assert.strictEqual(op.output, "###/###/###");
            }
        },{
            title: "Machine can get instruction for AoC examples",
            test: assert => {
                let machine = new Machine(".#./..#/### => ####/####/####/####");

                assert.strictEqual(machine.getOperation(blockify(".#./..#/###")).output, "####/####/####/####");
                assert.strictEqual(machine.getOperation(blockify(".#./#../###")).output, "####/####/####/####");
                assert.strictEqual(machine.getOperation(blockify("#../#.#/##.")).output, "####/####/####/####");
                assert.strictEqual(machine.getOperation(blockify("###/..#/.#.")).output, "####/####/####/####");
            }
        }]
    };

    function Machine(data) {
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
            
            this.getOperation = function(block) {
                let pattern = "";
                
                for (let i = 0; i < 4; i++) {

                    pattern = patternize(block);
                    if (instructions.hasOwnProperty(pattern)) { return instructions[pattern]; }

                    pattern = patternize(flipx(block));
                    if (instructions.hasOwnProperty(pattern)) { return instructions[pattern]; }

                    pattern = patternize(flipy(block));
                    if (instructions.hasOwnProperty(pattern)) { return instructions[pattern]; }

                    pattern = patternize(flipy(flipx(block)));
                    if (instructions.hasOwnProperty(pattern)) { return instructions[pattern]; }

                    block = rot90(block);
                    if (instructions.hasOwnProperty(pattern)) { return instructions[pattern]; }
                }
                
                throw "Eek!";
            }

        return this;
    }

    function flipx(block) {
        let size = block.length;
        let newBlock = [];

        for (let rowIdx = 0; rowIdx < size; rowIdx++) {
            for (let colIdx = 0; colIdx < size; colIdx++) {
                newBlock[rowIdx] = newBlock[rowIdx] || [];
                newBlock[rowIdx][size - colIdx - 1] = block[rowIdx][colIdx];
            }
        }

        return newBlock;
    }

    function flipy(block) {
        let size = block.length;
        let newBlock = [];

        for (let rowIdx = 0; rowIdx < size; rowIdx++) {
            for (let colIdx = 0; colIdx < size; colIdx++) {
                newBlock[rowIdx] = newBlock[rowIdx] || [];
                newBlock[rowIdx][colIdx] = block[size - rowIdx - 1][colIdx];
            }
        }

        return newBlock;
    }

    function rot90(block) {
        let size = block.length;
        let newBlock = [];

        for (let rowIdx = 0; rowIdx < size; rowIdx++) {
            for (let colIdx = 0; colIdx < size; colIdx++) {
                newBlock[colIdx] = newBlock[colIdx] || [];
                newBlock[colIdx][size - rowIdx - 1] = block[rowIdx][colIdx];
            }
        }

        return newBlock;
    }

    function patternize(chop) {
        return chop.map(row => row.join("")).join("/");
    }

    function recombine(blocks) {
        let grid = [];
        let nrOfBlocksPerRow = Math.sqrt(blocks.length);

        for (let n = 0; n < blocks.length; n++) {
            for (let rowIdx = 0; rowIdx < blocks[n].length; rowIdx++) {
                for (let colIdx = 0; colIdx < blocks[n][rowIdx].length; colIdx++) {

                    let blockRow = Math.floor(n / nrOfBlocksPerRow);
                    let gridY = rowIdx + (blockRow * blocks[n].length);
                    let gridX = colIdx + (n * blocks[n][rowIdx].length);

                    grid[gridY] = grid[gridY] || [];
                    grid[gridY][gridX] = blocks[n][rowIdx][colIdx];
                }
            }
        }

        // workaround for bug (not sure where it is exactly!):
        grid = grid.map(row => row.filter(cell => cell === "#" || cell === "."));

        return grid;
    }

    function chop(grid) {
        let gridSize = grid.length; // Size of a line *is* size of a *square* grid
        let divisor = (gridSize % 2 === 0) ? 2 : 3;
        let blocksPerRow = gridSize / divisor;
        let blockRow = 0;
        let rowInBlock = 0;

        let blocks = [];

        for (let y = 0; y < gridSize; y++) {
            blockRow = Math.floor(y / divisor);

            for (let x = 0, n = 0; x < gridSize; x += divisor, n++) {
                let idx = (blockRow * blocksPerRow) + n;
                let chunk = grid[y].slice(x, x + divisor);

                blocks[idx] = blocks[idx] || [];
                blocks[idx].push(chunk);
            }
        }

        return blocks;
    }

    function gridify(pattern) {
        return pattern.split("/").map(l => l.trim().split(""));
    }

    function blockify(pattern) {
        return gridify(pattern); // No difference! :D
    }

    function countPixels(grid) {
        return grid
            .map(l => l.reduce((a, b) => a + (b === "#" ? 1 : 0), 0))
            .reduce((a,b) => a + b, 0);
    }

}(window.aoc = window.aoc || {days:{}}));