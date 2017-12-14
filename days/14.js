(function(aoc) {
    function convertToBinaryText(input) {
        return input
            .split("")
            .map(c => parseInt(c, 16).toString(2))
            .map(s => ("000" + s).substr(-4))        
            .join("");
    }

    function getKnotHashGrid(data) {
        let grid = [];
        
        for (let i = 0; i < 128; i++) {
            let hash = aoc.getKnotHash(`${data}-${i}`);
            let bin = convertToBinaryText(hash);
            let row = bin.split("").map(c => parseInt(c, 10));
            grid.push(row);
        }

        return grid;
    }

    aoc.days["14"] = {
        actualInput: `hxtvlmkl`,

        puzzles:[{
            title: "Puzzle 1",
            expectedAnswer: 8214,
            testSets: [
            ],
            getSolution: data => {
                let grid = getKnotHashGrid(data);
                return grid.reduce((a,b) => a + b.reduce((i,j) => i + j), 0);
            }
        },

        {
            title: "Puzzle 2",
            expectedAnswer: 1093,
            testSets: [
            ],
            getSolution: data => {
                let grid = getKnotHashGrid(data);

                let result = 0;

                function recursiveEliminateFrom(x,y) {
                    if (grid[x][y] === 1) {
                        grid[x][y] = 0;
                     
                        if (x > 0) { recursiveEliminateFrom(x-1, y); }
                        if (y > 0) { recursiveEliminateFrom(x, y-1); }
                        if (x < 127) { recursiveEliminateFrom(x+1, y); }
                        if (y < 127) { recursiveEliminateFrom(x, y+1); }                        
                    }
                }

                for (let y = 0; y < 128; y++) {
                    for (let x = 0; x < 128; x++) {
                        if (grid[x][y] === 1) {
                            result++;
                            recursiveEliminateFrom(x,y);
                        }
                    }
                }

                return result;
            }
        }]

        ,bonusTests: [{
            title: "placeholder",
            test: assert => {
                let result = convertToBinaryText("f");
                assert.strictEqual(result, "1111");
            }
        },{
            title: "placeholder",
            test: assert => {
                let result = convertToBinaryText("a0c2017");
                assert.strictEqual(result, "1010000011000010000000010111");
            }
        }]
    };
}(window.aoc = window.aoc || {days:{}}));