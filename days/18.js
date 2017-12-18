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

                const getreg = n => Number.isInteger(n) ? n : registers[n];

                while (i++ < 1e6) {
                    let {op, x, y} = instructions[pos];
                    let incr = 0;

                    switch (op) {
                        case "snd":
                            snd = getreg(x);
                            break;

                        case "set":
                            registers[x] = getreg(y);
                            break;

                        case "add":
                            registers[x] += getreg(y);
                            break;

                        case "mul":
                            registers[x] *= getreg(y);
                            break;

                        case "mod":
                            registers[x] %= getreg(y);
                            break;

                        case "rcv":
                            if (getreg(x) !== 0) {
                                rcv = snd;
                                console.log(i);
                                return rcv;
                            }
                            break;

                        case "jgz":
                            if (getreg(x) > 0) {
                                incr = getreg(y);
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
            expectedAnswer: null,
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

                    let registers = _.range(97,123)
                        .map(c => String.fromCharCode(c))
                        .reduce((r, c) => {
                            r[c] = 0;
                            return r;
                        }, {});

                    let snd = [];
                    let rcv = [];
                    let pos = 0;

                    this.nrOfSends = 0;

                    const getreg = n => Number.isInteger(n) ? n : registers[n];

                    this.step = function() {
                        let incr = this.act(instructions[pos]);
                        pos += incr;
                        if (pos < 0 || pos >= instructions.length) {
                            return 1; // Terminated
                        }
                        return 0;
                    }

                    this.getOutbound = function() {
                        let result = snd.slice();
                        snd = [];
                        return result
                    }

                    this.setInbound = function(messages) {
                        rcv = rcv.concat(messages);
                    }

                    this.act = function(instruction) {
                        let {op, x, y} = instruction;
                        let incr = 0;

                        this.isWaiting = false;

                        switch (op) {
                            case "snd":
                                snd.push(getreg(x));
                                this.nrOfSends++;
                                break;

                            case "set":
                                registers[x] = getreg(y);
                                break;

                            case "add":
                                registers[x] += getreg(y);
                                break;

                            case "mul":
                                registers[x] *= getreg(y);
                                break;

                            case "mod":
                                registers[x] %= getreg(y);
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
                                if (getreg(x) > 0) {
                                    incr = getreg(y);
                                }
                                break;

                            default:
                                throw "UH OH";
                        }

                        return incr || 1;
                    }
                }

                let prog1 = new Program(data);
                let prog2 = new Program(data);

                prog2.act({ op: "set", x: "p", y: 1 });

                let i = 0;

                while (i++ < 1e6) {
                    prog2.setInbound(prog1.getOutbound());
                    prog1.setInbound(prog2.getOutbound());

                    if (prog1.step()) { console.log("Prog1 terminated"); break; }
                    if (prog2.step()) { console.log("Prog2 terminated"); break; }

                    if (prog1.isWaiting && prog2.isWaiting) {
                        console.log("Deadlocked");
                        break;
                    }
                }
                
                console.log(`Exiting after ${i} iterations`);

                // NOT 127 with "terminating"
                // NOT 8128 with "deadlocked" after 79424 iterations - answer too high
                return prog2.nrOfSends;
            }
        }]

        /*,bonusTests: [{
            title: "placeholder",
            test: assert => {
                let result = "SOMETHING";
                assert.strictEqual(result, "SOMETHING");
            }
        }]*/
    };
}(window.aoc = window.aoc || {days:{}}));