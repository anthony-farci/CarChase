let posCar = $('#road').width()/2 - 50 + $('#road').offset().left
let car = new Car(posCar, 0);

function pressKeyCode(event){
    if(event.keyCode == 37){
       car.move(-20);
    }else if(event.keyCode == 39){
        car.move(20);
    }
    car.display();
}

function makeOpponentSpawn() {
    let posX;
    let posY;
    let opponent = new Car()
}

car.display();

