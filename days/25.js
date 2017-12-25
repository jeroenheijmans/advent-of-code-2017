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
                let negtape = [0], postape = [0];
                let cursor = 0;

                function tapeset(cursor, value) {
                    if (cursor < 0) { negtape[-cursor] = value; }
                    else { postape[cursor] = value; }
                }
                
                function gettape(cursor) {
                    return cursor < 0 
                        ? (negtape[-cursor] || 0) 
                        : (postape[cursor] || 0);
                }

                function testcase() {
                    // Begin in state A.
                    let state = "A";
                    // Perform a diagnostic checksum after 6 steps.
                    let maxsteps = 6;
                    for (let step = 0; step < maxsteps; step++) {
    
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
                            if (gettape(cursor) === 0) { tapeset(cursor, 1); cursor++; state = "B"; }
                            else { tapeset(cursor, 0); cursor--; state = "B"; }
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
                            if (gettape(cursor) === 0) { tapeset(cursor, 1); cursor--; state = "A"; }
                            else { tapeset(cursor, 1); cursor++; state = "A"; }
                        }
                    }
                }

                function actual() {
                    // Begin in state A.
                    let state = "A";
                    // Perform a diagnostic checksum after 12656374 steps.
                    let maxsteps = 12656374;
                    for (let step = 0; step < maxsteps; step++) {
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
                            if (gettape(cursor) === 0) { tapeset(cursor, 1); cursor++; state = "B"; }
                            else { tapeset(cursor, 0); cursor--; state = "C"; }
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
                            if (gettape(cursor) === 0) { tapeset(cursor, 1); cursor--; state = "A"; }
                            else { tapeset(cursor, 1); cursor--; state = "D"; }
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
                            if (gettape(cursor) === 0) { tapeset(cursor, 1); cursor++; state = "D"; }
                            else { tapeset(cursor, 0); cursor++; state = "C"; }
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
                            if (gettape(cursor) === 0) { tapeset(cursor, 0); cursor--; state = "B"; }
                            else { tapeset(cursor, 0); cursor++; state = "E"; }
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
                            if (gettape(cursor) === 0) { tapeset(cursor, 1); cursor++; state = "C"; }
                            else { tapeset(cursor, 1); cursor--; state = "F"; }
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
                            if (gettape(cursor) === 0) { tapeset(cursor, 1); cursor--; state = "E"; }
                            else { tapeset(cursor, 0); cursor++; state = "A"; }
                        }

                        // if (step % 1e6 === 0) { console.log(step); }
                    }
                }

                if (data === "actual") { actual(); } 
                else { testcase(); }
                
                return negtape.reduce((a,b) => a+b, 0) + postape.reduce((a,b) => a+b, 0);
            }
        },

        {
            title: "Puzzle 2",
            expectedAnswer: true,
            testSets: [
                
            ],
            getSolution: data => {
                return true; // !!
            }
        }]
    };
}(window.aoc = window.aoc || {days:{}}));