class particle
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0,
			density:1.2

			
			}
		this.r=r
        this.body=Bodies.circle(x, y, this.r, options)
        this.color=color(random(0,255),random(0,255),random(0,255))
		World.add(world, this.body);

	}
	display()
	{
			
			var particlepos=this.body.position;
			var angle =this.body.angle		

			push()
			translate(particlepos.x, particlepos.y);
			rotate(angle)
			rectMode(CENTER)
			//strokeWeight(4);
			fill(this.color);
			ellipseMode(RADIUS);
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}