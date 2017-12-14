(function(aoc) {
    function getPresentableData(list, position, length, skip) {
        let rightBoundary = position + length - 1;

        if (rightBoundary >= list.length) {
            rightBoundary -= list.length;
        }

        return list.map((item, idx) =>
                idx === position && idx === rightBoundary ? `([${item}])`
                : idx === position ? `([${item}]`
                : idx === rightBoundary ? `${item})`
                : `${item}`
            ).join(" ") + `  --  currentPosisition = ${position}  --  length = ${length}  --  skip = ${skip}`;
    };

    function tieKnot(inputText, rounds = 1, range = 256) {
        let result = [...Array(range).keys()];
        let position = 0;
        let skip = 0;

        for (let round = 0; round < rounds; round++) {
            for (const loopLength of inputText) {
                let reversedSection = Array(loopLength);

                for (let at = position, x = 0; x < loopLength; x++) {
                    at = (position + x) % result.length;
                    reversedSection[loopLength - x - 1] = result[at];
                }

                for (let at = position, x = 0; x < loopLength; x++) {
                    at = (position + x) % result.length;
                    result[at] = reversedSection[x];
                }
       
                position = (position + loopLength + skip) % range;
                skip++;
            }
        }

        return result;
    };

    function getDenseHash(sparseHash) {
        let result = [];

        for (let blockNr = 0; blockNr < 16; blockNr++) {
            let block = sparseHash.slice(blockNr * 16, (blockNr + 1) * 16);
            result[blockNr] = block.reduce((a,b) => a ^ b);
        }

        return result;
    };

    function getHexForArray(denseHash) {
        return denseHash
            .map(digit => ("0" + digit.toString(16)).substr(-2))
            .join("");
    };

    function getKnotHash(inputText) {
        let inputArray = inputText.split("").map(c => c.charCodeAt(0)).concat([17, 31, 73, 47, 23]);
        let knot = tieKnot(inputArray, 64);
        let denseHash = getDenseHash(knot);
        let hex = getHexForArray(denseHash);
        return hex;
    }

    aoc.getKnotHash = getKnotHash;

    aoc.days["10"] = {
        actualInput: { range: 256, input: "225,171,131,2,35,5,0,13,1,246,54,97,255,98,254,110" },

        puzzles: [{
            title: "Puzzle 1",
            expectedAnswer: 23874,
            testSets: [
                { expectedAnswer: 12, data: { range: 5, input: "3,4,1,5" } },
            ],
            getSolution: data => {
                let lengths = data.input.split(",").map(c => parseInt(c, 10));
                let knot = tieKnot(lengths, 1, data.range);

                return knot[0] * knot[1];
            }
        },

        {
            title: "Puzzle 2",
            expectedAnswer: "e1a65bfb5a5ce396025fab5528c25a87",
            testSets: [
                { expectedAnswer: "a2582a3a0e66e6e86e3812dcb672a272", data: { input: "" } },
                { expectedAnswer: "33efeb34ea91902bb2f59c9920caa6cd", data: { input: "AoC 2017" } },
                { expectedAnswer: "3efbe78a8d82f29979031a4aa0b16a9d", data: { input: "1,2,3" } },
                { expectedAnswer: "63960835bcdc130f0b66d7ff4f6a5a8e", data: { input: "1,2,4" } },
            ],
            getSolution: data => {
                return getKnotHash(data.input);
            }
        }],

        bonusTests: [{
            title: "getDenseHash for example",
            test: assert => {
                var result = getDenseHash([65, 27, 9, 1, 4, 3, 40, 50, 91, 7, 6, 0, 2, 5, 68, 22, 65, 27, 9, 1, 4, 3, 40, 50, 91, 7, 6, 0, 2, 5, 68, 22, 65, 27, 9, 1, 4, 3, 40, 50, 91, 7, 6, 0, 2, 5, 68, 22, 65, 27, 9, 1, 4, 3, 40, 50, 91, 7, 6, 0, 2, 5, 68, 22, 65, 27, 9, 1, 4, 3, 40, 50, 91, 7, 6, 0, 2, 5, 68, 22, 65, 27, 9, 1, 4, 3, 40, 50, 91, 7, 6, 0, 2, 5, 68, 22, 65, 27, 9, 1, 4, 3, 40, 50, 91, 7, 6, 0, 2, 5, 68, 22, 65, 27, 9, 1, 4, 3, 40, 50, 91, 7, 6, 0, 2, 5, 68, 22, 65, 27, 9, 1, 4, 3, 40, 50, 91, 7, 6, 0, 2, 5, 68, 22, 65, 27, 9, 1, 4, 3, 40, 50, 91, 7, 6, 0, 2, 5, 68, 22, 65, 27, 9, 1, 4, 3, 40, 50, 91, 7, 6, 0, 2, 5, 68, 22, 65, 27, 9, 1, 4, 3, 40, 50, 91, 7, 6, 0, 2, 5, 68, 22, 65, 27, 9, 1, 4, 3, 40, 50, 91, 7, 6, 0, 2, 5, 68, 22, 65, 27, 9, 1, 4, 3, 40, 50, 91, 7, 6, 0, 2, 5, 68, 22, 65, 27, 9, 1, 4, 3, 40, 50, 91, 7, 6, 0, 2, 5, 68, 22, 65, 27, 9, 1, 4, 3, 40, 50, 91, 7, 6, 0, 2, 5, 68, 22]);
                var expected = _.range(0,16).map(_ => 64);
                assert.deepEqual(result, expected);
            }
        }, {
            title: "getHexForArray for example",
            test: assert => {
                var result = getHexForArray([64, 7, 255]);
                assert.strictEqual(result, "4007ff");
            }
        }]
    };
}(window.aoc = window.aoc || {days:{}}));