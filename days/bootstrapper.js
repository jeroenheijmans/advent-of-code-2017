(function(aoc) {
    "use strict";

    for (let dayKey in aoc.days) {
        if (aoc.days.hasOwnProperty(dayKey)) {
            QUnit.module(`Advent of Code 2017, Day ${"🎄".repeat(parseInt(dayKey, 10))} ${dayKey}`);

            let day = aoc.days[dayKey];

            for (let puzzle of day.puzzles) {
                puzzle.testSets.forEach((set, idx) => {
                    QUnit.test(`Puzzle {puzzle.title}, Test Set ${idx}`, assert => {
                        assert.strictEqual(set.expectedAnswer, puzzle.getSolution(set.data));
                    });
                });

                QUnit.test(`Puzzle {puzzle.title}, Actual Problem`, assert => {
                    assert.strictEqual(puzzle.expectedAnswer, puzzle.getSolution(day.actualInput));
                });
            }
        }
    }
}(window.aoc = window.aoc || {days:{}}));