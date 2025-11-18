console.log("JS is connected!");

//--- GLOBAL CONSTS ---//
const cat = document.getElementById("cat");
const catWrapper = document.getElementById("cat-wrapper");
const counter = document.getElementById("counter");
const catMessage = document.getElementById("cat-message");

const infoBox = document.getElementById("info-box");
const infoText = document.getElementById("info-text");

const fish = document.getElementById("fish");


//--- VARS ---//
let petCount = 0;

//--- EVENT LISTENERS ---//
/* mouseout event, salem calls you to come back */
cat.addEventListener("mouseout", () => {
    catMessage.textContent = "Come back!";

    setTimeout(() => {
        catMessage.textContent = "";
    }, 700);
})

/* counter and click salem for heart*/
cat.addEventListener("click", (e) => { 
    petCount++;
    counter.textContent = "You've pet salem " + petCount + " times!";

    for (let i=0; i<3; i++) {
        // creates heart element when salem is clicked
        const heart = document.createElement("div");
        heart.textContent = "❤️";
        heart.classList.add("heart");

        // pixel distances
        const offsetX = (Math.random() * 60) - 30; 
        const offsetY = (Math.random() * 40) - 20;  
        /* 60 gives good horizontal spread 
           40 gives good vertical spread 
           30 and 20 center the spread around the click point */ 

        heart.style.left = (e.offsetX + offsetX) + "px"; 
        heart.style.top = (e.offsetY + offsetY) + "px";
        // e.offsetX = exact click position & offsetX/Y = random jitter left/right

        catWrapper.appendChild(heart); // adds heart to page

        setTimeout(() => {
            heart.remove(); // removes heart after 1.5s
        }, 1500);
    }
});

/* info box changes content on hover */
infoBox.addEventListener("mouseover", () => {
    infoText.textContent = "But she's super sweet and loves to cuddle!";
});

infoBox.addEventListener("mouseout", () => {
    infoText.textContent = "Salem's a bombay cat who loves causing trouble";
});

/* info box double click event */
infoBox.addEventListener("dblclick", () => {
    infoBox.classList.add("pulse");
    setTimeout(() => {
        infoBox.classList.remove("pulse");
    }, 500);
});

/* drag fish and feed salem */
// fish is the item being dragged and dropped
fish.addEventListener("dragstart", (e) => {
    fish.classList.add("dragging");
    fish.classList.add("wiggle");
});

fish.addEventListener("dragend", (e) => {
    console.log("Stopped dragging the fish");
});

// salem is the target drop area
cat.addEventListener("dragover", (event) => {
    event.preventDefault(); // allow drop
});

cat.addEventListener("drop", () => {
    catMessage.textContent = "purr 🐟";
    setTimeout(() => {
        catMessage.textContent = "";
    }, 1000);
    fish.classList.remove("dragging");
    fish.classList.remove("wiggle");
});