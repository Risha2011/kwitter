
// ADD YOUR FIREBASE LINKS

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDUtdv0AMNkrFiqqQABAL5tVXJg2gW51To",
    authDomain: "kwitter-9c647.firebaseapp.com",
    projectId: "kwitter-9c647",
    storageBucket: "kwitter-9c647.appspot.com",
    messagingSenderId: "658320851542",
    appId: "1:658320851542:web:205a190f11c2da7e0ab1f7"
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


