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
                const reps = data.reps || 40;//sloowww... * 1000 * 1000;
                let result = 0;

                for (let i=0; i<reps; i++) {
                    input.a = (input.a * input.fa) % divisor;
                    input.b = (input.b * input.fb) % divisor;

                    let bina = bin(input.a);
                    let binb = bin(input.b);

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
                const reps = data.reps || 5 * 1000 * 1000;//sloowww... * 1000 * 1000;

                for (let i=0; i<reps; i++) {
                    do { input.a = (input.a * input.fa) % divisor; } while (input.a % 4 !== 0);
                    do { input.b = (input.b * input.fb) % divisor; } while (input.b % 8 !== 0);

                    let bina = bin(input.a);
                    let binb = bin(input.b);                  

                    if (bina === binb) {
                        result++;
                    }
                }

                // Not 2482, you've made a mistake!
                return result;
            }
        }]

        ,bonusTests: [{
            title: "Bin represtation 1",
            test: assert => {
                let result = bin(1092455);
                assert.strictEqual(result, "00000000000100001010101101100111");
            }
        },{
            title: "Bin represtation 2",
            test: assert => {
                let result = bin(430625591);
                assert.strictEqual(result, "00011001101010101101001100110111");
            }
        },{
            title: "Bin represtation 3",
            test: assert => {
                let result = bin(1181022009);
                assert.strictEqual(result, "01000110011001001111011100111001");
            }
        }]
    };

    const mask = 00000000000000000000000000000000

    function bin(input) {
        return ("00000000000000000000000000000000" + (input >>> 0).toString(2)).substr(-16);
    }
}(window.aoc = window.aoc || {days:{}}));