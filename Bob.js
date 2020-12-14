class Bob{
    constructor(x, y){
        var options = {
            isStatic: false,
            restitution: 1,
            friction: 0,
            density: 7.8
        }
        this.body = Bodies.circle(x, y, 40, options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill(199,36,177);
        ellipseMode(RADIUS);
        ellipse(0, 0, 40);
        pop();
    }
}