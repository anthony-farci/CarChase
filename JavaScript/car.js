class Car{
    
    constructor(posX, posY){
        this.posX = posX;
        this._posY = posY;
        this._image = 'image/car.png';
    }
    
    get posX(){
        return this._posX;
    }

    set posX(value){
        this._posX = value;
    }

    set posY(value) {
        this._posY = value;
    }
    
    display(){
        let car = document.getElementById('car');
        $('#car').attr('src', this._image);
        car.style.position = "absolute";
        car.style.bottom = $('#road').offset().top + 50 + "px";
        car.style.top = this._posY + "px";
        car.style.left = this.posX + "px";
    }
    
    move(deplacement){
        this.posX += deplacement; 
    }
    
}