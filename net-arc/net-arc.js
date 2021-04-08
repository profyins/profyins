var tables = {
    lobby: {
        1: [{ type: "file", dv: 6 }],
        2: [{ type: "password", dv: 6 }],
        3: [{ type: "password", dv: 8 }],
        4: [{ type: "skunk" }],
        5: [{ type: "wisp" }],
        6: [{ type: "killer" }],
    },
    basic: {
        3: [{ type: "hellhound" }],
        4: [{ type: "sabretooth" }],
        5: [{ type: "raven" }, { type: "raven" }],
        6: [{ type: "hellhound" }],
        7: [{ type: "wisp" }],
        8: [{ type: "raven" }],
        9: [{ type: "password", dv: 6 }],
        10: [{ type: "file", dv: 6 }],
        11: [{ type: "control", dv: 6 }],
        12: [{ type: "password", dv: 6 }],
        13: [{ type: "skunk" }],
        14: [{ type: "asp" }],
        15: [{ type: "scorpion" }],
        16: [{ type: "killer" }, { type: "skunk" }],
        17: [{ type: "wisp" }, { type: "wisp" }, { type: "wisp" }],
        18: [{ type: "liche" }]
    },
    standard: {
        3: [{ type: "hellhound" }],
        4: [{ type: "sabretooth" }],
        5: [{ type: "raven" }, { type: "raven" }],
        6: [{ type: "hellhound" }],
        7: [{ type: "wisp" }],
        8: [{ type: "raven" }],
        9: [{ type: "password", dv: 6 }],
        10: [{ type: "file", dv: 6 }],
        11: [{ type: "control", dv: 6 }],
        12: [{ type: "password", dv: 6 }],
        13: [{ type: "skunk" }],
        14: [{ type: "asp" }],
        15: [{ type: "scorpion" }],
        16: [{ type: "killer" }, { type: "skunk" }],
        17: [{ type: "wisp" }, { type: "wisp" }, { type: "wisp" }],
        18: [{ type: "liche" }]
    },
    uncommon: {
        3: [{ type: "hellhound" }],
        4: [{ type: "sabretooth" }],
        5: [{ type: "raven" }, { type: "raven" }],
        6: [{ type: "hellhound" }],
        7: [{ type: "wisp" }],
        8: [{ type: "raven" }],
        9: [{ type: "password", dv: 6 }],
        10: [{ type: "file", dv: 6 }],
        11: [{ type: "control", dv: 6 }],
        12: [{ type: "password", dv: 6 }],
        13: [{ type: "skunk" }],
        14: [{ type: "asp" }],
        15: [{ type: "scorpion" }],
        16: [{ type: "killer" }, { type: "skunk" }],
        17: [{ type: "wisp" }, { type: "wisp" }, { type: "wisp" }],
        18: [{ type: "liche" }]
    },
    advanced: {
        3: [{ type: "hellhound" }],
        4: [{ type: "sabretooth" }],
        5: [{ type: "raven" }, { type: "raven" }],
        6: [{ type: "hellhound" }],
        7: [{ type: "wisp" }],
        8: [{ type: "raven" }],
        9: [{ type: "password", dv: 6 }],
        10: [{ type: "file", dv: 6 }],
        11: [{ type: "control", dv: 6 }],
        12: [{ type: "password", dv: 6 }],
        13: [{ type: "skunk" }],
        14: [{ type: "asp" }],
        15: [{ type: "scorpion" }],
        16: [{ type: "killer" }, { type: "skunk" }],
        17: [{ type: "wisp" }, { type: "wisp" }, { type: "wisp" }],
        18: [{ type: "liche" }]
    }
};


var pasz ={icon:"pass.png",dv:["dv6","dv8","dv10","dv12"]};
var filz ={icon:"file.png",dv:["dv6","dv8","dv10","dv12"]};
var conode ={icon:"conode.png",dv:["dv6","dv8","dv10","dv12"]};

