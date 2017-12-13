let getSolution = data => {
    let firewall = data.reduce((map, entry) => {
            map[entry[0]] = (entry[1] - 1) * 2;
            return map;
        }, {});

    let severity = 0;
    let maxDepth = Math.max.apply(Math, data.map(d => d[0]));
    
    function getsCaught(delay) {
        for (let position = 0; position <= maxDepth; position++) {
            if (position >= 0 && firewall.hasOwnProperty(position)) {
                if (((position + delay) % firewall[position]) === 0) {
                    return true;
                }
            }
        }
    }

    const max = 1000 * 1000 * 1000;

    for (let i = 0; i < max; i++) {
        if (!getsCaught(i)) { return i; }
    }

    return "ANSWER NOT FOUND";
};

let actual = [
    [0, 3],
    [1, 2],
    [2, 5],
    [4, 4],
    [6, 4],
    [8, 6],
    [10, 6],
    [12, 6],
    [14, 8],
    [16, 6],
    [18, 8],
    [20, 8],
    [22, 8],
    [24, 12],
    [26, 8],
    [28, 12],
    [30, 8],
    [32, 12],
    [34, 12],
    [36, 14],
    [38, 10],
    [40, 12],
    [42, 14],
    [44, 10],
    [46, 14],
    [48, 12],
    [50, 14],
    [52, 12],
    [54, 9],
    [56, 14],
    [58, 12],
    [60, 12],
    [64, 14],
    [66, 12],
    [70, 14],
    [76, 20],
    [78, 17],
    [80, 14],
    [84, 14],
    [86, 14],
    [88, 18],
    [90, 20],
    [92, 14],
    [98, 18],
];

let test = [
    [0, 3],
    [1, 2],
    [4, 4],
    [6, 4],
];

console.log(getSolution(test));
console.log(getSolution(actual));