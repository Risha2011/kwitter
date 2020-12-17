
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA2HYOAo2qBtyWuLScnZvP2KwX0nWCE_ls",
  authDomain: "kwitterapp-e930a.firebaseapp.com",
  databaseURL: "https://kwitterapp-e930a.firebaseio.com",
  projectId: "kwitterapp-e930a",
  storageBucket: "kwitterapp-e930a.appspot.com",
  messagingSenderId: "617827721711",
  appId: "1:617827721711:web:a6898e63a3ad1feac4161a",
  measurementId: "G-BLKN0RH2ZC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });
 localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";

}

function getData() {
  firebase.database().ref("/").on('value', function(snapshot) 
    { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
        { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