function prog(name, icon, type, per, spd, atk, def, rez, eff) {
    this.name=name;
    this.icon = icon;
    this.type= type;
    this.per=per;
    this.spd=spd;
    this.atk=atk;
    this.def=def;
    this.rez=rez;
    this.eff=eff;
}
var hellhound =new prog("hellhound","prored.svg","antipersonel",6,6,6,2,20,"2d6 dmg, catch fire, 2dmg");
 var sabretooth =new prog("sabretooth","sabr.png","antiprog",8,6,6,2,25, "6d6 dmg to prg, removed prog");
 var raven=new prog("raven","rav.png", "antipersonel",6,4,4,2,15, "derez a rezzed def then 1d6");
 var asp=new prog("asp","asp.png","antipersonel",4,6,2,2,15, "destroy 1 prg on deck");
 var killer=new prog("killer","kllr.png","antiprog",4,8,6,2,20,"4d6 dmg to prog, destroys from deck");
 var scorpion=new prog("scorpion","scorp.png","antipersonel",2,6,2,2,15,"netrunner move -1d6 for hour. min1");
 var skunk=new prog("skunk","skun.png","antipersonel",2,4,4,2,10, "until drezzed, slide at -2 can stack");
 var wisp=new prog("wisp","wis.png", "antipersonel", 4,4,4,2,15, "does 1d6 lowers net action next turn, min 2");
 var liche=new prog("liche","lich.png", "antipersonel",8,2,6,2,25, "int dex ref lowered 1d6 for hour");
 var dragon=new prog("dragon","drag.png","antiprog", 6,4,6,6,30,"6d6 to rezzed program destroyed in deck");
 var giant=new prog("giant","gian.png","antipersonel", 2,2,8,4,25, "3d6 forcibly jacked out");
 var kraken=new prog("kraken","krak.png","antipersonel",6,2,8,4,"3d6 cant move or jack out till next turn")
var progz ={hellhound,sabretooth,raven,asp,killer,scorpion,skunk,wisp,liche,dragon,giant,kraken};




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
        this.isLeaf = false;
    }
    populate(alreadyRolled) {
        this.contents = rollContents(alreadyRolled, this.diffculty, 3, this.isLeaf)
    }
}

class LobbyRoom extends Room {
    constructor(diffculty, id) {
        super(diffculty, id);
    }
    populate(alreadyRolled) {
        this.contents = rollContents(alreadyRolled, 'lobby', 1, this.isLeaf)
    }
}

class Narc {

