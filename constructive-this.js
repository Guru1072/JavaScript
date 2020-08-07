var Car= function(speed, driver){
    this.speed= speed;
    this.driver= driver;
    this.zone=zone;
    this.test=function(speed, time)
    {
        console.log(speed*time);
    }

this.drive=function()

{
    console.log("driver name is:" + this.driver);
}
this.area= function(driver,zone){
    console.log("Driver is :"+ this.driver + "Area is: " + this.zone);
}
}
var myCar1= new Car(20,"Ram1");
var myCar2= new Car(23,"Ram2");
var myCar3= new Car(30,"Ram3");
var myCar4=new Car(30,"Ramu","Hyderabad")
myCar4.area();