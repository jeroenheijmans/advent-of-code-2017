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
    }

    function tieKnot(input, lengths, rounds = 1) {
        let result = input.slice();
        let position = 0;
        let skip = 0;

        for (let round = 0; round < rounds; round++) {
            for (let i = 0; i < lengths.length; i++) {
                // For debug cases in test sets from puzzle 1:
                // console.log(getPresentableData(result, position, loopLength, skip));

                let loopLength = lengths[i];
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

    aoc.days["10"] = {
        actualInput: { list: _.range(0,256), lengths: "225,171,131,2,35,5,0,13,1,246,54,97,255,98,254,110" },

        puzzles: [{
            title: "Puzzle 1",
            expectedAnswer: 23874,
            testSets: [
                { expectedAnswer: 12, data: { list: _.range(0,5), lengths: "3,4,1,5" } },
            ],
            getSolution: data => {
                let lengths = data.lengths.split(",").map(c => parseInt(c, 10));
                let knot = tieKnot(data.list, lengths);

                return knot[0] * knot[1];
            }
        },

        {
            title: "Puzzle 2",
            expectedAnswer: "e1a65bfb5a5ce396025fab5528c25a87",
            testSets: [
                { expectedAnswer: "a2582a3a0e66e6e86e3812dcb672a272", data: { lengths: "" } },
                { expectedAnswer: "33efeb34ea91902bb2f59c9920caa6cd", data: { lengths: "AoC 2017" } },
                { expectedAnswer: "3efbe78a8d82f29979031a4aa0b16a9d", data: { lengths: "1,2,3" } },
                { expectedAnswer: "63960835bcdc130f0b66d7ff4f6a5a8e", data: { lengths: "1,2,4" } },
            ],
            getSolution: data => {
                let position = 0;
                let skip = 0;
                let input = data.list || _.range(0,256);
                let lengths = data.lengths.split("").map(c => c.charCodeAt(0)).concat([17, 31, 73, 47, 23]);

                let knot = tieKnot(input, lengths, 64);

                return getHexForArray(getDenseHash(knot));
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