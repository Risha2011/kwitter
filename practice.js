// ADD YOUR FIREBASE LINKS
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

function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}