var tables = {
    lobby: {
        1: [{ type: "file", dv: 6 }],
        2: [{ type: "pass", dv: 6 }],
        3: [{ type: "pass", dv: 8 }],
        4: [{ type: "skunk" }],
        5: [{ type: "wisp" }],
        6: [{ type: "killer" }],
    },
    basic: {
        3: [{ type: "hellhound" }],
        4: [{ type: "sabertooth" }],
        5: [{ type: "raven" }, { type: "raven" }],
        6: [{ type: "hellhound" }],
        7: [{ type: "wisp" }],
        8: [{ type: "raven" }],
        9: [{ type: "pass", dv: 6 }],
        10: [{ type: "file", dv: 6 }],
        11: [{ type: "control", dv: 6 }],
        12: [{ type: "pass", dv: 6 }],
        13: [{ type: "skunk" }],
        14: [{ type: "asp" }],
        15: [{ type: "scorpian" }],
        16: [{ type: "killer" }, { type: "skunk" }],
        17: [{ type: "wisp" }, { type: "wisp" }, { type: "wisp" }],
        18: [{ type: "lich" }]
    },
    standard: {
        3: [{ type: "hellhound" }],
        4: [{ type: "sabertooth" }],
        5: [{ type: "raven" }, { type: "raven" }],
        6: [{ type: "hellhound" }],
        7: [{ type: "wisp" }],
        8: [{ type: "raven" }],
        9: [{ type: "pass", dv: 6 }],
        10: [{ type: "file", dv: 6 }],
        11: [{ type: "control", dv: 6 }],
        12: [{ type: "pass", dv: 6 }],
        13: [{ type: "skunk" }],
        14: [{ type: "asp" }],
        15: [{ type: "scorpian" }],
        16: [{ type: "killer" }, { type: "skunk" }],
        17: [{ type: "wisp" }, { type: "wisp" }, { type: "wisp" }],
        18: [{ type: "lich" }]
    },
    uncommon: {
        3: [{ type: "hellhound" }],
        4: [{ type: "sabertooth" }],
        5: [{ type: "raven" }, { type: "raven" }],
        6: [{ type: "hellhound" }],
        7: [{ type: "wisp" }],
        8: [{ type: "raven" }],
        9: [{ type: "pass", dv: 6 }],
        10: [{ type: "file", dv: 6 }],
        11: [{ type: "control", dv: 6 }],
        12: [{ type: "pass", dv: 6 }],
        13: [{ type: "skunk" }],
        14: [{ type: "asp" }],
        15: [{ type: "scorpian" }],
        16: [{ type: "killer" }, { type: "skunk" }],
        17: [{ type: "wisp" }, { type: "wisp" }, { type: "wisp" }],
        18: [{ type: "lich" }]
    },
    advanced: {
        3: [{ type: "hellhound" }],
        4: [{ type: "sabertooth" }],
        5: [{ type: "raven" }, { type: "raven" }],
        6: [{ type: "hellhound" }],
        7: [{ type: "wisp" }],
        8: [{ type: "raven" }],
        9: [{ type: "pass", dv: 6 }],
        10: [{ type: "file", dv: 6 }],
        11: [{ type: "control", dv: 6 }],
        12: [{ type: "pass", dv: 6 }],
        13: [{ type: "skunk" }],
        14: [{ type: "asp" }],
        15: [{ type: "scorpian" }],
        16: [{ type: "killer" }, { type: "skunk" }],
        17: [{ type: "wisp" }, { type: "wisp" }, { type: "wisp" }],
        18: [{ type: "lich" }]
    }
};

function die(sides) {
    return Math.floor(Math.random() * sides) + 1
}

function dice(numDice, numSides) {
    var sum = 0;
    for (var i = 0; i < numDice; i++) {
        var d = die(numSides);
        console.log(d);
        sum += d;
    }
    return sum;
}

class Room {
    constructor(diffculty, id) {
        this.id = id;
        this.diffculty = diffculty;
        this.contents = [];
    }
    populate(alreadyRolled) {
        this.contents = rollContents(alreadyRolled, this.diffculty, 3)
    }
}

class LobbyRoom extends Room {
    constructor(diffculty, id) {
        super(diffculty, id);
    }
    populate(alreadyRolled) {
        this.contents = rollContents(alreadyRolled, 'lobby', 1)
    }
}

class Narc {
    constructor(diffculty, numRooms) {

        if (!numRooms) {
            var numRooms = dice(3, 6)
        }

        this.diffculty = diffculty;
        this.rooms = [];
        this.links = [];

        for (var i = 0; i < numRooms; i++) {
            if (i == 0 || i == 1) {
                this.rooms[i] = new LobbyRoom(diffculty, i);
            }
            else {
                this.rooms[i] = new Room(diffculty, i);
            }

        }
        
        this.__connectRooms();
    }
    populate() {
        var already = { lobby: {}, basic: {}, standard: {}, uncommon: {}, advanced: {} };
        for (var i = 0; i < this.rooms.length; i++) {
            this.rooms[i].populate(already);

        }
    }
    __connectRooms() {

        var branches = 1;
        var roll = dice(1,10);
        while(roll >= 7){
            branches++;
            roll = dice(1,10);
        }

        //branch 2, rooms 11
        var prefix = 3;
        var branchableRooms = this.rooms.length - prefix;//8
        var branchLength = Math.floor(branchableRooms/branches);//4
        var longestBranch = branchLength;//4
        var remainder = branchableRooms % branches;//0

        if(branches > 1 && remainder == 0){
            longestBranch += 1;//5
        }
        else{
            longestBranch += remainder;
        }
        
        console.log(`rooms ${this.rooms.length}, branches: ${branches}, longestBranch: ${longestBranch}, branchLength ${branchLength}`)

        for (let index = 1; index < (prefix + longestBranch); index++) {
            this.links[index-1] = { source: index-1, target: index };
        }

        var remainingBranches = branches - 1;
        var remainderBranches = [];
        for (let x = 0; x < remainingBranches; x++) {
            
        }

        // for (let index = 0; index < this.rooms.length; index++) {
        //     if (index > 0) {
        //         this.links[index - 1] = { source: index - 1, target: index };
        //     }
        // }
    }
}

function rollContents(alreadyRolled, tableName, numDice) {
    var roll = dice(numDice, 6)
    if (alreadyRolled[tableName][roll]) {
        return rollContents(alreadyRolled, tableName, numDice);
    }
    else {
        var result = tables[tableName][roll];
        if ((result[0].type != "file") && (result[0].type != "control")) {
            alreadyRolled[tableName][roll] = true;
        }
        return result;
    }
}
