document.getElementById('sendBtn').addEventListener('click', () => {
  const meat = document.getElementById('meatSelect').value;
  const doneness = document.getElementById('donenessSelect').value;

  if (!meat || !doneness) {
    alert("Please select both meat type and doneness.");
    return;
  }

  console.log("Selected meat:", meat);
  console.log("Selected doneness:", doneness);

  // Future: send to Firebase
  // For now, show confirmation
  const confirmText = document.getElementById('confirmation');
  confirmText.classList.remove('hidden');
  confirmText.textContent = `✅ Sent: ${meat} - ${doneness}`;

  setTimeout(() => {
    confirmText.classList.add('hidden');
  }, 3000);
});
