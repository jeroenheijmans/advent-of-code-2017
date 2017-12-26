(function(aoc) {
    "use strict";

    let keys = Object.keys(aoc.days).sort((a,b) => parseInt(b, 10) - parseInt(a, 10));

    for (let dayKey of keys) {
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

        for (let bonus of day.bonusTests || []) {
            QUnit.test(`Bonus test: ${bonus.title}`, bonus.test);
        }
    }
}(window.aoc = window.aoc || {days:{}}));