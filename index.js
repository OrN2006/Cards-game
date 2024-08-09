
let num;

const card1 = document.querySelector("#card1");
const card2 = document.querySelector("#card2");
const card3 = document.querySelector("#card3");
const title = document.querySelector("h1");
const btn = document.querySelector("button");

card1.addEventListener("click", function(){num=getRandomNumber(); handleChangingCards(1, num)})
card2.addEventListener("click", function(){num=getRandomNumber(); handleChangingCards(2, num)})
card3.addEventListener("click", function(){num=getRandomNumber(); handleChangingCards(3, num)})
btn.addEventListener("click", function(){anotherRound(num)});

function anotherRound(num){
    title.textContent = "Choose a card!";
    console.log("final num: "+num);
    if(num === 1){
        card1.classList.remove("winning_card");
        card1.classList.add("starting_card");
        console.log("card1")
    }
    else if(num === 2){
        card2.classList.remove("winning_card");
        card2.classList.add("starting_card");
        console.log("card2")
    }
    else{
        card3.classList.remove("winning_card");
        card3.classList.add("starting_card");
        console.log("card3")

    }
    btn.classList.remove("visible");
    btn.classList.add("invisible");

    card1.classList.remove("disabled");
    card2.classList.remove("disabled");
    card3.classList.remove("disabled");

}


// פעולה המחזירה מספר רנדומלי בין 1 ל 3
function getRandomNumber() {
    let num = Math.floor(Math.random() * 3) + 1;
    console.log(num);
    return num;
}

// הפעולה תצבע מחדש את הכרטיסים
// ותשנה את הצבע של הכרטיס המיוחד בהתאם

function handleChangingCards(num, randNum){
    //  צובע את הכרטיס הנכון
    if(randNum === 1){
        card1.classList.remove("starting_card");
        card1.classList.add("winning_card");
    }
    else if(randNum === 2){
        card2.classList.remove("starting_card");
        card2.classList.add("winning_card");
    }
    else{
        card3.classList.remove("starting_card");
        card3.classList.add("winning_card");
    }

    // מגלה למשתמש האם הוא צדק בניחוש או לא 
    if(num === randNum)
        title.textContent = "You gussed right!"
    else{
        title.textContent ="Opps, that's wrong!"
    }

    card1.classList.add("disabled");
    card2.classList.add("disabled");
    card3.classList.add("disabled");
    btn.classList.remove("invisible");
    btn.classList.add("visible");

}