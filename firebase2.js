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

var database = firebase.database();

function saveToFirebase() {
    database.ref('tasks/' + idGenerator()).set({
      task: todo
    });
  }
 
  // id generator

function idGenerator() {
   let timestamp = new Date();
   let id = timestamp.getHours().toString() +
       timestamp.getMinutes().toString() +
       timestamp.getSeconds().toString() +
       timestamp.getMilliseconds().toString();
       return id;
}

const nameInput = document.getElementById('nameInput');
const ageInput = document.getElementById('ageInput');
const addInput = document.getElementById('addButton');

const db = firebase.database();

function create(name, age) {
   var data = {
      name: name,
      age: age
   };

   return db.ref().child('users').push(data);
}

db.ref('users').on('value', function(snapshot) {
   userList.innerHTML = '';
   snapshot.forEach(function(item) {
      var li = document.createElement('li');
      li.appendChild(document.createTextNode(item.val().name + ': ' + item.val().age));
      userList.appendChild(li);
   });
});

addButton.addEventListener('click', function() {
   create(nameInput.Value, ageInput.value);
});




