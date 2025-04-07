// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Olivia Ten Den
// Created on: April 7, 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function converts Fahrenheit to Celsius.
 */
function convertFahrenheitToCelsius() {
  // input
  const degreesInFahrenheit = parseFloat(
    document.getElementById("degrees-in-fahrenheit").value
  )

  // process
  const degreesInCelsius = (degreesInFahrenheit - 32) * (5/9)

  // output
  document.getElementById("convert-fahrenheit-to-celsius").innerHTML =
    "The temperature in Celsius is: " + degreesInCelsius + " cm³"
}
