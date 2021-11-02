//Array to hold hotel data
var hotels = [];

//Hotel constructor function
function Hotel(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;

    this.checkAvailability = function () {
        return this.rooms-this.booked;
    };
}

//Page initialization function
var init = function () {
    // Construct hotels and add to data array
    hotels.push(new Hotel('Hilton', 200, 150));
    hotels.push(new Hotel('Pfister', 100, 50));
    hotels.push(new Hotel('Days Inn', 150, 140));

    //Write copyright year
    var today = new Date();
    document.getElementById('date').textContent = today.getFullYear();
};

//Hotel list item click handler
var hotelClick = function (event){
//console.log(event); logs events on page

//Retrieve name of hotel clicked on
var hotelName = event.target.innerHTML;

//Find hotel in Array
var hotel = hotels.find(function(hotel){return hotel.name === hotelName});
if(hotel !== undefined){
    //Get reference to elements and set the text content
    var name = document.getElementById('name');
    name.textContent = hotel.name;
    var rooms = document.getElementById('rooms');
    rooms.textContent = hotel.rooms;
    var booked = document.getElementById('booked');
    booked.textContent = hotel.booked;
    var available = document.getElementById('available');
    available.textContent = hotel.checkAvailability();
}
};

//"Wire up" the click event for Hotel List
var list = document.getElementById('hotel-list');
list.onclick = hotelClick;//Assignment, not an execution

init();