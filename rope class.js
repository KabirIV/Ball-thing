Class rope  {
    constructor(body1,body2,offsetX,offsetY)
    {
        this.offsetX = this.offsetX
        this.offsetY = this.offsetY
        var options = {
            bodyA: body1
            bodyB: body2
            pointB:{this.offsetX,this.offsetY}
        }
        //console.log(options)
        this.rope=Constriant.create(options)
        world.add(world,this.rope)

        rope1=new rope(bob1.body1, roof.body, -bobDiameter*2,0)
        rope2=new rope(bob2.body1, roof.body, -bobDiameter*2,0)
        rope3=new rope(bob3.body1, roof.body, -bobDiameter*2,0)
        rope4=new rope(bob4.body1, roof.body, -bobDiameter*2,0)
        rope5=new rope(bob5.body1, roof.body, -bobDiameter*2,0)
    }
}