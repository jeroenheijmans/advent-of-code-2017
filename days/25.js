(function(aoc) {
    aoc.days["25"] = {
        actualInput: "actual",

        puzzles:[{
            title: "Puzzle 1",
            expectedAnswer: 2526,
            testSets: [
                { expectedAnswer: 3, data: "test" },
            ],
            getSolution: data => {
                let tape = new Map();
                let cursor = 0;

                function testcase() {
                    // Begin in state A.
                    let state = "A";

                    // Perform a diagnostic checksum after 6 steps.
                    for (let step = 0; step < 6; step++) {

                        // In state A:
                        // If the current value is 0:
                        //     - Write the value 1.
                        //     - Move one slot to the right.
                        //     - Continue with state B.
                        // If the current value is 1:
                        //     - Write the value 0.
                        //     - Move one slot to the left.
                        //     - Continue with state B.
                        if (state === "A") {
                            if ((tape.get(cursor) || 0) === 0) { tape.set(cursor++, 1); state = "B"; }
                            else { tape.set(cursor--, 0); state = "B"; }
                        }

                        // In state B:
                        // If the current value is 0:
                        //     - Write the value 1.
                        //     - Move one slot to the left.
                        //     - Continue with state A.
                        // If the current value is 1:
                        //     - Write the value 1.
                        //     - Move one slot to the right.
                        //     - Continue with state A.
                        else if (state === "B") {
                            if ((tape.get(cursor) || 0) === 0) { tape.set(cursor--, 1); state = "A"; }
                            else { tape.set(cursor++, 1); state = "A"; }
                        }
                    }
                }

                function actual() {
                    // Begin in state A.
                    let state = "A";

                    // Perform a diagnostic checksum after 12656374 steps.
                    for (let step = 0; step < 12656374; step++) {

                        // In state A:
                        // If the current value is 0:
                        //     - Write the value 1.
                        //     - Move one slot to the right.
                        //     - Continue with state B.
                        // If the current value is 1:
                        //     - Write the value 0.
                        //     - Move one slot to the left.
                        //     - Continue with state C.
                        if (state === "A") {
                            if ((tape.get(cursor) || 0) === 0) { tape.set(cursor++, 1); state = "B"; }
                            else { tape.set(cursor--, 0); state = "C"; }
                        }

                        // In state B:
                        // If the current value is 0:
                        //     - Write the value 1.
                        //     - Move one slot to the left.
                        //     - Continue with state A.
                        // If the current value is 1:
                        //     - Write the value 1.
                        //     - Move one slot to the left.
                        //     - Continue with state D.
                        else if (state === "B") {
                            if ((tape.get(cursor) || 0) === 0) { tape.set(cursor--, 1); state = "A"; }
                            else { tape.set(cursor--, 1); state = "D"; }
                        }

                        // In state C:
                        // If the current value is 0:
                        //     - Write the value 1.
                        //     - Move one slot to the right.
                        //     - Continue with state D.
                        // If the current value is 1:
                        //     - Write the value 0.
                        //     - Move one slot to the right.
                        //     - Continue with state C.
                        else if (state === "C") {
                            if ((tape.get(cursor) || 0) === 0) { tape.set(cursor++, 1); state = "D"; }
                            else { tape.set(cursor++, 0); state = "C"; }
                        }

                        // In state D:
                        // If the current value is 0:
                        //     - Write the value 0.
                        //     - Move one slot to the left.
                        //     - Continue with state B.
                        // If the current value is 1:
                        //     - Write the value 0.
                        //     - Move one slot to the right.
                        //     - Continue with state E.
                        else if (state === "D") {
                            if ((tape.get(cursor) || 0) === 0) { tape.set(cursor--, 0); state = "B"; }
                            else { tape.set(cursor++, 0); state = "E"; }
                        }

                        // In state E:
                        // If the current value is 0:
                        //     - Write the value 1.
                        //     - Move one slot to the right.
                        //     - Continue with state C.
                        // If the current value is 1:
                        //     - Write the value 1.
                        //     - Move one slot to the left.
                        //     - Continue with state F.
                        else if (state === "E") {
                            if ((tape.get(cursor) || 0) === 0) { tape.set(cursor++, 1); state = "C"; }
                            else { tape.set(cursor--, 1); state = "F"; }
                        }

                        // In state F:
                        // If the current value is 0:
                        //     - Write the value 1.
                        //     - Move one slot to the left.
                        //     - Continue with state E.
                        // If the current value is 1:
                        //     - Write the value 1.
                        //     - Move one slot to the right.
                        //     - Continue with state A.
                        else if (state === "F") {
                            if ((tape.get(cursor) || 0) === 0) { tape.set(cursor--, 1); state = "E"; }
                            else { tape.set(cursor++, 0); state = "A"; }
                        }
                    }
                }

                if (data === "actual") { actual(); }
                else { testcase(); }

                return [...tape.values()].reduce((a,b) => a+b, 0);
            }
        },

        {
            title: "Puzzle 2",
            expectedAnswer: true,
            testSets: [],
            getSolution: data => {
                return true; // :-)
            }
        }]
    };
}(window.aoc = window.aoc || {days:{}}));