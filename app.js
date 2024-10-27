// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsQ_nZjflE-NtlXvdH3JBqweUtQSSyJU8",
  authDomain: "webgit-89.firebaseapp.com",
  projectId: "webgit-89",
  storageBucket: "webgit-89.appspot.com",
  messagingSenderId: "305864021365",
  appId: "1:305864021365:web:ecaa317c32fcc9236c6f3c"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Form submission event listener
document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get user input
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const feedback = document.getElementById("feedback").value;

    // Write data to Firebase
    database.ref("user-feedbacks").push({
        name: name,
        email: email,
        feedback: feedback
    }).then(() => {
        document.getElementById("responseMessage").textContent = "Thank you for your feedback!";
        document.getElementById("userForm").reset();
    }).catch(error => {
        console.error("Error storing feedback:", error);
        document.getElementById("responseMessage").textContent = "Error submitting feedback.";
    });
});
