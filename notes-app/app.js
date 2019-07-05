const validator = require('validator');

const getNotes = require("./notes");

console.log(getNotes())

console.log(validator.isEmail("arkadiusz.pawlak.webgmail.com"));
console.log(validator.isURL("google.com"));