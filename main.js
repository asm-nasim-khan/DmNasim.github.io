// Initialize Firebase (ADD YOUR OWN DATA)
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgAqSc6L5zbrzfWR781JJbWKNofOZQk10",
  authDomain: "msgrepo-5fa79.firebaseapp.com",
  databaseURL: "https://msgrepo-5fa79-default-rtdb.firebaseio.com",
  projectId: "msgrepo-5fa79",
  storageBucket: "msgrepo-5fa79.appspot.com",
  messagingSenderId: "281846830546",
  appId: "1:281846830546:web:9563e1a1b3ffcbb05b640b",
  measurementId: "G-F9SHR3JHXQ"
};

firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    message:message
  });
}
