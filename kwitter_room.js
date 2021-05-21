
var firebaseConfig = {
    apiKey: "AIzaSyBbk657CPROe7uq6MhqUnF4nmwHJKu92pE",
    authDomain: "letschat2-9cae5.firebaseapp.com",
    databaseURL: "https://letschat2-9cae5-default-rtdb.firebaseio.com",
    projectId: "letschat2-9cae5",
    storageBucket: "letschat2-9cae5.appspot.com",
    messagingSenderId: "86285751519",
    appId: "1:86285751519:web:af5acaa9013593263f056a"
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
     