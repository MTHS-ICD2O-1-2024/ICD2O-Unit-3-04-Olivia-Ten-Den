// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Olivia Ten Den
// Created on: April 7, 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates the area of a trapezoid.
 */
function calculateVolumeOfSphere() {
  // input
  const radiusOfSphere = parseFloat(
    document.getElementById("radius-of-sphere").value
  )

  // process
  const volumeOfSphere = (4 / 3) * Math.PI * radiusOfSphere ** 3

  // output
  document.getElementById("volume").innerHTML =
    "The volume is: " + volumeOfSphere + " cm³"
}
