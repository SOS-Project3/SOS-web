// main.js
document.addEventListener('DOMContentLoaded', () => {
  const meatSelect = document.getElementById('meatType');
  const donenessSelect = document.getElementById('doneness');
  const sendBtn = document.getElementById('sendDataBtn');
  const statusText = document.getElementById('status');

  // Auto-lock doneness to Well Done for Chicken
  meatSelect.addEventListener('change', () => {
    if (meatSelect.value === 'Chicken') {
      donenessSelect.value = 'Well Done';
      donenessSelect.disabled = true;
    } else {
      donenessSelect.disabled = false;
    }
  });

  sendBtn.addEventListener('click', () => {
    const meat = meatSelect.value;
    const doneness = donenessSelect.value;

    if (!meat || !doneness) {
      statusText.textContent = 'Please select meat and doneness.';
      return;
    }

    // Placeholder for Firebase send (to be implemented)
    console.log(`Sending to Firebase: ${meat}, ${doneness}`);
    statusText.textContent = `Sent: ${meat}, ${doneness}`;
  });
});


