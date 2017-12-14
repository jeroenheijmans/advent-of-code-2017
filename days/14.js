(function(aoc) {
    aoc.days["14"] = {
        actualInput: `hxtvlmkl`,

        puzzles:[{
            title: "Puzzle 1",
            expectedAnswer: 8214,
            testSets: [
            ],
            getSolution: data => {
                let result = 0;

                for (let i = 0; i < 128; i++) {
                    let input = `${data}-${i}`;
                    let hash = aoc.getKnotHash(input);
                    let bin = convert(hash);

                    result += bin.split("").map(c => parseInt(c, 10)).reduce((a,b) => a+b);
                }

                return result;
            }
        },

        {
            title: "Puzzle 2",
            expectedAnswer: 1093,
            testSets: [
            ],
            getSolution: data => {
                let grid = [];

                for (let i = 0; i < 128; i++) {
                    let input = `${data}-${i}`;
                    let hash = aoc.getKnotHash(input);
                    let bin = convert(hash);
                    
                    let row = bin.split("").map(c => parseInt(c, 10));
                    grid.push(row);
                }

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
                let result = convert("f");
                assert.strictEqual(result, "1111");
            }
        },{
            title: "placeholder",
            test: assert => {
                let result = convert("a0c2017");
                assert.strictEqual(result, "1010000011000010000000010111");
            }
        }]
    };

    function convert(input) {
        return input
            .split("")
            .map(c => parseInt(c, 16).toString(2))
            .map(s => ("000" + s).substr(-4))        
            .join("");
    }
}(window.aoc = window.aoc || {days:{}}));