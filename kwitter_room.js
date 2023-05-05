var firebaseConfig = {
      apiKey: "AIzaSyDwOsFlZJMoy5-JbDG8appoeFP5EEFVmvE",
      authDomain: "kwitterchitra.firebaseapp.com",
      databaseURL: "https://kwitterchitra-default-rtdb.firebaseio.com",
      projectId: "kwitterchitra",
      storageBucket: "kwitterchitra.appspot.com",
      messagingSenderId: "869950038563",
      appId: "1:869950038563:web:bf53a11cb289462e2fc796"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  //ADD YOUR FIBASE LINKS
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome "+user_name;
  function addroom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
  }
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name' id='"+Room_names+"' onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirecttoroomname(name){
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";

}


