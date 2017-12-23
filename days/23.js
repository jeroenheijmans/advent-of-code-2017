(function(aoc) {
    aoc.days["23"] = {
        actualInput: `
            set b 67
            set c b
            jnz a 2
            jnz 1 5
            mul b 100
            sub b -100000
            set c b
            sub c -17000
            set f 1
            set d 2
            set e 2
            set g d
            mul g e
            sub g b
            jnz g 2
            set f 0
            sub e -1
            set g e
            sub g b
            jnz g -8
            sub d -1
            set g d
            sub g b
            jnz g -13
            jnz f 2
            sub h -1
            set g b
            sub g c
            jnz g 2
            jnz 1 3
            sub b -17
            jnz 1 -23`,

        puzzles:[{
            title: "Puzzle 1",
            expectedAnswer: null,
            testSets: [
            ],
            getSolution: data => {
                let instructions = data
                    .trim()
                    .split(/\r?\n/g)
                    .filter(i => !!i)
                    .map(i => i.trim())
                    .map(i => {
                        let parts = i.split(" ");

                        return {
                            op: parts[0],
                            x: parseInt(parts[1], 10) || parts[1],
                            y: parts.length < 2 ? null : (parseInt(parts[2], 10) || parts[2])
                        };
                    });

                let registers = _.range(97,105)
                    .map(c => String.fromCharCode(c))
                    .reduce((r, c) => {
                        r[c] = 0;
                        return r;
                    }, {});
                    
                const getRegisterOrValue = n => Number.isInteger(n) ? n : registers[n];

                let result = 0;
                let i = 0;
                let pos = 0;

                while (i++ < 1e3) {
                    let {op, x, y} = instructions[pos];
                    let incr = 0;
                    
                    switch (op) {
                        case "set":
                            registers[x] = getRegisterOrValue(y);
                            break;

                        case "sub":
                            registers[x] -= getRegisterOrValue(y);
                            break;

                        case "mul":
                            registers[x] *= getRegisterOrValue(y);
                            result++;
                            break;

                        case "jnz":
                            if (getRegisterOrValue(x) !== 0) {
                                incr = getRegisterOrValue(y);
                            }
                            break;

                        default:
                            throw "UH OH";
                    }

                    pos += incr || 1;

                    if (pos < 0 || pos >= instructions.length) {
                        break;
                    }
                }

                // NOT 2
                // NOT 1 :'(
                // NOT 166
                // NOT 124
                return result;
            }
        },

        /*{
            title: "Puzzle 2",
            expectedAnswer: null,
            testSets: [
                { expectedAnswer: null, data: [] },
            ],
            getSolution: data => {
                let input = data;

                return "NOT FOUND";
            }
        }*/]

        /*,bonusTests: [{
            title: "placeholder",
            test: assert => {
                let result = "SOMETHING";
                assert.strictEqual(result, "SOMETHING");
            }
        }]*/
    };
}(window.aoc = window.aoc || {days:{}}));