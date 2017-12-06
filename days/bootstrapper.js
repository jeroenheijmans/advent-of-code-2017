(function(aoc) {
    "use strict";

    for (let dayKey in aoc.days) {
        if (aoc.days.hasOwnProperty(dayKey)) {
            QUnit.module(`Advent of Code 2017, Day ${"🎄".repeat(parseInt(dayKey, 10))} ${dayKey}`);

            let day = aoc.days[dayKey];

            for (let puzzle of day.puzzles) {
                for (let idx = puzzle.testSets.length - 1; idx >= 0; idx--) {
                    let set = puzzle.testSets[idx];
                    let dumbClone = JSON.parse(JSON.stringify(set.data));                    

                    QUnit.test(`${puzzle.title}, testSets[${idx}] should give ${set.expectedAnswer}`, assert => {
                        assert.strictEqual(puzzle.getSolution(dumbClone), set.expectedAnswer);
                    });
                }

                QUnit.test(`${puzzle.title}, actual puzzle input should give the correct answer`, assert => {
                    let dumbClone = JSON.parse(JSON.stringify(day.actualInput));
                    assert.strictEqual(puzzle.getSolution(dumbClone), puzzle.expectedAnswer);
                });
            }
        }
    }
}(window.aoc = window.aoc || {days:{}}));