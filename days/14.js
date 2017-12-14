(function(aoc) {
    function getKnotHash(inputText) {
        let inputArray = inputText.split("").map(c => c.charCodeAt(0)).concat([17, 31, 73, 47, 23]);
        let knot = tieKnot(inputArray, 64);
        let denseHash = getDenseHash(knot);
        let hex = getHexForArray(denseHash);
        return hex;
    }

    function tieKnot(inputText, rounds = 1) {
        let result = _.range(0,256);
        let position = 0;
        let skip = 0;

        for (let round = 0; round < rounds; round++) {
            for (let i = 0; i < inputText.length; i++) {
                // For debug cases in test sets from puzzle 1:
                // console.log(getPresentableData(result, position, loopLength, skip));

                let loopLength = inputText[i];
                let reversedSection = [];

                for (let at = position, x = 0; x < loopLength; x++) {
                    at = (position + x) % result.length;
                    reversedSection.unshift(result[at]);
                }

                for (let at = position, x = 0; x < loopLength; x++) {
                    at = (position + x) % result.length;
                    result[at] = reversedSection[x];
                }

                position = (position + loopLength + skip) % result.length;
                skip++;
            }
        }

        return result;
    }

    function getDenseHash(sparseHash) {
        let result = [];

        for (let blockNr = 0; blockNr < 16; blockNr++) {
            let block = sparseHash.slice(blockNr * 16, (blockNr + 1) * 16);
            result[blockNr] = block.reduce((a,b) => a ^ b);
        }

        return result;
    }

    function getHexForArray(denseHash) {
        return denseHash
            .map(digit => ("0" + digit.toString(16)).substr(-2))
            .join("");
    }

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
                    let hash = getKnotHash(input);
                    let bin = convert(hash);

                    result += bin.split("").map(c => parseInt(c, 10)).reduce((a,b) => a+b);
                }

                return result;
            }
        },

        {
            title: "Puzzle 2",
            expectedAnswer: null,
            testSets: [
            ],
            getSolution: data => {
                let grid = [];

                for (let i = 0; i < 128; i++) {
                    let input = `${data}-${i}`;
                    let hash = getKnotHash(input);
                    let bin = convert(hash);
                    
                    let row = bin.split("").map(c => parseInt(c, 10));
                    grid.push(row);
                }

                //grid[0] = grid[0].map(cell => cell === 1 ? 2 : cell);
                //grid = [[1,0,1,1],[1,0,1,0],[0,0,0,0],[1,0,1,1]];
                //grid = [[1,0,1,1],[1,1,0,0],[1,0,1,0],[0,1,0,1]];
                //grid = [[1,1,1,1],[1,1,1,1],[1,0,0,0],[0,1,1,1]];
                //grid = [[1,0,0,1],[0,0,0,1],[1,0,0,1],[1,1,0,1]];

                // for (let i=0; i<4; i++) { console.log(`${i}  =>  ${JSON.stringify(grid[i])}`); }
                // console.log("");

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
//1093?
                for (let z=0; z<100; z++) {
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
                }

                console.log(groups);
            
                // NOT 2063
                // NOT 1141 (curiously unlucky guess)
                // NOT 1138 (after switching x and y)
                // AARRGGGHHH I SHOULD RETHINK MY APPROACH AND START OVER!!!
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