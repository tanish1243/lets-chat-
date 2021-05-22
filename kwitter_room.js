
var firebaseConfig = {
  apiKey: "AIzaSyDdlmMZlAroRkY7OwHRG32TePzJr9N46Ho",
  authDomain: "letuschat-7dd67.firebaseapp.com",
  databaseURL: "https://letuschat-7dd67-default-rtdb.firebaseio.com",
  projectId: "letuschat-7dd67",
  storageBucket: "letuschat-7dd67.appspot.com",
  messagingSenderId: "260623423047",
  appId: "1:260623423047:web:1559e49e8d51d5b7d54362"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  

  function logout(){
    window.location="index.html";
    localStorage.removeItem("Username");
    localStorage.removeItem("Room_name");
  }
  function addroom(){
    var roomname= document.getElementById("roomname").value;
    firebase.database().ref("/").child(roomname).update({
          purpose: "adding roomname"
    })  ;
    localStorage.setItem("Room_Name",roomname );
    window.location="kwitter_page.html";
    var username =  localStorage.getItem("Username");
    document.getElementById("usernamedisplay").innerHTML="Welcome "+ username+"!";

     }
     function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
     console.log(Room_names);
     var row="<div class='roomname'id="+ Room_names+"onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>"
      document.getElementById("output").innerHTML+= row;

     //End code
     });});}
     getData();
     