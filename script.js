var current = "hand"
var clickCounter = 10;
var offers = {
    hand: {
        speed: 0.1,
    },
    woodPickaxe: {
        price: 10,
        speed: 0.2,
        image: "Wooden_Pickaxe.png"
    },
    stonePickaxe: {
        price: 11,
        speed: 0.5,
        image: "Iron_Pickaxe.png",
    },
    ironPickaxe: {
        price: 15,
        speed: 1,
        image: "Fehlt",
    },
    goldPickaxe: {
        price: 20,
        speed: 1,
        image: "Fehlt",
    },
    diamondPickaxe: {
        price: 20,
        speed: 1,
        image: "Fehlt",
    }
}

function refresh(){
    document.getElementById("clickCounter").innerHTML = clickCounter.toFixed(1)
}

refresh();

document.getElementById("clickButton").addEventListener("click",function(e){
    clickCounter = clickCounter + offers[current].speed;
    refresh();
})

var buttons = document.querySelectorAll(".button");

console.log(buttons);

[].forEach.call(buttons, function(btn) {
    btn.addEventListener("click",function(e) {
        if(clickCounter > offers[btn.id].price || clickCounter == offers[btn.id].price){
            current = btn.id;
            clickCounter = clickCounter - offers[btn.id].price;
            refresh();
            document.querySelector("#imgPickaxe").src = "Texturen/" + offers[btn.id].image;
        }
        else{
            alert("DU HAST NICHT GENUG GELD!!!!!!!!")
        }
    
    });
    
});
