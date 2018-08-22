
let car = new Car();
function pressKeyCode(event){
        if(event.keyCode == 37){
           car.move(-10);
        }else if(event.keyCode == 39 ){
            car.move(10);
        }
        car.display();
}

