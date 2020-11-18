class Pinko
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:0.3,
			friction:0,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(x, y, this.r, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var pinkopos=this.body.position;		

			push()
			translate(pinkopos.x, pinkopos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			ellipseMode(RADIUS)
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}