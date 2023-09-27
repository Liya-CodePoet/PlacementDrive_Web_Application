const firebaseConfig = {
    apiKey: "AIzaSyCf8TkfipanvrO0Z_FHT9cHv5LvR9ImFfM",
    authDomain: "placementdrive-c2866.firebaseapp.com",
    databaseURL: "https://placementdrive-c2866-default-rtdb.firebaseio.com",
    projectId: "placementdrive-c2866",
    storageBucket: "placementdrive-c2866.appspot.com",
    messagingSenderId: "798924021032",
    appId: "1:798924021032:web:0fcf61762dadde9c42841d"
  };

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("QueryForm");

document.getElementById("QueryForm").addEventListener("submit", submitForm);

function submitForm(e) {
e.preventDefault();

var name = getElementVal("Fname");
var emailid = getElementVal("email");
var PhNo = getElementVal("PhNo");
var dept = getElementVal("dept");
var msgContent = getElementVal("Ques");

saveMessages(name, emailid,PhNo,dept, msgContent);

//   enable alert
document.querySelector(".alert").style.display = "block";

//   remove the alert
setTimeout(() => {
  document.querySelector(".alert").style.display = "none";
}, 3000);

//   reset the form
document.getElementById("contactform").reset();
}

const saveMessages = (name, emailid, PhNo,dept,msgContent) => {
var newContactForm = contactFormDB.push();

newContactForm.set({
  name: name,
  emailid: emailid,
  PhNo:PhNo,
  dept:dept,
  msgContent: msgContent,
});
};

const getElementVal = (id) => {
return document.getElementById(id).value;
};