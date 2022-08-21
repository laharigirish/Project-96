var firebaseConfig = {
  apiKey: "AIzaSyBNE69osy5y3OLnVwyjYwL5detLY1h4sdE",
  authDomain: "kwitterproject-24fb1.firebaseapp.com",
  databaseURL: "https://kwitterproject-24fb1-default-rtdb.firebaseio.com",
  projectId: "kwitterproject-24fb1",
  storageBucket: "kwitterproject-24fb1.appspot.com",
  messagingSenderId: "986782462148",
  appId: "1:986782462148:web:4946079dc5bf599a3a1991"
};

firebase.initializeApp(firebaseConfig);

var user_name= localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML= "Welcome  " + user_name;

function AddRoom() {
var room_name= document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
  purpose: "Adding room name"
});

window.location= "kwitter_page.html";


}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  
   //Start code
  console.log("Room Name =" + Room_names);
  row= "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names + "</div><hr>";
  document.getElementById("output").innerHTML+=row;
  //End code
  });});}
getData();

function redirectToRoomName(name)
{

localStorage.setItem("room_name", name);
console.log("room_name");
window.location= "kwitter_page.html";
}
function logout(){
localStorage.removeItem("room_name");
localStorage.removeItem("user_name");
window.location= "index.html";

}
