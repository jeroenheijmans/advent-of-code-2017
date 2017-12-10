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
        actualInput: {list: _.range(0,256), lengths: [225,171,131,2,35,5,0,13,1,246,54,97,255,98,254,110] },

        puzzles:[{
            title: "Puzzle 1",
            expectedAnswer: 23874,
            testSets: [
                { expectedAnswer: 12, data: {list: _.range(0,5), lengths: [3, 4, 1, 5]} },
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

        /*{
            title: "Puzzle 2",
            expectedAnswer: null,
            testSets: [
                { expectedAnswer: null, data: [] },
            ],
            getSolution: data => {
                var result = 0;

                return result;
            }
        }*/]
    };
}(window.aoc = window.aoc || {days:{}}));