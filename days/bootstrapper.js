(function(aoc) {
    "use strict";

    for (let dayKey in aoc.days) {
        if (aoc.days.hasOwnProperty(dayKey)) {
            QUnit.module(`Advent of Code 2017, Day ${"🎄".repeat(parseInt(dayKey, 10))} ${dayKey}`);

            let day = aoc.days[dayKey];

            for (let puzzle of day.puzzles) {
                for (let idx = puzzle.testSets.length-1; idx > 0; idx--) {
                    let set = puzzle.testSets[idx];
                    QUnit.test(`Expect ${set.expectedAnswer} for puzzle ${puzzle.title}, testSets[${idx}]`, assert => {
                        assert.strictEqual(puzzle.getSolution(set.data), set.expectedAnswer);
                    });
                }

                QUnit.test(`Puzzle {puzzle.title}, Actual Problem`, assert => {
                    assert.strictEqual(puzzle.getSolution(day.actualInput), puzzle.expectedAnswer);
                });
            }
        }
    }
}(window.aoc = window.aoc || {days:{}}));