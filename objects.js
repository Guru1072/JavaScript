var mycar=new Object();
mycar.color="blue";
mycar.maxspeed=200;
console.log(mycar.color);
console.log(mycar.maxspeed);
mycar.drive=function(){console.log("Now Driving")};
mycar.drive();