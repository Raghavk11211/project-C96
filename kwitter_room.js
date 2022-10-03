function addUser() {
  localStorage.getItem("username", username);
  document.getElementById("username_output").innerHTML = username;
}

const firebaseConfig = {
    apiKey: "AIzaSyAAmWbzJ0fWbpNikl7RpsNFnSR3-R6Etdc",
    authDomain: "letschat-de4ab.firebaseapp.com",
    databaseURL: "https://letschat-de4ab-default-rtdb.firebaseio.com",
    projectId: "letschat-de4ab",
    storageBucket: "letschat-de4ab.appspot.com",
    messagingSenderId: "600713173540",
    appId: "1:600713173540:web:e6619768070d515a1a16b1"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);
  
  window.location = "kwitter_page.html"
}

function logout() {
    window.location = "index.html"
}

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
