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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });

    document.getElementById("msg").value = "";
}
//End code
    } });  }); }
getData();
