
let car = new Car(0);
function pressKeyCode(event){
    if(event.keyCode == 37){
       car.move(-20);
    }else if(event.keyCode == 39){
        car.move(20);
    }
    car.display();
}

