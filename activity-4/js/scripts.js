//welcome message
var user = 'Kathryn';
var salutation = 'Hello, ';
var greeting = salutation + user + '! Here are the latest product reviews.';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

//product price
var price = 39.99,
    memberDiscount = 0.10,
    memberPrice = price - (price * memberDiscount),
    priceEl = document.getElementById('price'),
    memberPriceEl = document.getElementById('member-price');

    priceEl.textContent = price.toFixed(2);
    memberPriceEl.textContent = memberPrice.toFixed(2);