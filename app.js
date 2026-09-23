// require("./1-welcome");
// require("./2-global-this");

import bingbing from "bingbing";
import { sum } from "./maths/index.js";

try {
  bingbing();

  console.log(sum(2, 4, 5));
  // console.log(sum(2));
  // console.log(sum(2, 4, 5));
} catch (e) {
  console.log(e);
}

console.log("Still here!");