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
  
  user_name= localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  
  function send() {
        msg= document.getElementById("msg").value;
        firebase.database().ref(room_name).push({  
              message: msg,
              name:user_name,
              likes:0
        });
              
  }
  
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
           firebase_message_id = childKey;
           message_data = childData;
      } });  }); }
