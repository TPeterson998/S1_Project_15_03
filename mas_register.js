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
//this loads my stuff when the window starts
window.onload = function () {
      calcCart();
      //loads the session test function when the submit button is clicked
      document.getElementById("regSubmit").onclick = sessionTest;
      //These load the calcCart when 
      document.getElementById("fnBox").onblur = calcCart;
      document.getElementById("lnBox").onblur = calcCart;
      document.getElementById("groupBox").onblur = calcCart;
      document.getElementById("mailBox").onblur = calcCart;
      document.getElementById("phoneBox").onblur = calcCart;
      document.getElementById("banquetBox").onblur = calcCart;
      //this loads the calcCart when the session box changes
      document.getElementById("sessionBox").onchange = calcCart;
      //this loads the calcCart function when you click the mediaCb
      document.getElementById("mediaCB").onclick = calcCart;
}

function sessionTest() {
      //this sets a custom validity if their is no option selected in the select box
      var session = document.getElementById("sessionBox");
      if (session.selectedIndex === -1) {
            session.setCustomValidity("Select a Session Package");
      } else {
            session.setCustomValidity("");
      }
}

function calcCart() {

      //These get the value of the things that the user inputs into the form
      sessionStorage.setItem("confName", document.getElementById("fnBox").value + " " + document.getElementById("lnBox").value);
      sessionStorage.setItem("confGroup", document.getElementById("groupBox").value);
      sessionStorage.setItem("confMail", document.getElementById("mailBox").value);
      sessionStorage.setItem("confPhone", document.getElementById("phoneBox").value);
      sessionStorage.setItem("confBanquet", document.getElementById("banquetBox").value);
      //this gets the cost for how many banquets the user selected
      sessionStorage.setItem("confBanquetCost", document.getElementById("banquetBox").value * 55);
      //this gets the cost of what ever the selection list is
      var session = document.getElementById("sessionBox");
      if (session.selectedIndex !== -1) {
            sessionStorage.setItem("confSession", session[session.selectedIndex].innerText);
            sessionStorage.setItem("confSessionCost", session[session.selectedIndex].value);
      } else {
            sessionStorage.setItem("confSession", " ");
            sessionStorage.setItem("confSessionCost", 0);
      }
      //This gets the cost of the checked box if it is checked
      var checkBox = document.getElementById("mediaCB");
      if (checkBox.checked == true) {
            sessionStorage.setItem("confPack", "yes");
            sessionStorage.setItem("confPackCost", 115);
      } else {
            sessionStorage.setItem("confPack", "no");
            sessionStorage.setItem("confPackCost", 0);
      }
      //This adds the costs of several things
      sessionStorage.setItem("confTotal", parseFloat(sessionStorage.getItem("confSessionCost")) + parseFloat(sessionStorage.getItem("confBanquetCost")) + parseFloat(sessionStorage.getItem("confPackCost")));
      writeSessionValues();
}

function writeSessionValues() {
      //All of these take the info that was gathered above and set it to several spans 
      document.getElementById("regName").textContent = sessionStorage.getItem("confName");
      document.getElementById("regGroup").textContent = sessionStorage.getItem("confGroup");
      document.getElementById("regEmail").textContent = sessionStorage.getItem("confMail");
      document.getElementById("regPhone").textContent = sessionStorage.getItem("confPhone");
      document.getElementById("regSession").textContent = sessionStorage.getItem("confSession");
      document.getElementById("regBanquet").textContent = sessionStorage.getItem("confBanquet");
      document.getElementById("regPack").textContent = sessionStorage.getItem("confPack");
      document.getElementById("regTotal").textContent = "$" + sessionStorage.getItem("confTotal");
}