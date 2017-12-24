(function(aoc) {
    aoc.days["24"] = {
        actualInput: `
            24/14
            30/24
            29/44
            47/37
            6/14
            20/37
            14/45
            5/5
            26/44
            2/31
            19/40
            47/11
            0/45
            36/31
            3/32
            30/35
            32/41
            39/30
            46/50
            33/33
            0/39
            44/30
            49/4
            41/50
            50/36
            5/31
            49/41
            20/24
            38/23
            4/30
            40/44
            44/5
            0/43
            38/20
            20/16
            34/38
            5/37
            40/24
            22/17
            17/3
            9/11
            41/35
            42/7
            22/48
            47/45
            6/28
            23/40
            15/15
            29/12
            45/11
            21/31
            27/8
            18/44
            2/17
            46/17
            29/29
            45/50
        `,

        puzzles:[{
            title: "Puzzle 1",
            expectedAnswer: 2006,
            testSets: [
                { expectedAnswer: 31, data: `
                    0/2
                    2/2
                    2/3
                    3/4
                    3/5
                    0/1
                    10/1
                    9/10
                ` },
            ],
            getSolution: data => {
                let pieces = data
                    .split(/\r?\n/g)
                    .map(l => l.trim())
                    .filter(l => !!l)
                    .map(l => { return { a: parseInt(l.split("/")[0], 10), b: parseInt(l.split("/")[1], 10) }});
                
                function getExtendedBridges(bridge, pieces, connector) {
                    let bridges = [];

                    for (let i = 0; i < pieces.length; i++) {
                        if (pieces[i].a === connector || pieces[i].b === connector) {
                            let newBridge = {
                                weight: bridge.weight + pieces[i].a + pieces[i].b,
                                chain: bridge.chain.concat([pieces[i]])
                            };
                            
                            bridges.push(newBridge);

                            let leftpieces = pieces.filter((p,idx) => idx !== i);
                            let newConnector = pieces[i].a === connector ? pieces[i].b : pieces[i].a;

                            getExtendedBridges(newBridge, leftpieces, newConnector)
                                .forEach(b => bridges.push(b));
                        }
                    }

                    return bridges;
                }

                let bridges = getExtendedBridges({ weight: 0, chain: [{a:0,b:0}]}, pieces, 0);

                return bridges.sort((a,b) => b.weight - a.weight)[0].weight;
            }
        },

        {
            title: "Puzzle 2",
            expectedAnswer: 1994,
            testSets: [
                { expectedAnswer: 19, data: `
                    0/2
                    2/2
                    2/3
                    3/4
                    3/5
                    0/1
                    10/1
                    9/10
                ` },
            ],
            getSolution: data => {
                let pieces = data
                    .split(/\r?\n/g)
                    .map(l => l.trim())
                    .filter(l => !!l)
                    .map(l => { return { a: parseInt(l.split("/")[0], 10), b: parseInt(l.split("/")[1], 10) }});
                
                function getExtendedBridges(bridge, pieces, connector) {
                    let bridges = [];

                    for (let i = 0; i < pieces.length; i++) {
                        if (pieces[i].a === connector || pieces[i].b === connector) {
                            let newBridge = {
                                weight: bridge.weight + pieces[i].a + pieces[i].b,
                                chain: bridge.chain.concat([pieces[i]])
                            };
                            
                            bridges.push(newBridge);

                            let leftpieces = pieces.filter((p,idx) => idx !== i);
                            let newConnector = pieces[i].a === connector ? pieces[i].b : pieces[i].a;

                            getExtendedBridges(newBridge, leftpieces, newConnector)
                                .forEach(b => bridges.push(b));
                        }
                    }

                    return bridges;
                }

                let bridges = getExtendedBridges({ weight: 0, chain: [{a:0,b:0}]}, pieces, 0);

                bridges = bridges.sort((a,b) => b.chain.length - a.chain.length);
                let maxlen = bridges[0].chain.length;
                
                return bridges.filter(l => l.chain.length === maxlen).sort((a,b) => b.weight - a.weight)[0].weight;

            }
        }]
    };
}(window.aoc = window.aoc || {days:{}}));