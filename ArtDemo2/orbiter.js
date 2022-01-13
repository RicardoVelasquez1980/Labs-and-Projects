class Orbiter {
    constructor(mover, or) {
        //  parent is the mover around which I orbit
        this.loc = createVector(mover.loc.x, mover.loc.y);//createVector(parent.loc.x,parent.loc.y );
        this.mover = mover;
        this.angle = random(TWO_PI);
        this.orbitalRadius = or;
    }

    run() {
        this.update();
        this.render();
    }

    update() {
        this.loc = createVector(this.mover.loc.x, this.mover.loc.y);
        this.angle += 1;
        this.loc.x = this.loc.x + cos(this.angle) * this.orbitalRadius;
        this.loc.y = this.loc.y + sin(this.angle) * this.orbitalRadius;
    }

    render() {
        stroke(0,200,255);
        strokeWeight(100)
       // fill(0, 200, 255);
        //ellipse(this.loc.x, this.loc.y, 10, 10)
        line(this.loc.x, this.loc.y, this.mover.loc.x, this.mover.loc.y)
    }
}
