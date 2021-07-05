class slingShot
{
    constructor(bodyA, PointB)
    {
        var options =
        {
            'bodyA' : bodyA,
            'pointB' : PointB,
            'stiffness' : 0.04,
            'length' : 10,
        }
        this.pointB = PointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    
    createLine()
    {
        if(this.sling.bodyA)
        {
            strokeWeight(3);
            line(this.sling.bodyA.position.x, this.sling.bodyA.position.y, this.pointB.x, this.pointB.y)
        }
    }
    
    fly()
    {
        this.sling.bodyA = null;
    }
}
