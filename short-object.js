var myCar1={
    speed:200,
    driver:"Guru",
    color:"Blue",
    drive :function(speed,time){
    console.log(speed*time)
}
};
console.log(myCar1.driver);
myCar1.drive(50,2);