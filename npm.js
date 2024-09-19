// npm => node package manager
// npm ko node ka playstore samjho 
// npm ek jagah hai jaha par khoob saare packages milte hai
// bani banaai cheejein/features kehlaate hai packages 
// text -> voice
// npm package for text -> audio
// npm = packages ka playstore | package = files of codes
// how to install 
// npm  i 
// install
// use

// how to paint result
// Import the jokesGenerator function:
var figlet = require("figlet");
figlet("DIVYANSH!!", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });