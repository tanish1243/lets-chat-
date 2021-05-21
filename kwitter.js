function adduser(){
    var Username= document.getElementById("username").value;
    localStorage.setItem("Username", Username);
    
    window.location="kwitter_room.html";
 }