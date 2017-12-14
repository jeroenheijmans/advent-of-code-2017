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

                let groups = [];
                
                function touches(x, y, group) {
                    return group.some(point => 
                        (point.x === x && Math.abs(point.y - y) === 1)
                        || (point.y === y && Math.abs(point.x - x) === 1)
                    );
                }

                for (let y = 0; y < grid[0].length; y++) {
                    for (let x = 0; x < grid[0].length; x++) {

                        if (grid[y][x] === 1) {
                            let group = groups.find(g => touches(x, y, g));

                            if (!!group) {
                                group.push({x:x,y:y});
                            } else {
                                groups.push([{x:x,y:y}]);
                            }
                        }                        
                    }
                }

                // Whelp, just looping until something happens?!
                // AARRGGGHHH I SHOULD RETHINK MY APPROACH AND START OVER!!!
                for (let z=0; z<1000; z++) {
                    let oldLength = groups.length;
                    groups = groups.reduce((result, grp) => {
                        let wasAppended = false;
                        for (let i = 0; i < result.length; i++) {
                            if (result[i].some(p => touches(p.x, p.y, grp))) {
                                result[i] = result[i].concat(grp);
                                wasAppended = true;
                                break;
                            }
                        }
                        if (!wasAppended) {
                            result.push(grp);
                        }                
                        return result;
                    }, []);
                    if (groups.length === oldLength) break;
                }

                return groups.length;
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