var pistol={type:"pistol", imag:"pisto1.svg", range1:13, range2:15, range3:20, range4:25, range5:30, range6:30, range7:"NA", range8:"NA"
}
var smg={type:"smg", imag:"smag2.svg",range1:15, range2:13, range3:15, range4:20, range5:25, range6:25, range7:30, range8:"NA"
}
var shotgunslug={type:"shotgun(slug)", imag:"pisto1.svg", range1:13, range2:15, range3:20, range4:25, range5:30, range6:35, range7:"NA", range8:"NA"
}
var assault={type:"assault rifle", imag:"pisto1.svg",range1:17, range2:16, range3:15, range4:13, range5:15, range6:20, range7:25, range8:30
}
var sniper={type:"sniper rifle", imag:"pisto1.svg",range1:30, range2:25, range3:25, range4:20, range5:15, range6:16, range7:17, range8:20
}
var archery={type:"bow and xbow", imag:"pisto1.svg",range1:15, range2:13, range3:15, range4:17, range5:20, range6:22, range7:25, range8:"NA"
}
var grenade={type:"grenade", imag:"pisto1.svg",range1:16, range2:15, range3:15, range4:17, range5:20, range6:22, range7:25, range8:"NA"
}
var launcher={type:"rocket launcher", imag:"pisto1.svg",range1:13, range2:15, range3:20, range4:25, range5:30, range6:30, range7:"NA", range8:"NA"
}
var weapons=[pistol,smg,shotgunslug,assault,sniper,archery,grenade,launcher]


var autofire={smg:[],assault:[]};
autofire.smg={range1:15,range2:13,range3:15,range:20,range:25}
autofire.assault={range1:17,range2:16,range3:15,range:13,range:15}

var specialstuf={
    shotgunshell:{title:"Shotgun Shells",desc:"3d6 dmg, shoulder arms roll vs dv13 to hit everything 6 meters in front"},
    suppresive:{title:"Suppressive Fire",desc:"10 ammo, everyone 25m and line of sight must take cover (run if necessary)next turn unless they beat autofire roll vs concentration roll"},
    explosive:{title:"Explosives and grendades",desc:"dmg/effect, 10m*10m square centered at target. If you miss, gm decides where grenade lands within explosion area. Reflex evasion puts player outside blast area on success. If cover is destroyed, dmg penetrates ."}
}

function popweapons() {
    var popo;
    for (var i=0; i<weapons.length-1;i++);{
        popo +='<div class="weapon" id=weap'+i+' style="background-image: url('+weapons[i].imag +')"><p class="type">'+weapons[i].type+ '</p></div>';
        document.getElementById("arm1").innerHTML += '<div class="weapon" id=weap'+i+' style="background-image: url('+weapons[i].imag +')"><p class="type">'+weapons[i].type+ '</p></div>';
    }
    document.getElementById("lop").innerText+=popo;
}

popweapons();