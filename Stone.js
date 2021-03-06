class Stone {

    constructor(x,y){
        this.width=50;
        this.height=50;
        var options={
            isStatic:false,
			restitution:0,
			friction:1,
			density:1.2
        }
        this.body= Bodies.rectangle(x,y,this.width,this.height,options);
        this.image= loadImage("images/stone.png");
        World.add(world,this.body);
    }
    


display() {
    var pos = this.body.position;
    push()
    translate(pos.x,pos.y);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    
    pop();
    

}
}