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
                const divisor = 2147483647;
                const reps = data.reps || 40 * 1000 * 1000;
                let {a,b,fa,fb} = data;
                let result = 0;

                for (let i = 0; i < reps; i++) {
                    a = (a * fa) % divisor;
                    b = (b * fb) % divisor;

                    if ((a & 0xFFFF) === (b & 0xFFFF)) {
                        result++;
                    }
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
                const divisor = 2147483647;
                const reps = data.reps || 5 * 1000 * 1000;
                let {a,b,fa,fb} = data;
                let result = 0;

                for (let i = 0; i < reps; i++) {
                    do { a = (a * fa) % divisor; } while ((a & 3) !== 0);
                    do { b = (b * fb) % divisor; } while ((b & 7) !== 0);

                    if ((a & 0xFFFF) === (b & 0xFFFF)) {
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