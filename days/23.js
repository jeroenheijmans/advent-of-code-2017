(function(aoc) {
    aoc.days["23"] = {
        actualInput: `
            set b 67
            set c b
            jnz a 2
            jnz 1 5
            mul b 100
            add b 100000
            set c b
            add c 17000
                set f 1
                set d 2
                    set e 2
                        set g d
                        mul g e
                        sub g b
                        jnz g 2
                        set f 0
                        add e 1
                        set g e
                        sub g b
                        jnz g -8
                    add d 1
                    set g d
                    sub g b
                    jnz g -13
                jnz f 2
                add h 1
                set g b
                sub g c
                jnz g 2
                jnz 1 3
                add b 17
                jnz 1 -23
        `,

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
                            x: parts[1].match(/[a-z]/i) ? parts[1] : parseInt(parts[1], 10),
                            y: parts.length <= 2 ? null : (parts[2].match(/[a-z]/i) ? parts[2] : parseInt(parts[2], 10))
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
                let machine = new Machine(data, { a: 1 });
                let i = 0;

                while (i++ < 1e6 && !machine.hasHalted) {
                    machine.step();
                }
                
                return machine.getRegisterOrValue("h");
            }
        }]
    };

    function Machine(data, initialRegisters = {}) {
        const self = this;
        let pos = 0;
        self.hasHalted = false;
        self.step = step;
        self.getRegisterOrValue = getRegisterOrValue;

        let instructions = data
            .trim()
            .split(/\r?\n/g)
            .filter(i => !!i)
            .map(i => i.trim())
            .map(i => {
                let parts = i.split(" ");

                return {
                    op: parts[0],
                    x: parts.length <= 1 ? null : (parts[1].match(/[a-z]/i) ? parts[1] : parseInt(parts[1], 10)),
                    y: parts.length <= 2 ? null : (parts[2].match(/[a-z]/i) ? parts[2] : parseInt(parts[2], 10))
                };
            });

        let registers = _.range(97,105)
            .map(c => String.fromCharCode(c))
            .reduce((r, c) => {
                r[c] = initialRegisters[c] || 0;
                return r;
            }, {});
        
        function getRegisterOrValue(n) {
            return Number.isInteger(n) ? n : registers[n];
        }

        function doop(instruction) {
            let {op, x, y} = instruction;
            let incr = 0;

            switch (op) {
                case "set":
                    registers[x] = getRegisterOrValue(y);
                    return 1;

                case "sub":
                    registers[x] -= getRegisterOrValue(y);
                    return 1;
                    
                case "add":
                    registers[x] += getRegisterOrValue(y);
                    return 1;
                    
                case "mul":
                    registers[x] *= getRegisterOrValue(y);
                    return 1;
                    
                case "jnz":
                    if (getRegisterOrValue(x) !== 0) {
                        return getRegisterOrValue(y);
                    }
                    return 1;
                    
                default:
                    throw `Operation ${op} not found`;
            }
        }

        function step() {
            pos += doop(instructions[pos]);

            if (pos < 0 || pos >= instructions.length) {
                self.hasHalted = true;
            }
        }
    }

}(window.aoc = window.aoc || {days:{}}));