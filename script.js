// script.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCXDxynz9AKrexXIUmvza8xnPA2HriiePQ",
  authDomain: "sos-project-23171.firebaseapp.com",
  databaseURL: "https://sos-project-23171-default-rtdb.firebaseio.com",
  projectId: "sos-project-23171",
  storageBucket: "sos-project-23171.firebasestorage.app",
  messagingSenderId: "739080997565",
  appId: "1:739080997565:web:8794ee9ba4f4f27de4c5d4"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Write example data (optional - you can remove this if you want)
set(ref(db, "demo/message"), { text: "Hello from the website!" })
  .then(() => console.log("Demo data written"))
  .catch(console.error);

// Listen for realtime updates and update page elements
onValue(ref(db, "sos/temperature"), snapshot => {
  document.getElementById("temp").textContent = snapshot.val() ?? "No data";
});

onValue(ref(db, "sos/meat"), snapshot => {
  document.getElementById("meat").textContent = snapshot.val() ?? "No data";
});

onValue(ref(db, "sos/status"), snapshot => {
  document.getElementById("status").textContent = snapshot.val() ?? "No data";
});
