class dustbin
{
	constructor()
	{	
		this.image=loadImage("dustbingreen.png")
		this.leftWallBody=Bodies.rectangle(1050,600,10,100, {isStatic:true})
		this.rightWallBody=Bodies.rectangle(1150,600,10,100 ,{isStatic:true})
		this.bottomBody=Bodies.rectangle(1100,650,200,10, {isStatic:true})
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display()
	{			
			push ();
			rectMode(CENTER);
			rect(this.leftWallBody.position.x,this.leftWallBody.position.y,10,100)
			rect(this.rightWallBody.position.x,this.rightWallBody.position.y,10,100)
			rect(this.bottomBody.position.x,this.bottomBody.position.y,100,10)
			imageMode(CENTER);
			image(this.image, 1100,570,200,200)
			pop()
			
	}

}