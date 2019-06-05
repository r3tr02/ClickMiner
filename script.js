var current = "hand"
var clickCounter = 0;
var activeButtonS;
var diamond_click_sound = document.querySelector("#diamond_click_sound");
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

var savedClickCounter = localStorage.getItem("myClickCounter")
if(savedClickCounter === undefined){
    clickCounter = parseFloat(savedClickCounter)  
}

function refresh(){
    localStorage.setItem("myClickCounter", clickCounter)
    document.getElementById("clickCounter").innerHTML = clickCounter.toFixed(1);
}

refresh();

document.getElementById("clickButton").addEventListener("click",function(e){
    //diamond_click_sound.play()
    clickCounter = clickCounter + offers[current].speed;
    refresh();
})

var buttons = document.querySelectorAll(".button");


[].forEach.call(buttons, function(btn) {
    
    
    btn.addEventListener("click",function(e) {
        if(clickCounter >= offers[btn.id].price){
            if(btn.id !== current) {
                if(confirm("Möchtest du diese Spizhacke wirklich kaufen?")) {
                    current = btn.id;
                    clickCounter = clickCounter - offers[btn.id].price;
                    refresh();
                    document.querySelector("#imgPickaxe").src = "Texturen/" + offers[btn.id].image;
                    document.querySelector("#werkzeug").innerHTML = offers[btn.id].name;
                    if(activeButtonS !== undefined) {
                        document.querySelector(".button.active").classList.remove("active");
                    }    
                    activeButtonS = btn
                    btn.classList.add("active");
                }
            }
        }
        else{
            alert("Du hast nicht genug Geld um " + offers[btn.id].name + " zu kaufen!");
        }
    });    
});a

document.getElementById("header").addEventListener("click",function(e){
    diamond_click_sound.play()
})

setInterval(function(){
    clickCounter += 0.05;
    refresh();
}, 1000)