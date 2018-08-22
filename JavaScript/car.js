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
        car.style.left = this.posX+"px";
    }
    
    move(deplacement){
        if(this.hitLeftLimit()){
            this.posX = ($('#road').offset().left);
        }else if(this.hitRightLimit()){
            this.posX = ($('#road').offset().left + $('#road').width()-100);
        }else{
            this.posX += deplacement;
        }
    }
    hitLeftLimit(){
        return this._posX < ($('#road').offset().left);
    }
    hitRightLimit(){
        return this._posX > ($('#road').offset().left + $('#road').width() - 100);
    }
}