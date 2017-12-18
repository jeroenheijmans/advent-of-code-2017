(function(aoc) {
    aoc.days["18"] = {
        actualInput: `
            set i 31
            set a 1
            mul p 17
            jgz p p
            mul a 2
            add i -1
            jgz i -2
            add a -1
            set i 127
            set p 826
            mul p 8505
            mod p a
            mul p 129749
            add p 12345
            mod p a
            set b p
            mod b 10000
            snd b
            add i -1
            jgz i -9
            jgz a 3
            rcv b
            jgz b -1
            set f 0
            set i 126
            rcv a
            rcv b
            set p a
            mul p -1
            add p b
            jgz p 4
            snd a
            set a b
            jgz 1 3
            snd b
            set f 1
            add i -1
            jgz i -11
            snd a
            jgz f -16
            jgz a -19`,

        puzzles:[{
            title: "Puzzle 1",
            expectedAnswer: 7071,
            testSets: [
                { expectedAnswer: 4, data: `
                    set a 1
                    add a 2
                    mul a a
                    mod a 5
                    snd a
                    set a 0
                    rcv a
                    jgz a -1
                    set a 1
                    jgz a -2` },
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

                let registers = _.range(97,123)
                    .map(c => String.fromCharCode(c))
                    .reduce((r, c) => {
                        r[c] = 0;
                        return r;
                    }, {});

                let snd = 0;
                let rcv = 0;
                let i = 0;
                let pos = 0;

                const getRegisterOrValue = n => Number.isInteger(n) ? n : registers[n];

                while (i++ < 1e6) {
                    let {op, x, y} = instructions[pos];
                    let incr = 0;

                    switch (op) {
                        case "snd":
                            snd = getRegisterOrValue(x);
                            break;

                        case "set":
                            registers[x] = getRegisterOrValue(y);
                            break;

                        case "add":
                            registers[x] += getRegisterOrValue(y);
                            break;

                        case "mul":
                            registers[x] *= getRegisterOrValue(y);
                            break;

                        case "mod":
                            registers[x] %= getRegisterOrValue(y);
                            break;

                        case "rcv":
                            if (getRegisterOrValue(x) !== 0) {
                                rcv = snd;
                                return rcv;
                            }
                            break;

                        case "jgz":
                            if (getRegisterOrValue(x) > 0) {
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

                return rcv;
            }
        },

        {
            title: "Puzzle 2",
            expectedAnswer: 8001,
            testSets: [
                { expectedAnswer: 3, data: `
                    snd 1
                    snd 2
                    snd p
                    rcv a
                    rcv b
                    rcv c
                    rcv d` },
            ],
            getSolution: data => {
                function Program(data) {
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

                    let registers = _.range(97,123) // [a-z]
                        .map(c => String.fromCharCode(c))
                        .reduce((r, c) => {
                            r[c] = 0;
                            return r;
                        }, {});

                    let snd = [];
                    let rcv = [];
                    let pos = 0;

                    this.nrOfSends = 0;
                    this.isWaiting = false;
                    this.isTerminated = false;

                    const getRegisterOrValue = n => Number.isInteger(n) ? n : registers[n];

                    this.step = function() {
                        if (!this.isTerminated) {                      
                            pos += this.act(instructions[pos]);
                            if (pos < 0 || pos >= instructions.length) {
                                this.isTerminated = true;
                            }
                        }                    
                    }

                    this.clearSndBuffer = function() {
                        let result = snd.slice();
                        snd = [];
                        return result
                    }

                    this.pushToRcvBuffer = function(messages) {
                        rcv = rcv.concat(messages);
                    }

                    this.act = function(instruction) {
                        let {op, x, y} = instruction;
                        let incr = 0;

                        this.isWaiting = false;

                        switch (op) {
                            case "snd":
                                snd.push(getRegisterOrValue(x));
                                this.nrOfSends++;
                                break;

                            case "set":
                                registers[x] = getRegisterOrValue(y);
                                break;

                            case "add":
                                registers[x] += getRegisterOrValue(y);
                                break;

                            case "mul":
                                registers[x] *= getRegisterOrValue(y);
                                break;

                            case "mod":
                                registers[x] %= getRegisterOrValue(y);
                                break;

                            case "rcv":
                                if (rcv.length > 0) {
                                    registers[x] = rcv.shift();
                                } else {
                                    this.isWaiting = true;
                                    return 0; // Wait until rcv has something
                                }
                                break;

                            case "jgz":
                                if (getRegisterOrValue(x) > 0) {
                                    incr = getRegisterOrValue(y);
                                }
                                break;

                            default:
                                throw "UH OH";
                        }

                        return incr || 1;
                    }
                }

                let prog0 = new Program(data);
                let prog1 = new Program(data);

                prog1.act({ op: "set", x: "p", y: 1 });

                let i = 0;
                while (i++ < 1e6) {
                    prog1.pushToRcvBuffer(prog0.clearSndBuffer());
                    prog0.pushToRcvBuffer(prog1.clearSndBuffer());

                    prog0.step();
                    prog1.step();

                    if (prog0.isWaiting && prog1.isWaiting) { break; }
                    if (prog0.isTerminated || prog1.isTerminated) { break; }
                }

                return prog1.nrOfSends;
            }
        }]

    };
}(window.aoc = window.aoc || {days:{}}));