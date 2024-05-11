"use strict";

// Step 1: Declare useShip variable and add event listener
const useShip = document.getElementById("useShip");

useShip.addEventListener("click", copyShippingToBilling);

// Step 2: Create copyShippingToBilling function
function copyShippingToBilling() {
    // Check if useShip is checked
    if (useShip.checked) {
        // Copy shipping values to billing fields
        document.getElementById("firstnameBill").value = document.getElementById("firstnameShip").value;
        document.getElementById("lastnameBill").value = document.getElementById("lastnameShip").value;
        document.getElementById("address1Bill").value = document.getElementById("address1Ship").value;
        document.getElementById("address2Bill").value = document.getElementById("address2Ship").value;
        document.getElementById("cityBill").value = document.getElementById("cityShip").value;
        document.getElementById("countryBill").value = document.getElementById("countryShip").value;
        
        // Copy selected index of stateShip to stateBill
        document.getElementById("stateBill").selectedIndex = document.getElementById("stateShip").selectedIndex;
    }
}

// Step 3: Define formElements, fieldCount, and errorBox
const formElements = document.querySelectorAll("input[type='text']");
const fieldCount = formElements.length;
const errorBox = document.getElementById("errorBox");

// Step 4: Add event listeners for form validation
for (let i = 0; i < fieldCount; i++) {
    formElements[i].addEventListener("invalid", showValidationError);
}

// Step 5: Create showValidationError function
function showValidationError(evt) {
    evt.preventDefault(); // Prevent default browser behavior for invalid input
    errorBox.textContent = "Complete all highlighted fields";
}
