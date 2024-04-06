/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Joseph Sarno
      Date: 04/06/2024  

      Filename: project02-04.js
 */

// Constants
const CHICKEN_PRICE = 10.95;
const HALIBUT_PRICE = 13.95;
const BURGER_PRICE = 9.95;
const SALMON_PRICE = 18.95;
const SALAD_PRICE = 7.95;
const SALES_TAX = 0.07;

// Function to display a numeric value as a text string in the format $##.## 
function formatCurrency(value) {
    return "$" + value.toFixed(2);
}

// Function to calculate total cost including tax
function calcTotal() {
    // Declare variables
    let cost = 0;
    let buyChicken = document.getElementById("chicken").checked;
    let buyHalibut = document.getElementById("halibut").checked;
    let buyBurger = document.getElementById("burger").checked;
    let buySalmon = document.getElementById("salmon").checked;
    let buySalad = document.getElementById("salad").checked;
    
    // Calculate cost based on selected items
    if (buyChicken) {
        cost += CHICKEN_PRICE;
    }
    if (buyHalibut) {
        cost += HALIBUT_PRICE;
    }
    if (buyBurger) {
        cost += BURGER_PRICE;
    }
    if (buySalmon) {
        cost += SALMON_PRICE;
    }
    if (buySalad) {
        cost += SALAD_PRICE;
    }
    
    // Display total cost of items
    document.getElementById("foodTotal").innerHTML = formatCurrency(cost);
    
    // Calculate tax
    let tax = cost * SALES_TAX;
    
    // Display tax
    document.getElementById("foodTax").innerHTML = formatCurrency(tax);
    
    // Calculate total cost including tax
    let totalCost = cost + tax;
    
    // Display total bill
    document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
}

// Event handlers
document.getElementById("chicken").addEventListener("click", calcTotal);
document.getElementById("halibut").addEventListener("click", calcTotal);
document.getElementById("burger").addEventListener("click", calcTotal);
document.getElementById("salmon").addEventListener("click", calcTotal);
document.getElementById("salad").addEventListener("click", calcTotal);
