function display_message(){
    var today=new Date();
    document.getElementById("message").innerHTML = "Thank You!";
    console.log(today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());
}

function display(){
}