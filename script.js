var current = "hand"
var clickCounter = 0;
var offers = {
    hand: {
        speed: 0.1,
        image: "Hand.jpg",
    },
    woodPickaxe: {
        price: 30,
        speed: 0.2,
        image: "Wooden_Pickaxe.png",
        name: "Holzspitzhacke",
    },
    stonePickaxe: {
        price: 70,
        speed: 0.5,
        image: "Stone_Pickaxe.png",
        name: "Steinspitzhacke",
    },
    ironPickaxe: {
        price: 90,
        speed: 1.2,
        image: "Iron_Pickaxe.png",
        name: "Eisenspitzhacke",
    },
    goldPickaxe: {
        price: 100,
        speed: 1.5,
        image: "Gold_Pickaxe.png",
        name: "Goldspitzhacke",
    },
    diamondPickaxe: {
        price: 150,
        speed: 2,
        image: "Diamond_Pickaxe.png",
        name: "Diamantspitzhacke"
    }
}

function refresh(){
    document.getElementById("clickCounter").innerHTML = clickCounter.toFixed(1);
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
            document.querySelector("#werkzeug").innerHTML = offers[btn.id].name
        }
        else{
            alert("Du hast nicht genug Geld um " + offers[btn.id].name + " zu kaufen!");
        }
    
    });
    
});