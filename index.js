//Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        
    }

    return gifts;
}

wrapGifts(gifts);

const names= ["Charlie", "Samip", "Ali"];

const eventName= "birthday"

function writeCards(names, eventName) {
    const personalThanksArray = []
    for (let i =0; i < names.length; i++)
        {
           personalThanksArray.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
            //return [`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`];
        };
        return personalThanksArray;
};

function countDown(posNumber){
   let counter= posNumber
    while(counter >= 0){
        console.log(counter); 
        counter-- 
    }; 
}

