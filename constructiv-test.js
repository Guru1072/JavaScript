var Car= function(id,name,speed,time){
    this.id=id;
    this.name=name;
    this.speed=speed;
    this.form= function(id,name){
        console.log("Id no: "+this.id,"Name of the driver:"+ this.name)
    }
this.proof = function(id,name)
{
    console.log("Age of Driver:"+this.id, "Area of Driver:" + this.name)
}
this.drive= function( speed,time)
{
    console.log(speed* time);
}
this.exp=function(speed,time)
{
    console.log(speed/time);
}
}
var infoName=new Car(415, "Guru");
var infoProof= new Car(30,"Hyderabad");
var infoDrive=new Car();

infoName.form();
infoProof.proof();
 infoDrive.drive(120,3);
infoName.exp(200,10);

    