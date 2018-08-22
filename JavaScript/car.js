class Car{
    
    constructor(posX){
        this.posX = posX;
        this._image = 'image/car.png';
    }
    
    get posX(){
        return this._posX;
    }

    set posX(value){
        this._posX = value;
    }
    
    display(){
        let car = document.getElementById('car');
        $('#car').attr('src', this._image);
        car.style.position = "absolute";
        car.style.left = this.posX+"px";
    }
    
    move(deplacement){
        this.posX += deplacement; 
    }
    
}