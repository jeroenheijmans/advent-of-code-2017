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
            expectedAnswer: 4225,
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

                while (i++ < 1e6) {
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

                return result;
            }
        },

        {
            title: "Puzzle 2",
            expectedAnswer: null,
            testSets: [
            ],
            getSolution: data => {
                let reg = _.range(97,105)
                    .map(c => String.fromCharCode(c))
                    .reduce((r, c) => {
                        r[c] = 0;
                        return r;
                    }, {});
                
                reg["a"] = 1;

                let i = 0;
                let skip = 0;

                while (i++ < 1e7) {
                /* set b 67       */ if (--skip <= 0) { reg.b = 67; }
                /* set c b        */ if (--skip <= 0) { reg.c = reg.b; }
                /* jnz a 2        */ if (--skip <= 0) { if (reg.a !== 0) { skip = 2; } }
                /* jnz 1 5        */ if (--skip <= 0) { skip = 5; }
                /* mul b 100      */ if (--skip <= 0) { reg.b *= 100; }
                /* sub b -100000  */ if (--skip <= 0) { reg.b += 100000; }
                /* set c b        */ if (--skip <= 0) { reg.c = reg.b; }
                /* sub c -17000   */ if (--skip <= 0) { reg.c += 17000; }
                /* set f 1        */ if (--skip <= 0) { reg.f = 1; }
                /* set d 2        */ if (--skip <= 0) { reg.d = 2; }
                /* set e 2        */ if (--skip <= 0) { reg.e = 2; } ///
                /* set g d        */ if (--skip <= 0) { reg.g = reg.d; }
                /* mul g e        */ if (--skip <= 0) { reg.g *= reg.e; }
                /* sub g b        */ if (--skip <= 0) { reg.g -= reg.b; }
                /* jnz g 2        */ if (--skip <= 0) { if (reg.g !== 0) { skip = 2; } }
                /* set f 0        */ if (--skip <= 0) { reg.f = 0; }
                /* sub e -1       */ if (--skip <= 0) { reg.e += 1; }
                /* set g e        */ if (--skip <= 0) { reg.g = reg.e; }
                /* sub g b        */ if (--skip <= 0) { reg.g -= reg.b; }
                /* jnz g -8       */ if (--skip <= 0) { if (reg.g !== 0) { skip = 24; } }
                /* sub d -1       */ if (--skip <= 0) { reg.d += 1; }
                /* set g d        */ if (--skip <= 0) { reg.g = reg.d;  }
                /* sub g b        */ if (--skip <= 0) { reg.g -= reg.b; }
                /* jnz g -13      */ if (--skip <= 0) { if (reg.g !== 0) { skip = 19; } }
                /* jnz f 2        */ if (--skip <= 0) { if (reg.f !== 0) { skip = 2; } }
                /* sub h -1       */ if (--skip <= 0) { reg.h += 1; }
                /* set g b        */ if (--skip <= 0) { reg.g = reg.b; }
                /* sub g c        */ if (--skip <= 0) { reg.g -= reg.c; }
                /* jnz g 2        */ if (--skip <= 0) { if (reg.g !== 0) { skip = 2; } }
                /* jnz 1 3        */ if (--skip <= 0) { /*skip = 3;*/ console.log("exiting!"); break; }
                /* sub b -17      */ if (--skip <= 0) { reg.b -= 17; }
                /* jnz 1 -23      */ if (--skip <= 0) { skip = 9; }
                }    

                return reg["h"];
            }
        }]
    };
}(window.aoc = window.aoc || {days:{}}));