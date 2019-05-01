/*var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "owo",
  database: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO books (Item Name, Price, Description, Contact) VALUES ?";
  cocon.query(sql, [values], function(err, result){
if (err) throw err;
});
});*/
// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();
var config = {
    apiKey: "AIzaSyDTsFKTGUHqQ4mYGGomFmcDyDpP781DaHs",
    authDomain: "marqet-1df05.firebaseapp.com",
    databaseURL: "https://marqet-1df05.firebaseio.com",
    projectId: "marqet-1df05",
    storageBucket: "marqet-1df05.appspot.com",
    messagingSenderId: "988423971651"
  };
  firebase.initializeApp(config);
var messagesRef = firebase.database().ref(messages);

document.getElementById('ticketlisting').addEventListener('submit',
submitForm);
function submitForm(e){
e.preventDefault();
var title = getInputVal('Title');
var price = getInputVal('Price');
var description = getInputVal('Description');
var contact = getInputVal('Contact');
//saving info from form
saveMessage(title, price, description, contact);
}
function getInputVal(id){
return document.getElementById(id).value;
}
function saveMessage(title, price, description, contact){
var newMessageRef = messagesRef.push();
newMessageRef.set({
title: title
price: price
description: description
contact: contact
});
}
