// Import Firebase libraries (assumes already loaded in index.html via <script> tags)
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";

// Firebase config (replace if needed)
const firebaseConfig = {
  apiKey: "AIzaSyCXDxynz9AKrexXIUmvza8xnPA2HriiePQ",
  authDomain: "sos-project-23171.firebaseapp.com",
  databaseURL: "https://sos-project-23171-default-rtdb.firebaseio.com",
  projectId: "sos-project-23171",
  storageBucket: "sos-project-23171.appspot.com",
  messagingSenderId: "739080997565",
  appId: "1:739080997565:web:8794ee9ba4f4f27de4c5d4"
};

// Init app and database
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// 🔼 Function to write data
function writeData(path, value) {
  set(ref(db, path), value)
    .then(() => console.log("Data written successfully"))
    .catch((error) => console.error("Error writing data:", error));
}

// 🔽 Function to read data
function readData(path) {
  const dataRef = ref(db, path);
  onValue(dataRef, (snapshot) => {
    const data = snapshot.val();
    console.log("Received data:", data);
    document.getElementById("firebase-output").innerText = JSON.stringify(data);
  });
}

// Example Usage:
writeData("demo/message", { text: "Hello from the website!" });
readData("demo/message");
