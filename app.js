const generatePage = require("./src/page-template");
const fs = require('fs');

//remove the first two indexes from the process.argv
const profileDataArgs = process.argv.slice(2, process.argv.length);
//extracting array arguments into it's variables
const [name, github] = profileDataArgs;

fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;
    console.log('Portfolio complete! Check out index.html to see the output');
});