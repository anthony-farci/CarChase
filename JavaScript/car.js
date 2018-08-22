class Car{
    
    constructor(posX){
        this.posX = posX;
    }
    
    get posX(){
        return this._posX;
    }

    set posX(value){
        this._posX = value;
    }
    
    display(){
        let car = document.getElementById('car');
        car.style.position = "absolute";
        car.style.left = this.posX+"px";
    }
    
    move(deplacement){
        this.posX += deplacement; 
    }
    
}