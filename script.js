import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXDxynz9AKrexXIUmvza8xnPA2HriiePQ",
  authDomain: "sos-project-23171.firebaseapp.com",
  databaseURL: "https://sos-project-23171-default-rtdb.firebaseio.com",
  projectId: "sos-project-23171",
  storageBucket: "sos-project-23171.appspot.com",
  messagingSenderId: "739080997565",
  appId: "1:739080997565:web:8794ee9ba4f4f27de4c5d4",
  measurementId: "G-WXLYFGBX7M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// DOM elements
const meat = document.getElementById("meat");
const doneness = document.getElementById("doneness");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const statusMessage = document.getElementById("statusMessage");
const donenessSection = document.getElementById("doneness-section");

// Show/hide doneness based on meat type
meat.addEventListener("change", () => {
  if (meat.value === "chicken" || meat.value === "fish") {
    donenessSection.style.display = "none";
  } else {
    donenessSection.style.display = "block";
  }
});

// Set initial doneness visibility
meat.dispatchEvent(new Event("change"));

// Start cooking
startBtn.addEventListener("click", () => {
  const selectedMeat = meat.value;
  const selectedDoneness = doneness.value;

  const cookingData = {
    command: "start",
    meat: selectedMeat,
    doneness: (selectedMeat === "beef" || selectedMeat === "lamb") ? selectedDoneness : "default"
  };

  set(ref(db, "sos/command"), cookingData)
    .then(() => {
      statusMessage.textContent = "Status: Cooking started!";
    })
    .catch((error) => {
      statusMessage.textContent = "Status: Error starting cooking.";
      console.error(error);
    });
});

// Stop cooking
stopBtn.addEventListener("click", () => {
  set(ref(db, "sos/command"), {
    command: "stop"
  })
    .then(() => {
      statusMessage.textContent = "Status: Cooking stopped.";
    })
    .catch((error) => {
      statusMessage.textContent = "Status: Error stopping cooking.";
      console.error(error);
    });
});

// Monitor ESP32 response
onValue(ref(db, "sos/status"), (snapshot) => {
  const status = snapshot.val();
  if (status) {
    statusMessage.textContent = `Status: ${status}`;
  }
});
