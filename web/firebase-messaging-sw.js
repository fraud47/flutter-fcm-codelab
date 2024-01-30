importScripts("https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-compat.js");

// todo Copy/paste firebaseConfig from Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyCGjZOhtM-eoDKBQn9MJ4IBB4HaeCcbBVA",
  authDomain: "fcm4flutter-c222e.firebaseapp.com",
  projectId: "fcm4flutter-c222e",
  storageBucket: "fcm4flutter-c222e.appspot.com",
  messagingSenderId: "944322781149",
  appId: "1:944322781149:web:1b12ebc5c520639f7de034"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// todo Set up background message handler
messaging.onBackgroundMessage((message) => {
 console.log("onBackgroundMessage", message);
});
