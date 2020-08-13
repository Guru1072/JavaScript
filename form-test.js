var myForm = document.forms.form1;
var msg = document.getElementById("message");
myForm.onsubmit = function(){
    if(myForm.Fname.value == ""){
        msg.innerHTML = "Please enter Name";
        return false;
    }else
        {
            msg.innerHTML = "";
            return true;
        }
}