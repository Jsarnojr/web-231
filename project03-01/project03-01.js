/* JavaScript 7th Edition
   Chapter 3
   Project 03-01

   Application to calculate total order cost
   Author: Joseph Sarno
   Date:   04/14/24
*/

// Function to display a numeric value as a text string in the format $##.##
function formatCurrency(value) {
      return "$" + value.toFixed(2);
  }
  
  // Declare a variable named menuItems containing the collection of HTML elements belonging to the menuItem class
  var menuItems = document.getElementsByClassName("menuItem");
  
  // Create a for loop to add event listeners to each menuItem element
  for (var i = 0; i < menuItems.length; i++) {
      menuItems[i].addEventListener("click", calcTotal);
  }
  
  // Create the calcTotal() function to calculate the total cost of the customer order
  function calcTotal() {
      // Declare the orderTotal variable, setting its initial value to 0
      var orderTotal = 0;
  
      // Loop through the contents of the menuItems collection
      for (var i = 0; i < menuItems.length; i++) {
          // Apply an if statement to check if the item has been checked
          if (menuItems[i].checked) {
              // If true, increase the value of the orderTotal variable by the value of menuItems[i]
              orderTotal += Number(menuItems[i].value);
          }
      }
  
      // Change the innerHTML property of the element with the id "billTotal" to the formatted orderTotal value
      document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
  }
  