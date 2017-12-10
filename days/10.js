(function(aoc) {
    function getPresentableData(list, currentPosition, length) {
        let rightBoundary = currentPosition + length - 1;

        if (rightBoundary >= list.length) {
            rightBoundary -= list.length;
        }

        return list.map((item, idx) =>
                idx === currentPosition && idx === rightBoundary ? `([${item}])`
                : idx === currentPosition ? `([${item}]`
                : idx === rightBoundary ? `${item})`
                : `${item}`
            ).join(" ") + `  --  currentPosisition = ${currentPosition}  --  length = ${length}`;
    }

    aoc.days["10"] = {
        actualInput: { list: _.range(0,256), lengths: [225,171,131,2,35,5,0,13,1,246,54,97,255,98,254,110] },

        puzzles:[{
            title: "Puzzle 1",
            expectedAnswer: 23874,
            testSets: [
                { expectedAnswer: 12, data: { list: _.range(0,5), lengths: [3, 4, 1, 5]} },
            ],
            getSolution: data => {
                let currentPosition = 0;
                let skipSize = 0;

                let inputList = data.list;
                let inputLengths = data.lengths;

                for (let i = 0; i < inputLengths.length; i++) {
                    let currentLoopLength = inputLengths[i];

                    //console.log(getPresentableData(inputList, currentPosition, currentLoopLength) + `  --  skip = ${skipSize}`);

                    let reversedSection = [];

                    for (let readFrom = currentPosition, x = 0; x < currentLoopLength; x++) {
                        readFrom = currentPosition + x;

                        if (readFrom >= inputList.length) {
                            readFrom -= inputList.length;
                        }

                        reversedSection.unshift(inputList[readFrom]);
                    }

                    for (let readFrom = currentPosition, x = 0; x < currentLoopLength; x++) {                        readFrom = currentPosition + x;
                        readFrom = currentPosition + x;

                        if (readFrom >= inputList.length) {
                            readFrom -= inputList.length;
                        }

                        inputList[readFrom] = reversedSection[x];
                    }

                    currentPosition += currentLoopLength + skipSize;
                    skipSize++;

                    if (currentPosition >= inputList.length) {
                        currentPosition -= inputList.length;
                    }
                }

                return inputList[0] * inputList[1];
            }
        },

        {
            title: "Puzzle 2",
            expectedAnswer: null,
            testSets: [
                { expectedAnswer: "a2582a3a0e66e6e86e3812dcb672a272", data: "" },
                { expectedAnswer: "33efeb34ea91902bb2f59c9920caa6cd", data: "AoC 2017" },
                { expectedAnswer: "3efbe78a8d82f29979031a4aa0b16a9d", data: "1,2,3" },
                { expectedAnswer: "63960835bcdc130f0b66d7ff4f6a5a8e", data: "1,2,4" },
            ],
            getSolution: data => {
                let currentPosition = 0;
                let skipSize = 0;

                let inputList = _.range(0,256);

                let inputString = data.hasOwnProperty("lengths") ? data.lengths.join(",") : data;

                let inputLengths = inputString.split("").map(c => c.charCodeAt(0)).concat([17, 31, 73, 47, 23]);

                for (let round = 0; round < 64; round++) {
                    //console.log(`Round ${round} with inputLengths ${JSON.stringify(inputLengths)} and list ${JSON.stringify(inputList)} `);
                    //console.log(getPresentableData(inputList, currentPosition, inputLengths[0]) + `  --  skip = ${skipSize}`);
                    //console.log("");

                    for (let i = 0; i < inputLengths.length; i++) {
                        let currentLoopLength = inputLengths[i];
                        let reversedSection = [];

                        for (let readFrom = currentPosition, x = 0; x < currentLoopLength; x++) {
                            readFrom = currentPosition + x;

                            if (readFrom >= inputList.length) {
                                readFrom -= inputList.length;
                            }

                            reversedSection.unshift(inputList[readFrom]);
                        }

                        for (let readFrom = currentPosition, x = 0; x < currentLoopLength; x++) {                        readFrom = currentPosition + x;
                            readFrom = currentPosition + x;

                            if (readFrom >= inputList.length) {
                                readFrom -= inputList.length;
                            }

                            inputList[readFrom] = reversedSection[x];
                        }

                        currentPosition += currentLoopLength + skipSize;
                        skipSize++;

                        while (currentPosition >= inputList.length) {
                            currentPosition -= inputList.length;
                        }
                    }
                }

                console.log(inputList); // The "Sparse Hash"

                function getDenseHash(sparseHash) {
                    let result = [];

                    for (let blockNr = 0; blockNr < 16; blockNr++) {
                        let block = sparseHash.slice(blockNr * 16, (blockNr + 1) * 16);
                        result[blockNr] = block.reduce((a,b) => a ^ b);
                    }

                    return result;
                }
                // Should give only 64s:
                //console.log(getDenseHash([65, 27, 9, 1, 4, 3, 40, 50, 91, 7, 6, 0, 2, 5, 68, 22, 65, 27, 9, 1, 4, 3, 40, 50, 91, 7, 6, 0, 2, 5, 68, 22, 65, 27, 9, 1, 4, 3, 40, 50, 91, 7, 6, 0, 2, 5, 68, 22, 65, 27, 9, 1, 4, 3, 40, 50, 91, 7, 6, 0, 2, 5, 68, 22, 65, 27, 9, 1, 4, 3, 40, 50, 91, 7, 6, 0, 2, 5, 68, 22, 65, 27, 9, 1, 4, 3, 40, 50, 91, 7, 6, 0, 2, 5, 68, 22, 65, 27, 9, 1, 4, 3, 40, 50, 91, 7, 6, 0, 2, 5, 68, 22, 65, 27, 9, 1, 4, 3, 40, 50, 91, 7, 6, 0, 2, 5, 68, 22, 65, 27, 9, 1, 4, 3, 40, 50, 91, 7, 6, 0, 2, 5, 68, 22, 65, 27, 9, 1, 4, 3, 40, 50, 91, 7, 6, 0, 2, 5, 68, 22, 65, 27, 9, 1, 4, 3, 40, 50, 91, 7, 6, 0, 2, 5, 68, 22, 65, 27, 9, 1, 4, 3, 40, 50, 91, 7, 6, 0, 2, 5, 68, 22, 65, 27, 9, 1, 4, 3, 40, 50, 91, 7, 6, 0, 2, 5, 68, 22, 65, 27, 9, 1, 4, 3, 40, 50, 91, 7, 6, 0, 2, 5, 68, 22, 65, 27, 9, 1, 4, 3, 40, 50, 91, 7, 6, 0, 2, 5, 68, 22, 65, 27, 9, 1, 4, 3, 40, 50, 91, 7, 6, 0, 2, 5, 68, 22]));

                function getHexForDenseHash(denseHash) {
                    return denseHash.map(digit => {
                        let result = digit.toString(16);
                        return result.length === 1 ? `0${result}` : result;
                    }).join("");
                }
                // Should give 4007ff:
                // console.log(getHexForDenseHash([64, 7, 255]));

                return getHexForDenseHash(getDenseHash(inputList));
            }
        }]
    };
}(window.aoc = window.aoc || {days:{}}));