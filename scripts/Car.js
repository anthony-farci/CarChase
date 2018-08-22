class Car {

    //Initializes this car with the given position.
    constructor(posX, posY) {
        this._posX = posX;
        this._posY = posY;
        this._image = 'images/car.png';
    }

    //Sets the horizontal position.
    set posX(value) {
        this._posX = value;
    }

    //Sets the vertical position.
    set posY(value) {
        this._posY = value;
    }

    //Displays the car.
    display() {
        $('#car').attr('src', this._image);
        $('#car').css('position', 'absolute');
        $('#car').css('bottom', $('#road').offset().top + 50 + "px");
        $('#car').css('top', `${this._posY}px`);
        $('#car').css('left', `${this._posX}px`);
    }

    //Moves this car right or left depending on the given deplacement.
    //dx - is the deplacement in px.
    move(dx) {
        if (this.hasHitLeftLimit()) {
            this._posX = ($('#road').offset().left);
        } else if (this.hasHitRightLimit()) {
            this._posX = ($('#road').offset().left + $('#road').width() - 100);
        } else {
            this._posX += dx;
        }
    }

    //True if this car hit the left limit of the road.
    hasHitLeftLimit() {
        return this._posX < ($('#road').offset().left);
    }

    //True if this car hit the right limit of the road.    
    hasHitRightLimit() {
        return this._posX > ($('#road').offset().left + $('#road').width() - 100);
    }
}