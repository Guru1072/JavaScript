var myForm=document.forms.form1;
var mess=document.getElementById("msg");
myForm.onsubmit = function(){
    if(myForm.fname.value == " "){
        mess.innerHTML = "plese enter your name";
        return false;
        
    }else
    {
        mess.innerHTML="";
         return true;
    }
       
    
};