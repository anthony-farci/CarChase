let posX = $('#road').width()/2 - 50 + $('#road').offset().left;
let posY = $('#road').offset().top + $('#road').height() - 200;
let car = new Car(posX, posY);

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

