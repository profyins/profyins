var autofire={smg:{},assault:{}};
autofire.smg={range1:["0-6m",15],range2:["7-12m",13],range3:["13-25m",15],range4:["26-50m",20],range5:["51-100m",25]}
autofire.assault={range1:["0-6m",17],range2:["7-12m",16],range3:["13-25m",15],range4:["26-50m",13],range5:["51-100m",15]}

var specialstuf={
    rangevade:{title:"Ranged Evasion", desc:"A charachter with 8 or higher reflex can choose an opposed evasion check to evade ranged attacks."},
    shotgunshell:{title:"Shotgun Shells",desc:"3d6 dmg, shoulder arms roll vs dv13 to hit everything 6 meters in front"},
    suppresive:{title:"Suppressive Fire",desc:"10 ammo, everyone 25m and line of sight must take cover (run if necessary)next turn unless they beat autofire roll vs concentration roll"},
    explosive:{title:"Explosives and grendades",desc:"dmg/effect, 10m*10m square centered at target. If you miss, gm decides where grenade lands within explosion area. Reflex evasion puts player outside blast area on success. If cover is destroyed, dmg penetrates ."},
    autofiz:{title:"Autofire Mode",desc:"10 ammo, roll against autofire table. 2d6 x  difference in attack and dv/defense"},
    arrow:{title:"Arrows and Bows", desc:"Doesnt require reload. Basic arrows are retrievable"}
}

var pistol={type:"pistol", imag:"pisto1.svg", range1:["0-6m", 13], range2:["7-12m",15], range3:["13-25m",20], range4:["26-50m",25], range5:["51-100m",30], range6:["101-200m",30], range7:["201-400m","NA"], range8:["401-800m","NA"], 
special:[specialstuf.rangevade], auto:0
}
var smg={type:"smg", imag:"smg2.svg",range1:["0-6m", 15], range2:["7-12m",13], range3:["13-25m",15], range4:["26-50m",20], range5:["51-100m",25], range6:["101-200m",25], range7:["201-400m",30], range8:["401-800m","NA"], 
special:[specialstuf.rangevade,specialstuf.suppresive,specialstuf.autofiz],auto:autofire.smg
}
var shotgunslug={type:"shotgun(slug)", imag:"shotty.svg", range1:["0-6m", 13], range2:["7-12m",15], range3:["13-25m",20], range4:["26-50m",25], range5:["51-100m",30], range6:["101-200m",35], range7:["201-400m","NA"], range8:["401-800m","NA"], 
special:[specialstuf.rangevade,specialstuf.shotgunshell], auto:0
}
var assault={type:"assault rifle", imag:"assa.svg",range1:["0-6m",17], range2:["7-12m",16], range3:["13-25m",15], range4:["26-50m",13], range5:["51-100m",15], range6:["101-200m",20], range7:["201-400m",25], range8:["401-800m",30], 
special:[specialstuf.rangevade,specialstuf.suppresive,specialstuf.autofiz], auto:autofire.assault
}
var sniper={type:"sniper rifle", imag:"snipe.svg",range1:["0-6m",30], range2:["7-12m",25], range3:["13-25m",25], range4:["26-50m",20], range5:["51-100m",15], range6:["101-200m",16], range7:["201-400m",17], range8:["401-800m",20], 
special:[specialstuf.rangevade], auto:0
}
var archery={type:"bow and xbow", imag:"bow.svg",range1:["0-6m",15], range2:["7-12m",13], range3:["13-25m",15], range4:["26-50m",17], range5:["51-100m",20], range6:["101-200m",22], range7:["201-400m",25], range8:["401-800m","NA"], 
special:[specialstuf.rangevade,specialstuf.arrow], auto:0
}
var grenade={type:"grenade", imag:"gren.svg",range1:["0-6m",16], range2:["7-12m",15], range3:["13-25m",15], range4:["26-50m",17], range5:["51-100m",20], range6:["101-200m",22], range7:["201-400m",25], range8:["401-800m","NA"], 
special:[specialstuf.rangevade,specialstuf.explosive], auto:0
}
var launcher={type:"rocket launcher", imag:"launch.svg",range1:["0-6m",13], range2:["7-12m",15], range3:["13-25m",20], range4:["26-50m",25], range5:["51-100m",30], range6:["101-200m",30], range7:["201-400m","NA"], range8:["401-800m","NA"], 
special:[specialstuf.rangevade,specialstuf.explosive], auto:0
}
var weapons=[pistol,smg,shotgunslug,assault,sniper,archery,grenade,launcher]
var rchart=[["0-6m",""], ["7-12m",""], "13-25m", "26-50m", "51-100m", "101-200m", "201-400m", "401-800m"]




function popweapons() {
    
    for (var i=0; i<weapons.length;i++){
        document.getElementById("arm1").innerHTML += '<div class="weapon" id='+i+' style="background-image: url('+weapons[i].imag +')" onClick="weap_click(this.innerText,this.id)"><p class="type">'+weapons[i].type+ '</p></div>';
    }
    
}

function weap_click(clicked_id,thisid) {
    
    var all = document.getElementsByClassName('weapon');
    for (var p = 0; p < all.length; p++) {
    all[p].style.backgroundColor = 'orange';}
    

    document.getElementById("rang1").innerHTML="";
    document.getElementById("spe").innerHTML="";
    
    document.getElementById(thisid).style.backgroundColor = "orangered";




    for (var i=0; i<8;i++){
        var ilo=i+1
        document.getElementById("rang1").innerHTML += '<div class="ored" id="rweap'
        +i+'">'
        +weapons[0]["range"+ilo][0]+ '</div><div class="rweapon">'+weapons[thisid]["range"+ilo][1]+'</div>';

    }
    for (var n=0; n<weapons[thisid].special.length;n++){

        document.getElementById(["spe"]).innerHTML += `<div class="ored" style="width:50%;background-color:salmon;margin-top:2px;padding-left:2px">${weapons[thisid].special[n].title}</div>
        <div class="go" style="border: solid salmon;width:90%;padding-left:2px">${weapons[thisid].special[n].desc}</div>
        `    
    }

    if (weapons[thisid].auto!=0){

        document.getElementById(["spe"]).innerHTML += `<div class="ored" style="width:25%;border: solid darkred;background-color:darkred">Autofire Range</div>`

        for (var r=1; r<6;r++){
        document.getElementById(["spe"]).innerHTML +=`
        <div class=af>
            <div class="afrang" style="width:50px;border:solid darkred;float:left;text-align:center">
                <div class="ored" style="width:50px;background-color:darkred">${weapons[thisid].auto["range"+r][0]}</div>
                <div class="afr" style="border-top: solid darkred">${weapons[thisid].auto["range"+r][1]}</div>
            </div>
        </div>
        `
        }
    }

    
    
}


function weap_clickoo(clicked_id)
  {
      alert(clicked_id);
  }


popweapons();