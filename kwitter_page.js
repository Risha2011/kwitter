// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDUtdv0AMNkrFiqqQABAL5tVXJg2gW51To",
    authDomain: "kwitter-9c647.firebaseapp.com",
    databaseURL: "https://kwitter-9c647-default-rtdb.firebaseio.com",
    projectId: "kwitter-9c647",
    storageBucket: "kwitter-9c647.appspot.com",
    messagingSenderId: "658320851542",
    appId: "1:658320851542:web:205a190f11c2da7e0ab1f7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

	user_name = localStorage.getItem("user_name");
	room_name = localStorage.getItem("room_name");

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });

  document.getElementById("msg").value = "";
}

function getData() {
  firebase.database().ref("/"+room_name).on('value', function(snapshot)
  {
      document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
       childKey  = childSnapshot.key;
       childData = childSnapshot.val();
       if(childKey != "purpose")
       {
         firebase_message_id = childKey;
         message_data = childData;
       }
    }
  }
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("kwitter.html");
    }