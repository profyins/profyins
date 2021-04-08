function dsix(){
    return Math.floor((Math.random)*6)+1
}
function dten(){
    return Math.floor((Math.random)*10)+1
}
var rooms = dsix()+dsix()+dsix();
var branch =dten();
var totalbranch= bran(branch)

function bran(brnum){
    var bri=1;
    while (brnum >=7){
        bri=bri+1
        brnum = dten();
    }
}


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
 var hellhound =new prog("hellhound","helh.png","antipersonel",6,6,6,2,20,"2d6 dmg, catch fire, 2dmg");
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


var room12 = {contents: ["file dv6","password dv6","password dv8", "skunk", "wisp" ,"killer"] };
var room318 ={basic:[], standard:[], uncommon:[], advanced:[]};
room318.basic ={
    c1:hellhound,c2:sabretooth,c3:[raven,raven],c4:hellhound,c5:wisp,c6:raven,c7:pasz.dv[0], c8:filz.dv[0],
    c9:conode.dv[0],c10:pasz.dv[0],c11:skunk,c12:asp,c13:scorpion,c14:[killer,skunk],c15:[wisp,wisp,wisp],
    c16:liche
};
room318.standard =[
    "hellhoundx2","hellhoundxkiller","skunkx2","sabretooth","scorpion","hellhound",
    "passworddv8", "filedv8", "controlnodedv8", "passworddv8","asp","killer","liche",
    "asp", "ravenx3", "lichexraven"
];
room318.uncommon =[
    "kraken","hellhoundxscorpion","hellhounxkiller","ravenx2", "sabretooth", "hellhound",
    "passworddv10", "filedv10", "controlnodedv10", "passworddv10", "killer", "liche","dragon",
    "aspxraven","dragonxwisp", "giant"
];
room318.advanced =[
    "hellhoundx3", "aspx2", "hellhoundxliche", "wispx3", "hellhoundxsabretooth", "kraken",
    "passworddv12", "filedv12", "controlnodedv12", "passworddv12", "giant", "dragon", "killerxscorpion",
    "kraken", "ravenxwispxhellhound", "dragonx2"

];


var roomoccu= {roomcontent:[]}
function arcstruct(rooms,totalbranch){

}


function plat(nambo){

document.getElementById("demo").innerHTML=
    `<div class="programbar">
    <div class="icopng">${nambo.icon}</div>
    <div class="rightbox">
      <div class="proname">${nambo.name}</div>
      <div class="stat">per ${nambo.per}</div>
      <div class="stat">spd ${nambo.spd}</div>
      <div class="stat">att ${nambo.atk}</div>
      <div class="stat">def ${nambo.def}</div>
      <div class="stat">rez ${nambo.rez}</div>
      <div class="clear"></div>
      <div class="typi">type 
        <span class="typ">${nambo.type}</span>
      </div>

    </div>
    <div class="efboxright">effect ${nambo.eff}</div>

  </div>`
    
}