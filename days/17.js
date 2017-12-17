(function(aoc) {
    aoc.days["17"] = {
        actualInput: 394,

        puzzles:[{
            title: "Puzzle 1",
            expectedAnswer: 926,
            testSets: [
                { expectedAnswer: 638, data: 3 },
            ],
            getSolution: data => {
                const max = 2017;
                let steps = data;
                let buffer = [0];
                let currentPosition = 0;

                for (let i = 1; i <= max; i++) {
                    currentPosition += 1 + steps;
                    currentPosition %= buffer.length;
                    buffer.splice(currentPosition, 0, i);
                }

                let answerPosition = (1 + currentPosition) % buffer.length;

                return buffer[answerPosition];
            }
        },

        {
            title: "Puzzle 2",
            expectedAnswer: 10150888,
            testSets: [
            ],
            getSolution: data => {
                const max = 50e6;
                let steps = data;
                let bufferLength = 1;
                let currentPosition = 0;
                let result = -1;

                for (let i = 1; i <= max; i++) {
                    currentPosition += 1 + steps;
                    currentPosition %= bufferLength;
                    if (currentPosition === 0) { result = i; }
                    bufferLength++;
                }

                return result;
            }
        }]
    };
}(window.aoc = window.aoc || {days:{}}));