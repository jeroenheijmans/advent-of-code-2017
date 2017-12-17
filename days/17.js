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

                const print = (x) => {
                    let result = "";
                    for (let i=0; i<buffer.length; i++) {
                        result += i===currentPosition ? ` (${buffer[i]}) ` : `  ${buffer[i]}  `;
                    }
                    console.log(x + "  =>  " + result);
                }

                for (let i = 1; i <= max; i++) {

                    currentPosition += steps;
                    currentPosition %= buffer.length;

                    if (currentPosition >= buffer.length - 1) {
                        buffer.push(i);
                    }
                    else {
                        buffer.splice(currentPosition + 1, 0, i);
                    }

                    currentPosition++;
                    currentPosition %= buffer.length;

                    //print(i);
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

                    currentPosition += steps;
                    currentPosition %= bufferLength;

                    if (currentPosition === 0) {
                        result = i;
                    }

                    bufferLength++;

                    currentPosition++;
                    currentPosition %= bufferLength;
                }

                return result;
            }
        }]
    };
}(window.aoc = window.aoc || {days:{}}));