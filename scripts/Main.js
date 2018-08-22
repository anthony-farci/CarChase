let carX = $('#road').width() / 2 - 50 + $('#road').offset().left;
let carY = $('#road').offset().top + $('#road').height() - 200;
let car = new Car(carX, carY);

//Manages the moves of the car.
function pressKeyCode(event) {
    if (event.keyCode == 37) {
        car.move(-10);
    } else if (event.keyCode == 39) {
        car.move(10);
    }
    car.display();
}

$('document').ready( function() {
    car.display();
});