"use strict";
/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 3


   Filename: mas_register.js

   Author: Trent Peterson
      Date:   4.22.19    
   
   Function List
   =============
   
   formTest()
      Performs a validation test on the selection of the conference
      session package and the conference discount number
   
   calcCart()
      Calculates the cost of the registration and saves data
      in session storage
      
   writeSessionValues()
      Writes data values from session storage in to the
      registration summary form


*/

window.onload = function () {
      calcCart();
      document.getElementById("regSubmit").onclick = sessionTest();
      document.getElementById("fnBox").onblur = calcCart();
      document.getElementById("lnBox").onblur = calcCart();
      document.getElementById("groupBox").onblur = calcCart();
      document.getElementById("mailBox").onblur = calcCart();
      document.getElementById("phoneBox").onblur = calcCart();
      document.getElementById("banquetBox").onblur = calcCart();


}