(function(aoc) {
    aoc.days["15"] = {
        actualInput: { a: 277, b: 349, fa: 16807, fb: 48271 },

        puzzles:[{
            title: "Puzzle 1",
            expectedAnswer: 592,
            testSets: [
                { expectedAnswer: 1, data: { a: 65, b: 8921, fa: 16807, fb: 48271, reps: 5 } },
            ],
            getSolution: data => {
                let input = data;
                const divisor = 2147483647;
                const reps = data.reps || 40 * 1000 * 1000;
                let result = 0;

                for (let i=0; i<reps; i++) {
                    input.a = (input.a * input.fa) % divisor;
                    input.b = (input.b * input.fb) % divisor;

                    let bina = input.a & 0xFFFF;
                    let binb = input.b & 0xFFFF;

                    if (bina === binb) result++;
                }

                return result;
            }
        },

        {
            title: "Puzzle 2",
            expectedAnswer: 320,
            testSets: [
                { expectedAnswer: 309, data: { a: 65, b: 8921, fa: 16807, fb: 48271 } },
            ],
            getSolution: data => {
                let input = data;
                const divisor = 2147483647;
                let result = 0;
                const reps = data.reps || 5 * 1000 * 1000;

                for (let i=0; i<reps; i++) {
                    do { input.a = (input.a * input.fa) % divisor; } while (input.a % 4 !== 0);
                    do { input.b = (input.b * input.fb) % divisor; } while (input.b % 8 !== 0);

                    let bina = input.a & 0xFFFF;
                    let binb = input.b & 0xFFFF;

                    if (bina === binb) {
                        result++;
                    }
                }
                
                return result;
            }
        }]

        // More or less "learning" unit tests to see how binary ops function...
        ,bonusTests: [{
            title: "Bin represtation 1",
            test: assert => {
                let result = 1092455 & 0xFFFF;
                assert.strictEqual(result.toString(2), "1010101101100111");
            }
        },{
            title: "Bin represtation 2",
            test: assert => {
                let result = 430625591  & 0xFFFF;
                assert.strictEqual(result.toString(2), "1101001100110111");
            }
        },{
            title: "Bin represtation 3",
            test: assert => {
                let result = 1181022009 & 0xFFFF;
                assert.strictEqual(result.toString(2), "1111011100111001");
            }
        }]
    };
}(window.aoc = window.aoc || {days:{}}));