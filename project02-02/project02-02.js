/* JavaScript 7th Edition
   Chapter 2
   Project 02-02

   Application to test for completed form
   Author: Joseph Sarno
   Date: 03/29/24
   Filename: project02-02.js
*/

// Function to verify form fields
function verifyForm() {
      // Declare variables for name, email, and phone
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let phone = document.getElementById("phone").value;
  
      // Check if all fields are filled
      if (name && email && phone) {
          window.alert("Thank you!");
      } else {
          window.alert("Please fill in all fields.");
      }
  }
  
  // Attach event listener to the "submit" button
  document.getElementById("submit").addEventListener("click", verifyForm);
  