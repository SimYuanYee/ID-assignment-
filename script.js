function display_message(){
    var today=new Date();
    document.getElementById("message").innerHTML = "Thank You!";
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
}

function display(){
    document.getElementById('moreinfo1').innerHTML="For PolyTechnic,I am currently Year 2. I have learnt CyberSecurity,Data Science,Python,Computing Maths and Design Skills"
}