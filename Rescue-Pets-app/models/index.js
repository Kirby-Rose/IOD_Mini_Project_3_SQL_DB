"use strict";
import Animal from "./animal.js";
import Contact from "./contact.js";
import Identifying from "./identifying.js";
import Medical from "./medical.js";
import Personality from "./personality.js";

async function init() {
  await Contact.sync();
  await Animal.sync();
  await Medical.sync();
  await Identifying.sync();
  await Personality.sync();
}

init();

export { Contact, Animal, Medical, Identifying, Personality };
