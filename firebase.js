   // Your web app's Firebase configuration
      var firebaseConfig = {
         apiKey: "AIzaSyDW5Q9hr--4Arj9A8dbSqkv2h0Vz_8mOWQ",
         authDomain: "blueproject01-b7e1e.firebaseapp.com",
         databaseURL: "https://blueproject01-b7e1e.firebaseio.com",
         projectId: "blueproject01-b7e1e",
         storageBucket: "blueproject01-b7e1e.appspot.com",
         messagingSenderId: "1013056507769",
         appId: "1:1013056507769:web:d7301e78c8969b95cb69a8",
         measurementId: "G-9ETBZEXTW5"
         };
         
   // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // id generator
function idGenerator() {
   let timestamp = new Date();
   let id = timestamp.getHours().toString() +
       timestamp.getMinutes().toString() +
       timestamp.getSeconds().toString() +
       timestamp.getMilliseconds().toString();
       return id;
}

var database = firebase.database();

function saveToFirebase() {
    database.ref('users/' + idGenerator()).set({
      nome: nameInput.value,
      idade: ageInput.value
    });
  }

  const nameInput = document.getElementById('nameInput');
  const ageInput = document.getElementById('ageInput');
  const addInput = document.getElementById('addButton');

  addButton.addEventListener('click', function() {
   saveToFirebase();
   nameInput.value = '';
   ageInput.value = '';
});

database.ref('users').on('value', function(snapshot) {
   userList.innerHTML = '';
   snapshot.forEach(function(item) {
      var li = document.createElement('li');
      li.appendChild(document.createTextNode(item.val().nome + ': ' + item.val().idade));
      userList.appendChild(li);
   });
});