    __connectRooms() {
        ////////////////////////////////////////////////////////////////////////////
        // determine how many branches
        // 1 branch is one single long netarch
        ////////////////////////////////////////////////////////////////////////////
        var branches = 1;
        var roll = dice(1, 10);
        while (roll >= 7) {
            branches++;
            roll = dice(1, 10);
        }

        ////////////////////////////////////////////////////////////////////////////
        //determine how short that the longest branch can be
        //hopefully this allows longer side branches
        //all netarchs start with the first 3 rooms 
        ////////////////////////////////////////////////////////////////////////////
        var prefix = 3;
        //after the first 3 rooms other rooms can be on any branch
        var branchableRooms = this.rooms.length - prefix;
        //average branch length if branches are equal size
        var branchLength = Math.floor(branchableRooms / branches);
        var longestBranch = branchLength;
        //determine how many rooms are left over after making equal size branches
        var remainder = branchableRooms % branches;
        if (branches > 1 && remainder == 0) {
            //if no remainder then 'steal' a room from a side branch 
            //and add it to main branch to make main branch the longest
            longestBranch += 1;//5
        }
        else {
            //if there is a remainder add the rooms to the main branch to make it longest
            longestBranch += remainder;
        }

        console.log(`rooms ${this.rooms.length}, branches: ${branches}, longestBranch: ${longestBranch}, branchLength ${branchLength}`)

        ////////////////////////////////////////////////////////////////////////////
        //create the main branch of the desired length prefix plus longest branch
        ////////////////////////////////////////////////////////////////////////////
        let mainBranch = [this.rooms[0]];
        for (let index = 1; index < (prefix + longestBranch); index++) {
            this.links[index - 1] = { source: index - 1, target: index };
            mainBranch.push(this.rooms[index]);
        }
        //////////////////////////////////////////////////////////////////////////
        //the root is always the last room in the mainBranch
        //////////////////////////////////////////////////////////////////////////
        this.root = mainBranch[mainBranch.length-1];
        this.root.isLeaf = true;

        ////////////////////////////////////////////////////////////////////////////
        //for the side branches, create them now 
        //as separate chains of connected rooms
        ////////////////////////////////////////////////////////////////////////////
        var remainingBranches = branches - 1;
        var remainderBranches = [];
        let roomIndex = (prefix + longestBranch);
        
        //loop over remaining branches
        for (let r = 0; r < remainingBranches; r++) {
            remainderBranches[r] = [];
            //loop to try to create equal sized side branch of branchLength
            for (let b = 0; b < branchLength; b++) {
                //because we 'steal' rooms from side branches
                //we have to always check that we havent run out of rooms
                if(roomIndex < this.rooms.length){
                    //add room to current side branch
                    remainderBranches[r].push(this.rooms[roomIndex]);
                    //current room is assigned to branch
                    //some increment roomIndex, so we have 1 less rooms left to assign to side branches
                    roomIndex++;
                    if(b > 0){
                        //if this isnt the first room of a side branch
                        //we can add link to connect it to the end of the side branch
                        let previousId = remainderBranches[r][b-1].id;
                        let currentId = remainderBranches[r][b].id;
                        this.links.push({ source: previousId, target: currentId}); 
                    }
                }
            }
        }

        ////////////////////////////////////////////////////////////////////////////
        //for each side branch determine all the locations
        //where we can attach it to the main branch
        //while ensuring attaching it doesnt make a new longest branch
        //then randomly attach the sidebranch to the main branch at a valid location
        ////////////////////////////////////////////////////////////////////////////
        for (let r = 0; r < remainderBranches.length; r++) {
            const sideBranch = remainderBranches[r];
            //sometimes sideBranch is allocated but we run out of rooms before its populated
            if(sideBranch.length == 0){ continue; }
            //last node in a branch is always a leaf
            sideBranch[sideBranch.length - 1].isLeaf = true;
            const attachableRoomIndexs = [];
            //loop from 3rd room in main branch to determine where we can attach this sidebranch
            for (let i = 2; i < mainBranch.length; i++){
                //add 1 to zero based index to get length of current segment of main branch
                //then add sidebranch length to determine total sidebranch length
                let sideBranchLength = (i + 1) + sideBranch.length;
                if(sideBranchLength < (prefix + longestBranch)){
                   attachableRoomIndexs.push(i);
                }
            }
            //randomly 'roll' to determine which valid room
            //on mainbranch to attach sidebranch to
            let optionCount = attachableRoomIndexs.length;
            //sometimes there is nowhere you can attach branch??? seems like should be impossible could be bug
            if(optionCount == 0){ continue; }
            let randomOptionIndex = dice(1,optionCount) - 1;
            let selectedRoomIndex  = attachableRoomIndexs[randomOptionIndex];
            //attach the first room in sidebranch to the valid room in mainbranch
            let attachSourceId = mainBranch[selectedRoomIndex].id;
            let attachTargetId = sideBranch[0].id;
            this.links.push({ source: attachSourceId, target: attachTargetId }); 
        }
    }

    __classifyRooms(){
        for (var i = 0; i < this.rooms.length; i++){
            const room = this.rooms[i];

            if(room == this.root) { 
                room.type = 'root'
            }
            else if(i == 0) {
                room.type = 'lobby'
            }
            else {
                if(room.contents.filter(c => c.type == 'password').length){
                    room.type = 'password'
                }else if(room.contents.filter(c => c.type == 'file').length){
                    room.type = 'file'
                }else if(room.contents.filter(c => c.type == 'control').length){
                    room.type = 'control'
                }else{
                    room.type = 'ice'
                }
            }
        }
    }

    constructor(diffculty, numRooms) {

        if (!numRooms) {
            var numRooms = dice(3, 6)
        }

        this.diffculty = diffculty;
        this.rooms = [];
        this.links = [];
        this.root = {};

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
        this.__classifyRooms();
    } 
}

function rollContents(alreadyRolled, tableName, numDice, isLeaf) {
    var roll = dice(numDice, 6)
    if (alreadyRolled[tableName][roll]) {
        return rollContents(alreadyRolled, tableName, numDice, isLeaf);
    }
    else if(isLeaf && tables[tableName][roll].type == 'password'){
        return rollContents(alreadyRolled, tableName, numDice, isLeaf);
    }
    else {
        var result = tables[tableName][roll];
        if ((result[0].type != "file") && (result[0].type != "control")) {
            alreadyRolled[tableName][roll] = true;
        }
        return result;
    }
}
