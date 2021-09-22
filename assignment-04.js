// ========== Problem-01. Convert seer to mon function where we know that 40 seer is equal 1 mon. ==========

function seerToMon(inputSeer) {
    if (inputSeer < 0) {
        return 'Please provide positive seer value.'; // alarming message for negative input.
    } else if (typeof(inputSeer) === 'string') {
        return 'Please provide number value instead of text.'; // alarming message for text/string input
    } else {
        return (inputSeer / 40); // result convet seer to mon
    }
}

let userInputSeer = 80; // user input value in seer

console.log(seerToMon(userInputSeer));

// ========== Problem - 02 ==========

function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {
    if (shirtQuantity < 0 || pantQuantity < 0 || shoeQuantity < 0) {
        return 'Product quantity could not be negative, please provide positive quantity.';
    } else if (typeof(shirtQuantity) === 'string') {
        return 'Please provide number quantity for shirts instead of text value.';
    } else if (typeof(pantQuantity) === 'string') {
        return 'Please provide number quantity for pants instead of text value.';
    } else if (typeof(shoeQuantity) === 'string') {
        return 'Please provide number quantity for shoes instead of text value.';
    } else {
        let shirtTotalPrice = shirtQuantity * 100; // total shirts price
        let pantTotalPrice = pantQuantity * 200; // total pants price
        let shoeTotalPrice = shoeQuantity * 500; // total shoes price

        return (shirtTotalPrice + pantTotalPrice + shoeTotalPrice); // return complete total price for all shirts, pants and shoes
    }
}

// below get user input, for customer's purchase quantity of shirts, pants & shoes
let shirtSellQuantity = 1;
let pantSellQuantity = 1;
let shoeSellQuantity = 1;

let totalPurchaseAmount = totalSales(shirtSellQuantity, pantSellQuantity, shoeSellQuantity); // output for total purchase amount

console.log(totalPurchaseAmount);

// ========== Problem-03 ==========

function deliveryCost(deliveryQuantity) {
    if (deliveryQuantity < 0) {
        return 'Please enter positive delivery quantity'; // Message, if delivery input is found negative value.
    } else if (typeof(deliveryQuantity) === 'string') {
        return 'Please provide number of delivery quantity instead of text value.'; // Message if delivery input is found string type.
    } else if (deliveryQuantity <= 100) {
        return deliveryQuantity * 100; // if delivery quantity 1 to 100.
    } else if (deliveryQuantity > 100 && deliveryQuantity <= 200) {
        return (100 * 100) + (deliveryQuantity - 100) * 80; // if delivery quantity more than 100.
    } else if (deliveryQuantity > 200) {
        return (100 * 100) + (100 * 80) + (deliveryQuantity - 200) * 50; // if delivery quantity more than 200.
    } else {
        return 'Please enter delivery quantity.'; // Message, if delivery input is found blank.
    }
}

let tShirtQuantity = 300;

let totalDeliveryCost = deliveryCost(tShirtQuantity);

console.log(totalDeliveryCost);

// ========== Problem - 04 (Get first friend name having character 5 in array of friends name) ==========

function perfectFriend(friendsName) {
    for (let friend of friendsName) {
        if (friend.length == 5) {
            return friend;
            break;
        }
    }
}

let myAllFriends = ['Rittikh', 'Salman', 'Sharukh', 'Dev', 'Ankush', 'Ameer', 'Jeeth', 'Masud', 'Sohag', 'Dawud', 'Aalia']; // all friends name

let friendNameChar5 = perfectFriend(myAllFriends); // friend name have character 5

console.log(friendNameChar5);